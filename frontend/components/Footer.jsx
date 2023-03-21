import React from 'react';

const Footer = () => {
  return (
    <div>
      <h1 style={{paddingLeft:'25%'}}>This is my last paragraph</h1>
    <div className="footer-container" style={{paddingLeft:'25%',backgroundColor:'#0b1e31'}}>
      <div className="footer-column">
        <h4>Column 1</h4>
        <a href="#" className="footer-link">Link 1</a>
        <a href="#" className="footer-link">Link 2</a>
        <a href="#" className="footer-link">Link 3</a>
      </div>
      <div className="footer-column">
        <h4>Column 2</h4>
        <a href="#" className="footer-link">Link 1</a>
        <a href="#" className="footer-link">Link 2</a>
        <a href="#" className="footer-link">Link 3</a>
      </div>
      <div className="footer-column">
        <h4>Column 3</h4>
        <a href="#" className="footer-link">Link 1</a>
        <a href="#" className="footer-link">Link 2</a>
        <a href="#" className="footer-link">Link 3</a>
      </div>
    </div>
    
    <h1 style={{paddingLeft:'25%'}}>This is my last paragraph</h1>
  
    </div>
  );
};

export default Footer;
