// import { useState } from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure to import Bootstrap CSS

// function SelectBasicExample() {
//   const [propertyType, setPropertyType] = useState('');
//   const [governorate, setGovernorate] = useState('');
//   const [propertyCategory, setPropertyCategory] = useState('');

//   const handlePropertyTypeChange = (event) => {
//     setPropertyType(event.target.value);
//   };

//   const handleGovernorateChange = (event) => {
//     setGovernorate(event.target.value);
//   };

//   const handlePropertyCategoryChange = (event) => {
//     setPropertyCategory(event.target.value);
//   };

//   const handleSearch = () => {
//     // Perform search logic here
//     console.log('Search clicked!');
//     console.log(`Governorate: ${governorate}, Property Type: ${propertyType}, Property Category: ${propertyCategory}`);
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center min-vh-100">
//       <div className="p-4 border rounded bg-light shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
//         {/* Governorate Selection */}
//         <Form.Select aria-label="Select Egyptian Governorate" onChange={handleGovernorateChange} className="mb-3">
//           <option>Select your Governorate</option>
//           <option value="Cairo">Cairo</option>
//           <option value="Alexandria">Alexandria</option>
//           <option value="Giza">Giza</option>
//           <option value="Qalyubia">Qalyubia</option>
//           <option value="Sharqia">Sharqia</option>
//           <option value="Dakahlia">Dakahlia</option>
//           <option value="Damietta">Damietta</option>
//           <option value="Port Said">Port Said</option>
//           <option value="Ismailia">Ismailia</option>
//           <option value="Suez">Suez</option>
//           <option value="Kafr El Sheikh">Kafr El Sheikh</option>
//           <option value="Gharbia">Gharbia</option>
//           <option value="Monufia">Monufia</option>
//           <option value="Beheira">Beheira</option>
//           <option value="Matrouh">Matrouh</option>
//           <option value="Faiyum">Faiyum</option>
//           <option value="Beni Suef">Beni Suef</option>
//           <option value="Minya">Minya</option>
//           <option value="Assiut">Assiut</option>
//           <option value="Sohag">Sohag</option>
//           <option value="Qena">Qena</option>
//           <option value="Luxor">Luxor</option>
//           <option value="Aswan">Aswan</option>
//           <option value="Red Sea">Red Sea</option>
//           <option value="New Valley">New Valley</option>
//           <option value="North Sinai">North Sinai</option>
//           <option value="South Sinai">South Sinai</option>
//         </Form.Select>

//         {/* Property Type Selection */}
//         <Form.Select aria-label="Select Property Type" className="mb-3" onChange={handlePropertyTypeChange}>
//           <option>Select property type</option>
//           <option value="commercial">commercial</option>
//           <option value="residential">residential</option>
//         </Form.Select>

//         {/* Conditional Dropdown for Commercial Property Types */}
//         {propertyType === 'commercial' && (
//           <Form.Select aria-label="Select Commercial Property Type" className="mb-3" onChange={handlePropertyCategoryChange}>
//             <option>Select commercial type</option>
//             <option value="pharmacy">Pharmacy</option>
//             <option value="office">Office</option>
//             <option value="restaurant">restaurant</option>
//             <option value="pharmacy">pharmacy</option>
//             <option value="clinic">clinic</option>
//             <option value="commercial building">commercial building</option>
//             <option value="commercial land">commercial land</option>
//             <option value="agricultural">agricultural</option>
//             <option value="other commercial">other commercial</option>
//             <option value="garage">garage</option>



//           </Form.Select>
//         )}

//         {/* Conditional Dropdown for Residential Property Types */}
//         {propertyType === 'residential' && (
//           <Form.Select aria-label="Select Residential Property Type" className="mb-3" onChange={handlePropertyCategoryChange}>
//             <option>Select residential type</option>
//             <option value="apartment">Apartment</option>
//             <option value="villa">Villa</option>
//             <option value="townhouse">Townhouse</option>
//             <option value="penthouse">Penthouse</option>
//             <option value="compound">Compound</option>
//             <option value="chalet">Chalet</option>
//           </Form.Select>
//         )}

//         {/* Search Button */}
//         <Button style={{ backgroundColor: '#31C48B', borderColor: '#31C48B' }} 
//           className="text-white py-2 px-4 rounded w-100 mt-3"  onClick={handleSearch}>
//           Search
//         </Button>
//       </div>
//     </div>
//   );
// }



