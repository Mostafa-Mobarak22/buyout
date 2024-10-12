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
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faKey } from '@fortawesome/free-solid-svg-icons';

function HowItWorks() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">How It Works</h2>
        <p className="text-gray-600 text-lg mb-12">
          A great platform to buy, sell, and rent your properties without any agent or commissions.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <li className="bg-white shadow-lg rounded-lg p-6 transition transform hover:scale-105">
            <div className="flex justify-center items-center text-4xl text-blue-500 mb-4">
              <FontAwesomeIcon icon={faHome} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Evaluate Property</h3>
            <p className="text-gray-600">
              Assess the value and condition of your property before moving forward.
            </p>
          </li>

          <li className="bg-white shadow-lg rounded-lg p-6 transition transform hover:scale-105">
            <div className="flex justify-center items-center text-4xl text-green-500 mb-4">
              <FontAwesomeIcon icon={faBriefcase} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Meeting with Agent</h3>
            <p className="text-gray-600">
              Connect with agents to discuss your property options and preferences.
            </p>
          </li>

          <li className="bg-white shadow-lg rounded-lg p-6 transition transform hover:scale-105">
            <div className="flex justify-center items-center text-4xl text-yellow-500 mb-4">
              <FontAwesomeIcon icon={faKey} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Close the Deal</h3>
            <p className="text-gray-600">
              Complete the transaction seamlessly and get the keys to your new property.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default HowItWorks;