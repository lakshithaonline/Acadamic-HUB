import React, { useState, useEffect } from "react";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "./firebaseConfig";
import './serviceCSS.css'; 

function ServicePage() {
  const [fileUrls, setFileUrls] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFiles, setFilteredFiles] = useState([]); // Corrected state name

  const filesListRef = ref(storage, "files/");

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

  useEffect(() => {
    // Filter files based on search query
    const filteredFiles = fileUrls.filter(file =>
      file.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredFiles(filteredFiles);
  }, [searchQuery, fileUrls]);

  return (
    <div className="App">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search documents"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="file-grid">
        {filteredFiles.map((file) => ( // Corrected usage of filteredFiles
          <div className="file-card" key={file.url}>
            <h3>{file.name}</h3>
            <a href={file.url} target="_blank" rel="noopener noreferrer">
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicePage;
