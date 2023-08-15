import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { auth } from './component/firebaseConfig'; 
import NavigationBar from './component/NavigationBar';
import HomePage from './component/HomePage';
import ServicePage from './component/ServicePage';
import AboutUsPage from './component/AboutUsPage';
import RegisterPage from './component/RegisterPage';
import LoginPage from './component/Login';
import ResourcesPortal from './component/ResourcesPortal';
import AdminLoginPage from './component/Admin/AdminLoginPage';
import AdminDashboard from './component/Admin/AdminDashboard';

function App() {
  // Listen for authentication state changes
  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log('User is logged in:', user);
    } else {
      console.log('User is logged out');
    }
  });

  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/about" element={<AboutUsPage />} /> 
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/ResourcesPortal" element={<ResourcesPortal />} />
          <Route path="/AdminLoginPage" element={<AdminLoginPage />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />{/* Add this route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
