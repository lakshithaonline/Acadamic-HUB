import React from 'react';
import './AboutUsPage.css'; // Import the CSS file for styling

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <div className="about-content">
      <section class="about-us-section">
        <div class="container">
            <h2>About Us</h2><br/><br/>
            <p>At Acadamic HUB, we believe in the transformative power of education...</p>
            <p>Our mission is clear: to empower students on their educational journey...</p>
            <p>What drives us? Education is the cornerstone of personal growth and societal progress...</p>
            <p>Our approach: Quality Focus, User-Centric Design, Inclusivity, Collaborative Spirit...</p>
            <a href="#join-us" class="btn-cta">Join Our Community</a>
        </div>
    </section>

    <section id="join-us" class="cta-section">
        <div class="container">
            <h3>Join Our Community</h3>
            <p>We invite you to join our ever-growing community of learners, educators, and enthusiasts...</p>
        </div>
    </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
