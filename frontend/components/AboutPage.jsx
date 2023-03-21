import React from 'react';
import ProfilePic from '../images/bitcoin-.jpg';

const aboutText = "We are a team of passionate developers who love to create innovative solutions for complex problems.";
const missionText = "Our mission is to make the world a better place through technology. We believe that by building amazing products, we can positively impact people's lives and make a difference.";
const values = ["Integrity", "Innovation", "Collaboration", "Excellence"];

function AboutPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',background:'Transparent' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', background:'wheat', color:'#FFB60A' }}>About Us</h1>
        <p style={{color: 'wheat'}}>{aboutText}</p>
      </div>
     
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem', background:'wheat', color:'#FFB60A' }}>Our Mission</h2>
        <p style={{color: 'wheat'}}>{missionText}</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem', background:'wheat', color:'#FFB60A' }}>Our Values</h2>
        <ul>
          {values.map((value, index) => (
            <li key={index} style={{ marginBottom: '0.5rem', color:'wheat' }}>{value}</li>
          ))}
        </ul>
      </div>
      <div style={{ width: '60%', marginBottom: '2rem' }}>
        {/* <img src={ProfilePic} alt="Profile" style={{ width: '50%' }} /> */}
      </div>
    </div>
  );
}

export default AboutPage;
