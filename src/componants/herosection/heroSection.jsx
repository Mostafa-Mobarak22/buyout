// import React from 'react';

// const HeroSection = () => {
//   return (
//     <div className="hero-section">
//       <div>
//         <h1>Find Your Dream Home</h1>
//         <p>Discover the best properties available in your area</p>
//         <button className="cta-button">Browse Listings</button>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
import React, { useState } from 'react';
import './HeroSection.css'; // Create this CSS file for advanced styling

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search Query:", searchQuery);
    // Handle the search logic here, e.g., API call
  };

  return (
    <div className="hero-section">
      <div className="overlay">
        <div className="hero-content">
          <h1>Find Your Dream Home</h1>
          <p>Discover the best properties available in your area</p>
          
          {/* Search Form */}
          <form className="search-form" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search by location"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="cta-button">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
