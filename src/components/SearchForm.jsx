import React, { useState } from "react";

function SearchForm({ onSearch }) {

  const [filters, setFilters] = useState({
    type: "",
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
    dateAdded: "",
    postcode: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(filters);
    }

  return (
    <form onSubmit={handleSubmit} aria-label="Property Search Form">

      <div>
        <label htmlFor="type">Property Type:</label>
              <select
                id="type"
                name="type"
                value={filters.type}
                onChange={handleChange}
                required
              >
          <option value="">Select Type</option>
                <option value="House">House</option>
                <option value="Flat">Flat</option>
          <option value="Studio">Studio</option>
              </select>
            </div>

              <div>
        <label htmlFor="minPrice">Min Price:</label>
                <input
                  id="minPrice"
                  name="minPrice"
          type="number"
                  min="0"
                  value={filters.minPrice}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
        <label htmlFor="maxPrice">Max Price:</label>
                <input
                  id="maxPrice"
                  name="maxPrice"
          type="number"
                  min="0"
                  value={filters.maxPrice}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
        <label htmlFor="bedrooms">Bedrooms:</label>
        <select
                  id="bedrooms"
                  name="bedrooms"
                  value={filters.bedrooms}
                  onChange={handleChange}
                  required
        >
          <option value="">Select</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
        </select>
              </div>

              <div>
        <label htmlFor="dateAdded">Date Added:</label>
                <input
                  id="dateAdded"
                  name="dateAdded"
          type="date"
                  value={filters.dateAdded}
                  onChange={handleChange}
                />
              </div>

      <div>
        <label htmlFor="postcode">Postcode:</label>
              <input
                id="postcode"
                name="postcode"
          type="text"
                value={filters.postcode}
                onChange={handleChange}
          placeholder="e.g. NW1"
                required
              />
            </div>

            <button type="submit">Search</button>
          </form>
  );
}

export default SearchForm;
