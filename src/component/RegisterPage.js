import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import './RegisterPage.css';
import { auth, firestore } from "./firebaseConfig";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [university, setUniversity] = useState("");
  const [faculty, setFaculty] = useState("");
  const [notification, setNotification] = useState('');
  const [isRegistrationSuccessful, setIsRegistrationSuccessful] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      if (userCredential) {
        const user = userCredential.user;

        const userDetails = {
          name,
          university,
          faculty,
        };

        // Store user details in Firestore
        const usersCollectionRef = collection(firestore, "users");
        await addDoc(usersCollectionRef, {
          userId: user.uid,
          ...userDetails,
        });

        setNotification('Registration successful');
        setIsRegistrationSuccessful(true);
      }
    } catch (error) {
      setNotification(`Registration failed: ${error.message}`);
      setIsRegistrationSuccessful(false);
    }
  };

  return (
    <div className="register-page">
      <form onSubmit={handleRegister}>
        <div className="register-form">
          <h1>Create Account</h1>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="University"
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
          />
          <input
            type="text"
            placeholder="Faculty"
            value={faculty}
            onChange={(e) => setFaculty(e.target.value)}
          />
          <button type="submit">Sign Up</button>
          <p className={`notification ${isRegistrationSuccessful ? 'success' : 'error'}`}>
            {notification}
          </p>
          <p className="login-link">Already have an account? <a href="/login">Log in here</a></p>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
