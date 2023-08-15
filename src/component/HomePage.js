import React from 'react';
import './HomePage.css'; 

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="hero">
        <h1>Welcome to Resource HUB</h1>
        <p>Unlocking Knowledge: Explore a Treasure Trove of Academic Resources for Students</p>
        <button className="cta-button">Get Started</button>
      </header>
      <section className="features-section">
        <h2>Key Features</h2>
        <div className="moving-cards">
          <div className="feature-card">
            <h3>Learning Materials</h3>
            <p>Access a wide range of learning materials to enhance your studies.</p>
          </div>
          <div className="feature-card">
            <h3>Past Papers</h3>
            <p>Explore past papers for various subjects to prepare for exams.</p>
          </div>
          <div className="feature-card">
            <h3>Senior Students' Work</h3>
            <p>Learn from senior students' work and solutions to excel in your studies.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
