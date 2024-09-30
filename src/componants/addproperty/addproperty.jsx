import React from 'react';

const AddPropertyForm = () => {
    return (
        <div className="container mt-5">
            <div className="text-center mb-4">
                <h2>Add Property</h2>
            </div>
            <form encType="multipart/form-data">
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" placeholder="Title" required />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" id="description" placeholder="Description" required></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="property_type">Property Type</label>
                    <select className="form-control" id="property_type" required>
                        <option value="" disabled selected>Select Property Type</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="number" className="form-control" id="price" placeholder="Price" required />
                </div>

                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input type="text" className="form-control" id="location" placeholder="Location" required />
                </div>

                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <select className="form-control" id="country" required>
                        <option value="EG">Egypt</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="governorate">Governorate</label>
                    <select className="form-control" id="governorate" required>
                        <option value="" disabled selected>Select Governorate</option>
                        <option value="Cairo">Cairo</option>
                        <option value="Alexandria">Alexandria</option>
                        <option value="Giza">Giza</option>
                        <option value="Qalyubia">Qalyubia</option>
                        <option value="Dakahlia">Dakahlia</option>
                        <option value="Sharqia">Sharqia</option>
                        <option value="Gharbia">Gharbia</option>
                        <option value="Monufia">Monufia</option>
                        <option value="Kafr El Sheikh">Kafr El Sheikh</option>
                        <option value="Damietta">Damietta</option>
                        <option value="Port Said">Port Said</option>
                        <option value="Ismailia">Ismailia</option>
                        <option value="Suez">Suez</option>
                        <option value="Aswan">Aswan</option>
                        <option value="Luxor">Luxor</option>
                        <option value="Red Sea">Red Sea</option>
                        <option value="Matrouh">Matrouh</option>
                        <option value="North Sinai">North Sinai</option>
                        <option value="South Sinai">South Sinai</option>
                        <option value="Faiyum">Faiyum</option>
                        <option value="Beni Suef">Beni Suef</option>
                        <option value="Minya">Minya</option>
                        <option value="Assiut">Assiut</option>
                        <option value="Sohag">Sohag</option>
                        <option value="Qena">Qena</option>
                        <option value="New Valley">New Valley</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input type="text" className="form-control" id="city" placeholder="City" required />
                </div>

                <div className="form-group">
                    <label htmlFor="street">Street</label>
                    <input type="text" className="form-control" id="street" placeholder="Street" />
                </div>

                <div className="form-group">
                    <label htmlFor="commercial">Commercial Type</label>
                    <select className="form-control" id="commercial" required>
                        <option value="" disabled selected>Select Commercial Type</option>
                        <option value="office">Office</option>
                        <option value="retail">Retail</option>
                        <option value="restaurant">Restaurant</option>
                        <option value="pharmacy">Pharmacy</option>
                        <option value="clinic">Clinic</option>
                        <option value="commercial building">Commercial Building</option>
                        <option value="commercial land">Commercial Land</option>
                        <option value="agricultural">Agricultural</option>
                        <option value="warehouse">Warehouse</option>
                        <option value="other commercial">Other Commercial</option>
                        <option value="garage">Garage</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="is_sale">Is it for Sale or Rent?</label>
                    <select className="form-control" id="is_sale" required>
                        <option value="" disabled selected>Select Option</option>
                        <option value="sale">Sale</option>
                        <option value="rent">Rent</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="image">Upload Image</label>
                    <input type="file" className="form-control-file" id="image" accept="image/*" required />
                </div>

                <div className="form-group">
                    <label htmlFor="area">Area (m²)</label>
                    <input type="number" className="form-control" id="area" placeholder="Area" step="0.01" required />
                </div>

                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        </div>
    );
}

export default AddPropertyForm;
