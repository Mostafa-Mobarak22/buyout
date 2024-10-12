// import React from 'react';
// // import './Footer.css'; 
// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <p>&copy; 2024 Real Estate Co. All rights reserved.</p>
        
//         {/* Social Media Links */}
//         <div className="social-icons">
//           <a href="#facebook" aria-label="Facebook">
//             <i className="fab fa-facebook-f"></i>
//           </a>
//           <a href="#twitter" aria-label="Twitter">
//             <i className="fab fa-twitter"></i>
//           </a>
//           <a href="#linkedin" aria-label="LinkedIn">
//             <i className="fab fa-linkedin-in"></i>
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';
import './Footer.css'; // Ensure this file exists and contains styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Real Estate Co. All rights reserved.</p>
        
        {/* Social Media Links */}
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