import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './landing_page.css';

function SearchBarComponent() {
  const [propertyType, setPropertyType] = useState('');
  const [governorate, setGovernorate] = useState('');
  const [propertyCategory, setPropertyCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [city, setCity] = useState('');
  const [categoryOptions, setCategoryOptions] = useState([]);

  const handlePropertyTypeChange = (event) => setPropertyType(event.target.value);
  const handleGovernorateChange = (event) => setGovernorate(event.target.value);
  const handlePropertyCategoryChange = (event) => setPropertyCategory(event.target.value);
  const handleMinPriceChange = (event) => setMinPrice(event.target.value);
  const handleMaxPriceChange = (event) => setMaxPrice(event.target.value);
  const handleCityChange = (event) => setCity(event.target.value);

  const handleSearch = () => {
    console.log('Search clicked!');
    console.log(`Governorate: ${governorate}, Property Type: ${propertyType}, Property Category: ${propertyCategory}, Min Price: ${minPrice}, Max Price: ${maxPrice}, City: ${city}`);
  };

  useEffect(() => {
    if (propertyType === 'commercial') {
      setCategoryOptions([
        { value: 'pharmacy', label: 'Pharmacy' },
        { value: 'office', label: 'Office' },
        { value: 'restaurant', label: 'Restaurant' },
        { value: 'clinic', label: 'Clinic' },
        { value: 'commercial_building', label: 'Commercial Building' },
        { value: 'commercial_land', label: 'Commercial Land' },
        { value: 'agricultural', label: 'Agricultural' },
        { value: 'garage', label: 'Garage' },
        { value: 'other_commercial', label: 'Other Commercial' },
      ]);
    } else if (propertyType === 'residential') {
      setCategoryOptions([
        { value: 'apartment', label: 'Apartment' },
        { value: 'villa', label: 'Villa' },
        { value: 'townhouse', label: 'Townhouse' },
        { value: 'penthouse', label: 'Penthouse' },
        { value: 'compound', label: 'Compound' },
        { value: 'chalet', label: 'Chalet' },
      ]);
    } else {
      setCategoryOptions([]);
    }
  }, [propertyType]);

  return (
    <section className="hero-bg">
      <div className="hero-section text-center text-white">
        <div className="card-wrapper">
          <Card className="shadow-lg mx-auto">
            <Card.Body className="p-4 bg-light">
              <div className="d-flex justify-content-around mb-3">
                <Button variant="customPrimary">Buy</Button>
                <Button variant="customSecondary">Sell</Button>
                <Button variant="customSecondary">Rent</Button>
              </div>
              <Form>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <Form.Group>
                      {/* <Form.Label>Governorate</Form.Label> */}
                      <Form.Control as="select" value={governorate} onChange={handleGovernorateChange}>
                        <option>Select Governorate</option>
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
                        <option value="Faiyum">Faiyum</option>
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
                      </Form.Control>
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group>
                      {/* <Form.Label>Property Type</Form.Label> */}
                      <Form.Control as="select" value={propertyType} onChange={handlePropertyTypeChange}>
                        <option>Select Property Type</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                      </Form.Control>
                    </Form.Group>
                  </div>
                </div>

                {propertyType && (
                  <Form.Group className="mb-3">
                    <Form.Label>Property Category</Form.Label>
                    <Form.Control as="select" value={propertyCategory} onChange={handlePropertyCategoryChange}>
                      <option>Select {propertyType} Category</option>
                      {categoryOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                )}

                <div className="row">
                  <div className="col-md-6">
                    <Form.Group>
                      {/* <Form.Label>City</Form.Label> */}
                      <Form.Control type="text" placeholder="Enter city" value={city} onChange={handleCityChange} />
                    </Form.Group>
                  </div>
                  <div className="col-md-3">
                    <Form.Group>
                      {/* <Form.Label>Min Price</Form.Label> */}
                      <Form.Control type="number" placeholder="Min price" value={minPrice} onChange={handleMinPriceChange} />
                    </Form.Group>
                  </div>
                  <div className="col-md-3">
                    <Form.Group>
                      {/* <Form.Label>Max Price</Form.Label> */}
                      <Form.Control type="number" placeholder="Max price" value={maxPrice} onChange={handleMaxPriceChange} />
                    </Form.Group>
                  </div>
                </div>

                <Button variant="customPrimary" className="mt-4 w-100" onClick={handleSearch}>
                  Search Now
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default SearchBarComponent;
