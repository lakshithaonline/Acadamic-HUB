import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import './AdminDashboard.css';
import UserTable from './UserTable';

const AdminDashboard = () => {
  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = '/AdminLoginPage'; // Redirect to AdminLoginPage
  };

  return (
    <div className="admin-dashboard">
      <h1>Welcome to Admin Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
      <UserTable />
    </div>
  );
};

export default AdminDashboard;
