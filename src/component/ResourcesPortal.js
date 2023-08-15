import React, { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL, listAll, deleteObject } from "firebase/storage";
import { storage } from "./firebaseConfig";
import { v4 } from "uuid";
import './ServicePage.css'; 


function ResourcesPortal() {
  const [fileUpload, setFileUpload] = useState(null);
  const [fileUrls, setFileUrls] = useState([]);

  const filesListRef = ref(storage, "files/");

  const uploadFile = () => {
    if (fileUpload === null) return;
    const fileRef = ref(storage, `files/${fileUpload.name + v4()}`);
    uploadBytes(fileRef, fileUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setFileUrls((prev) => [...prev, { url, name: fileUpload.name }]);
      });
    });
  };

  useEffect(() => {
    listAll(filesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setFileUrls((prev) => [
            ...prev,
            { url, name: item.name.split("/").pop() },
          ]);
        });
      });
    });
  }, []);

  return (
    <div className="App">
      <div className="upload-section">
        <input
          type="file"
          style={{
            backgroundColor: '#333',
            color: '#fff',
            padding: '0.35rem 1rem',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            marginLeft: '0px',
            marginTop: '40px',
          }}

          onChange={(event) => {
            setFileUpload(event.target.files[0]);
          }}
        />
        <button 
        style={{
          backgroundColor: '#333',
          color: '#fff',
          padding: '0.5rem 1rem',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          marginLeft: '20px',
        }}
        onClick={uploadFile}> Upload File</button>
      </div>
      <div className="file-list">
        <table>
          <thead>
            <tr>
              <th>File Name</th>
              <th>Download Link</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {fileUrls.map((file) => (
              <tr key={file.url}>
                <td>{file.name}</td>
                <td>
                  <a href={file.url} target="_blank" rel="noopener noreferrer">
                    Download
                  </a>
                </td>
                <td>
                  <button
                    onClick={() => {
                      setFileUrls((prev) => prev.filter(item => item.url !== file.url));
                      const fileRef = ref(storage, `files/${file.name}`);
                      deleteObject(fileRef)
                        .then(() => {
                          console.log('File deleted successfully.');
                        })
                        .catch((error) => {
                          console.error('Error deleting file:', error);
                        });
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ResourcesPortal;

