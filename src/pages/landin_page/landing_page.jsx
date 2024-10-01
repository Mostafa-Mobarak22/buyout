

// // export default Home;
// import React, { useState } from 'react';
// // import MyCard from '../../componants/card/card';
// import { NavLink } from 'react-router-dom';

// const Home = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [bedrooms, setBedrooms] = useState('');
//   const [bathrooms, setBathrooms] = useState('');
//   const [Products, setProducts] = useState([]); // Assuming you're fetching products from an API

//   // Function to handle the search form submission
//   const handleSearch = (e) => {
//     e.preventDefault();
//     // Placeholder for API call or search logic
//     console.log("Search submitted:", { searchQuery, bedrooms, bathrooms });
//     // Add the logic for fetching data based on search query, bedrooms, and bathrooms
//   };

//   return (
//     <>
//       <div className="hero-section">
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

//                 {/* Bedrooms Selection */}
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

//                   {/* Bathrooms Selection */}
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

//       {/* Property Cards */}
//       <div className='d-flex justify-content-center flex-wrap gap-4 py-5'>
//         {Products.map((Product) => (
//           <div key={Product.id}>
//             <NavLink className="text-decoration-none text-black" to={`/details/${Product.id}`}>
//               <MyCard
//                 // id={Product.id}
//                 // name={Product.title}
//                 // logo={`https://image.tmdb.org/t/p/w500${Product.poster_path}`} // Replace with the correct image URL for real estate properties
//                 // url={`/details/${Product.id}`}
//                 // btnName="View Details"
//                 // width="18rem"
//                 // release_date={Product.release_date} // Replace with appropriate property details
//               />
//             </NavLink>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure to import Bootstrap CSS

function SelectBasicExample() {
  const [propertyType, setPropertyType] = useState('');
  const [governorate, setGovernorate] = useState('');
  const [propertyCategory, setPropertyCategory] = useState('');

  const handlePropertyTypeChange = (event) => {
    setPropertyType(event.target.value);
  };

  const handleGovernorateChange = (event) => {
    setGovernorate(event.target.value);
  };

  const handlePropertyCategoryChange = (event) => {
    setPropertyCategory(event.target.value);
  };

  const handleSearch = () => {
    // Perform search logic here
    console.log('Search clicked!');
    console.log(`Governorate: ${governorate}, Property Type: ${propertyType}, Property Category: ${propertyCategory}`);
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="p-4 border rounded bg-light shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
        {/* Governorate Selection */}
        <Form.Select aria-label="Select Egyptian Governorate" onChange={handleGovernorateChange} className="mb-3">
          <option>Select your Governorate</option>
          <option value="Cairo">Cairo</option>
          <option value="Alexandria">Alexandria</option>
          <option value="Giza">Giza</option>
          <option value="Qalyubia">Qalyubia</option>
          <option value="Sharqia">Sharqia</option>
          <option value="Dakahlia">Dakahlia</option>
          <option value="Damietta">Damietta</option>
          <option value="Port Said">Port Said</option>
          <option value="Ismailia">Ismailia</option>
          <option value="Suez">Suez</option>
          <option value="Kafr El Sheikh">Kafr El Sheikh</option>
          <option value="Gharbia">Gharbia</option>
          <option value="Monufia">Monufia</option>
          <option value="Beheira">Beheira</option>
          <option value="Matrouh">Matrouh</option>
          <option value="Fayoum">Fayoum</option>
          <option value="Beni Suef">Beni Suef</option>
          <option value="Minya">Minya</option>
          <option value="Assiut">Assiut</option>
          <option value="Sohag">Sohag</option>
          <option value="Qena">Qena</option>
          <option value="Luxor">Luxor</option>
          <option value="Aswan">Aswan</option>
          <option value="Red Sea">Red Sea</option>
          <option value="New Valley">New Valley</option>
          <option value="North Sinai">North Sinai</option>
          <option value="South Sinai">South Sinai</option>
        </Form.Select>

        {/* Property Type Selection */}
        <Form.Select aria-label="Select Property Type" className="mb-3" onChange={handlePropertyTypeChange}>
          <option>Select property type</option>
          <option value="commercial">commercial</option>
          <option value="residential">residential</option>
        </Form.Select>

        {/* Conditional Dropdown for Commercial Property Types */}
        {propertyType === 'commercial' && (
          <Form.Select aria-label="Select Commercial Property Type" className="mb-3" onChange={handlePropertyCategoryChange}>
            <option>Select commercial type</option>
            <option value="pharmacy">Pharmacy</option>
            <option value="office">Office</option>
            <option value="office">restaurant</option>
            <option value="office">pharmacy</option>
            <option value="office">clinic</option>

            <option value="clinic">commercial building</option>
            <option value="gym">commercial land</option>
            <option value="supermarket">agricultural</option>
            <option value="shops">other commercial</option>
            <option value="shops">garage</option>
            <option value="shops">warehouse</option>
            <option value="shops">warehouse</option>



          </Form.Select>
        )}

        {/* Conditional Dropdown for Residential Property Types */}
        {propertyType === 'residential' && (
          <Form.Select aria-label="Select Residential Property Type" className="mb-3" onChange={handlePropertyCategoryChange}>
            <option>Select residential type</option>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
            <option value="townhouse">Townhouse</option>
            <option value="penthouse">Penthouse</option>
            <option value="compound">Compound</option>
            <option value="chalet">Chalet</option>
          </Form.Select>
        )}

        {/* Search Button */}
        <Button style={{ backgroundColor: '#31C48B', borderColor: '#31C48B' }} 
          className="text-white py-2 px-4 rounded w-100 mt-3"  onClick={handleSearch}>
          Search
        </Button>
      </div>
    </div>
  );
}

export default SelectBasicExample;
