import React, { useState } from "react";
import './AdminLogin.css'; 

const AdminLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const handleAdminLogin = async (e) => {
    e.preventDefault();

    // Hardcoded admin credentials
    const hardcodedAdminEmail = "admin";
    const hardcodedAdminPassword = "admin";

    if (email === hardcodedAdminEmail && password === hardcodedAdminPassword) {
      setIsAdmin(true);
      setNotification("Admin login successful");
        
    // Redirect to the admin dashboard after successful login
    window.location.href = "/AdminDashboard";

    } else {
      setIsAdmin(false);
      setNotification("You are not an admin.");
    }
  };

  return (
    <div className="admin-login-page">
      <form onSubmit={handleAdminLogin}>
        <div className="admin-login-form">
          <h1>Admin Login</h1>
          <input
            type="text"
            placeholder="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Log In</button>
          <p className="notification">{notification}</p>
          {isAdmin && <p>You are logged in as an admin.</p>}
        </div>
      </form>
    </div>
  );
};

export default AdminLoginPage;
