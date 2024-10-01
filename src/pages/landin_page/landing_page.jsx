
// import React from 'react';
// import MyCard from '../../componants/card/card' ;


//   return (
//     <>
//     <div className="hero-section">
//         <div className="overlay">
//           <div className="hero-content">
//             <h1>Find Every Home Here</h1>
            
//             {/* Search Form */}
//             <form className="search-form" onSubmit={handleSearch}>
//               <div className="search-fields">
//                 <input
//                   type="text"
//                   placeholder="City, community or building"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="search-input"
//                 />
                
//                 {/* Property Type Dropdown */}
//                 <select className="property-type">
//                   <option>Property type</option>
//                   <option>Apartment</option>
//                   <option>Villa</option>
//                   <option>Townhouse</option>
//                   <option>Penthouse</option>
//                   <option>Compound</option>
//                   <option>Chalet</option>
//                 </select>
  
//                 {/* Bedrooms Selection with Select */}
//                 <div className="dropdown">
//                   <select 
//                     className="bedrooms-select" 
//                     value={bedrooms} 
//                     onChange={(e) => setBedrooms(e.target.value)}
//                   >
//                     <option value="">Select Bedrooms</option>
//                     <option value="Studio">Studio</option>
//                     <option value="1">1</option>
//                     <option value="2">2</option>
//                     <option value="3">3</option>
//                     <option value="4">4</option>
//                     <option value="5">5</option>
//                     <option value="6">6</option>
//                     <option value="7+">7+</option>
//                   </select>
                
  
//                 {/* Bathrooms Selection with Select */}
                
//                   <select 
//                     className="bathrooms-select" 
//                     value={bathrooms} 
//                     onChange={(e) => setBathrooms(e.target.value)}
//                   >
//                     <option value="">Select Bathrooms</option>
//                     <option value="1">1</option>
//                     <option value="2">2</option>
//                     <option value="3">3</option>
//                     <option value="4">4</option>
//                     <option value="5">5</option>
//                     <option value="6+">6+</option>
//                     <option value="7+">7+</option>
//                   </select>
//                 </div>
  
//                 {/* Submit Button */}
//                 <button type="submit" className="cta-button">Search</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* property Cards */}

//       <!-- not set yet -->
//       <!-- <div className='d-flex justify-content-center flex-wrap gap-4 py-5'>
//         {Products.map((Product) => (
//           <div key={Product.id}>
//             <NavLink className="text-decoration-none text-black" to={`/details/${Product.id}`}>
//               <MyCard
//                 id={Product.id}
//                 name={Product.title}
//                 logo={`https://image.tmdb.org/t/p/w500${Product.poster_path}`}
//                 url={`/details/${Product.id}`}
//                 btnName="View Details"
//                 width="18rem"
//                 release_date={Product.release_date}
//               />
//             </NavLink>
//           </div>
//         ))}
//       </div> -->
//     </>
//   );
// };

// export default Home;
import React, { useState } from 'react';
// import MyCard from '../../componants/card/card';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [Products, setProducts] = useState([]); // Assuming you're fetching products from an API

  // Function to handle the search form submission
  const handleSearch = (e) => {
    e.preventDefault();
    // Placeholder for API call or search logic
    console.log("Search submitted:", { searchQuery, bedrooms, bathrooms });
    // Add the logic for fetching data based on search query, bedrooms, and bathrooms
  };

  return (
    <>
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

                {/* Bedrooms Selection */}
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

                  {/* Bathrooms Selection */}
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

      {/* Property Cards */}
      <div className='d-flex justify-content-center flex-wrap gap-4 py-5'>
        {Products.map((Product) => (
          <div key={Product.id}>
            <NavLink className="text-decoration-none text-black" to={`/details/${Product.id}`}>
              <MyCard
                // id={Product.id}
                // name={Product.title}
                // logo={`https://image.tmdb.org/t/p/w500${Product.poster_path}`} // Replace with the correct image URL for real estate properties
                // url={`/details/${Product.id}`}
                // btnName="View Details"
                // width="18rem"
                // release_date={Product.release_date} // Replace with appropriate property details
              />
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
