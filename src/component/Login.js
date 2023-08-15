import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebaseConfig";
import './Login.css';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User logged in:", userCredential.user);
        setNotification("Login successful");
        
        // Redirect to ResourcesPortal after successful login
        window.location.href = "/ResourcesPortal";
      })
      .catch((error) => {
        console.error("Login error:", error);
        setNotification("Login failed. Please check your credentials.");
      });
  };

  return (
    <div className="login-page">
      <form onSubmit={handleLogin}>
        <div className="login-form">
          <h1>Login</h1>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Log In</button>
          <p className="register-link">Don't have an account? <a href="/register">Register here</a></p>
          <p className="register-link">Admin Login<a href="/AdminLoginPage">here</a></p>
          <p className="notification">{notification}</p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
