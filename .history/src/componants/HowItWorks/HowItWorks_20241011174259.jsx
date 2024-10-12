// // export default HowItWorks;
// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faBriefcase, faKey } from '@fortawesome/free-solid-svg-icons';
// import './HowItWorks.css';

// function HowItWorks() {
//   return (
//     <section className="section service" aria-label="service">
//       <div className="container">
//         <h2 className="h2 section-title">How It Works</h2>
//         <p className="section-text">
//           A great platform to buy, sell and rent your properties without any agent or commissions.
//         </p>

//         <ul className="service-list">
//           <li>
//             <div className="service-card">
//               <div className="card-icon">
//                 <i className="ion-ios-home-outline"></i>
//               </div>
//               <h3 className="h3 card-title">Evaluate Property</h3>
//               <p className="card-text">
//                 If the distribution of letters and 'words' is random, the reader will not be distracted from making.
//               </p>
//             </div>
//           </li>

//           <li>
//             <div className="service-card">
//               <div className="card-icon">
//                 <i className="ion-ios-briefcase-outline"></i>
//               </div>
//               <h3 className="h3 card-title">Meeting with Agent</h3>
//               <p className="card-text">
//                 If the distribution of letters and 'words' is random, the reader will not be distracted from making.
//               </p>
//             </div>
//           </li>

//           <li>
//             <div className="service-card">
//               <div className="card-icon">
//                 <i className="ion-ios-key-outline"></i>
//               </div>
//               <h3 className="h3 card-title">Close the Deal</h3>
//               <p className="card-text">
//                 If the distribution of letters and 'words' is random, the reader will not be distracted from making.
//               </p>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </section>
//   );
// }

// export default HowItWorks;
import React from 'react';
ظ
// import { faHome, faBriefcase, faKey } from '@fortawesome/free-solid-svg-icons';
// import './HowItWorks.css';

function HowItWorks() {
  return (
    <section className="section service" aria-label="service">
      <div className="container">
        <h2 className="h2 section-title">How It Works</h2>
        <p className="section-text">
          A great platform to buy, sell and rent your properties without any agent or commissions.
        </p>

        <ul className="service-list">
          <li>
            <div className="service-card">
              <div className="card-icon">
                <FontAwesomeIcon icon={faHome} />
              </div>
              <h3 className="h3 card-title">Evaluate Property</h3>
              <p className="card-text">
                Assess the value and condition of your property before moving forward.
              </p>
            </div>
          </li>

          <li>
            <div className="service-card">
              <div className="card-icon">
                <FontAwesomeIcon icon={faBriefcase} />
              </div>
              <h3 className="h3 card-title">Meeting with Agent</h3>
              <p className="card-text">
                Connect with agents to discuss your property options and preferences.
              </p>
            </div>
          </li>

          <li>
            <div className="service-card">
              <div className="card-icon">
                <FontAwesomeIcon icon={faKey} />
              </div>
              <h3 className="h3 card-title">Close the Deal</h3>
              <p className="card-text">
                Complete the transaction seamlessly and get the keys to your new property.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default HowItWorks;
