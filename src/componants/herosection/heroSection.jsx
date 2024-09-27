import React, { useState } from 'react'; // Import useState from React
import './HeroSection.css'; // Import your CSS

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState(""); // useState for managing search input
  const [bedrooms, setBedrooms] = useState(""); // useState for managing selected bedrooms
  const [bathrooms, setBathrooms] = useState(""); // useState for managing selected bathrooms

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search Query:", searchQuery);
    console.log("Bedrooms:", bedrooms);
    console.log("Bathrooms:", bathrooms);
    // Implement your search logic here
  };

  return (
    <div className="hero-section">
      <div className="overlay">
        <div className="hero-content">
          <h1>Find Every Home Here</h1>
          
          {/* Search Form */}
          <form className="search-form" onSubmit={handleSearch}>
            <div className="search-fields">
              <input
                type="text"
                placeholder="City, community or building"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              
              {/* Property Type Dropdown */}
              <select className="property-type">
                <option>Property type</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Townhouse</option>
                <option>Penthouse</option>
                <option>Compound</option>
                <option>Chalet</option>
              </select>

              {/* Bedrooms Selection with Select */}
              <div className="dropdown">
                <select 
                  className="bedrooms-select" 
                  value={bedrooms} 
                  onChange={(e) => setBedrooms(e.target.value)}
                >
                  <option value="">Select Bedrooms</option>
                  <option value="Studio">Studio</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7+">7+</option>
                </select>
              

              {/* Bathrooms Selection with Select */}
              
                <select 
                  className="bathrooms-select" 
                  value={bathrooms} 
                  onChange={(e) => setBathrooms(e.target.value)}
                >
                  <option value="">Select Bathrooms</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6+">6+</option>
                  <option value="7+">7+</option>
                </select>
              </div>

              {/* Submit Button */}
              <button type="submit" className="cta-button">Search</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
