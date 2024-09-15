import React from 'react';
import './AboutPage.css';

const About = () => {
  return (
    <div className="container">
      <h1>About Fruit.ai</h1>
      <div className="card-container">
        <div className="card">
          <h2>Our Mission</h2>
          <p>
            At Fruit.ai, our mission is to revolutionize the way you manage your health
            by making fruit consumption more accessible and informative. We strive to provide
            you with all the necessary tools and knowledge to make healthier choices and
            enhance your well-being through the power of fruits.
          </p>
        </div>
        <div className="card">
          <h2>Meet the Team</h2>
          <div className="team">
            <div className="team-member">
              <h3>John Doe</h3>
              <p>Founder & CEO</p>
              <p>John is passionate about health and technology, and he leads our mission to make healthy living accessible for everyone.</p>
            </div>
            <div className="team-member">
              <h3>Jane Smith</h3>
              <p>Chief Nutritionist</p>
              <p>Jane brings her extensive knowledge of nutrition to our platform, ensuring that our fruit information is both accurate and valuable.</p>
            </div>
            <div className="team-member">
              <h3>Alex Johnson</h3>
              <p>Lead Developer</p>
              <p>Alex is the mastermind behind our technology, working tirelessly to ensure that Fruit.ai is both user-friendly and cutting-edge.</p>
            </div>
          </div>
        </div>
        <div className="card">
          <h2>Contact Us</h2>
          <p>If you have any questions or feedback, feel free to reach out to us:</p>
          <ul>
            <li>Email: support@fruit.ai</li>
            <li>Phone: +91 999999999</li>
            <li>Address: 123 Fruit Street, Health City, HC 12345</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
