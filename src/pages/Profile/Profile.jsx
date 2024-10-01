// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './profile.css'

// const Profile = ({ userId }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Fetch user data by ID from the API
//     axios.get(`http://127.0.0.1:8000/user/get/${userId}`)
//       .then(response => setUser(response.data))
//       .catch(error => console.error('Error fetching user data:', error));
//   }, [userId]);

//   if (!user) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="profile-container">
//       <h1>Profile Page</h1>
//       <div className="profile-info">
//         <img
//           src={user.image || 'https://via.placeholder.com/150'}
//           alt={`${user.user_name}'s profile`}
//           className="profile-image"
//         />
//         <h2>{user.user_name}</h2>
//         <p>Email: {user.email}</p>
//         <p>Phone: {user.phone}</p>
//         <p>City: {user.city || 'N/A'}</p>
//         <p>Street: {user.street || 'N/A'}</p>
//         <p>Address: {user.address || 'N/A'}</p>
//         <p>Another Phone: {user.another_phone || 'N/A'}</p>
//         <p>Company: {user.is_company ? 'Yes' : 'No'}</p>
//       </div>
//     </div>
//   );
// };

// Profile.jsx
import React, { useState, useEffect } from 'react';
import CardProfile from '../../componants/card_profile/card_profile'; 
import axios from 'axios';

const Profile = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data by ID from the API
    axios.get(`http://127.0.0.1:8000/user/get/1`)
      .then(response => {setUser(response.data)   
        console.log(response.data)
      })

      .catch(error => console.error('Error fetching user data:', error));
  }, [userId]);

  if (!user) {
    return <p>Loading...</p>;
    
  }

  return (
    <div>
      {/* Passing the full user object to CardProfile */}
      <CardProfile user={user} />
    </div>
  );
};

export default Profile;