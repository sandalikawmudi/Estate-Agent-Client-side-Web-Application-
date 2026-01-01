import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data/properties.json";
import { FavouritesContext } from "../context/FavouritesContext";

/* IMPORT REAL IMAGES */
import prop1img from "../assets/Images/Prop1/img1.jpg";
import prop2img from "../assets/Images/Prop2/img1.jpg";
import prop3img from "../assets/Images/Prop3/img1.jpg";
import prop4img from "../assets/Images/Prop4/img1.jpg";
import prop5img from "../assets/Images/Prop5/img1.jpg";
import prop6img from "../assets/Images/Prop6/img1.jpg";
import prop7img from "../assets/Images/Prop7/img1.jpg";

function SearchPage() {

  const navigate = useNavigate();
  const { favourites, removeFavourite } = useContext(FavouritesContext);

  const properties = data.properties || data;

  const [filters, setFilters] = useState({
    type: "",
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
    dateAdded: "",
    postcode: ""
  });

  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const monthToNumber = (monthName) => {
    const months = [
      "January","February","March","April","May","June",
      "July","August","September","October","November","December"
    ];
    return months.indexOf(monthName) + 1;
  };

  const handleSearch = (e) => {
    e.preventDefault();

    let filtered = [...properties];

    if (filters.type !== "") {
      filtered = filtered.filter(p =>
        p.type?.toLowerCase() === filters.type.toLowerCase()
      );
    }

    if (filters.minPrice !== "") {
      filtered = filtered.filter(p => p.price >= Number(filters.minPrice));
    }

    if (filters.maxPrice !== "") {
      filtered = filtered.filter(p => p.price <= Number(filters.maxPrice));
    }

    if (filters.bedrooms !== "") {
      filtered = filtered.filter(p => p.bedrooms >= Number(filters.bedrooms));
    }

    if (filters.dateAdded !== "") {
      const inputDate = new Date(filters.dateAdded);

      filtered = filtered.filter(p => {
        const monthNum = monthToNumber(p.added.month);
        const propertyDate = new Date(
          `${p.added.year}-${monthNum}-${p.added.day}`
        );
        return propertyDate >= inputDate;
      });
    }

    if (filters.postcode !== "") {
      filtered = filtered.filter(p =>
        p.location.toLowerCase().includes(filters.postcode.toLowerCase())
      );
    }

    setResults(filtered);
  };

  /* MAP PROPERTY ID TO IMAGE */
  const getImage = (id) => {
    switch (id) {
      case "prop1": return prop1img;
      case "prop2": return prop2img;
      case "prop3": return prop3img;
      case "prop4": return prop4img;
      case "prop5": return prop5img;
      case "prop6": return prop6img;
      case "prop7": return prop7img;
      default: return "https://picsum.photos/200";
    }
  };

  return (
    <div className="page-inner">

      <h1 className="main-title">Search Properties</h1>

      <div className="top-layout">

        {/* SEARCH FORM */}
        <div className="search-card">
          <h2>Property Search</h2>

          <form onSubmit={handleSearch} noValidate>

            <div className="form-row-1">
              <label htmlFor="type">Property Type</label>
              <select
                id="type"
                name="type"
                value={filters.type}
                onChange={handleChange}
                required
              >
                <option value="">-- Select Type --</option>
                <option value="House">House</option>
                <option value="Flat">Flat</option>
              </select>
            </div>

            <div className="form-row-2">
              <div>
                <label htmlFor="minPrice">Minimum Price (£)</label>
                <input
                  id="minPrice"
                  type="number"
                  name="minPrice"
                  min="0"
                  step="5000"
                  placeholder="100000"
                  value={filters.minPrice}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="maxPrice">Maximum Price (£)</label>
                <input
                  id="maxPrice"
                  type="number"
                  name="maxPrice"
                  min="0"
                  step="5000"
                  placeholder="500000"
                  value={filters.maxPrice}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row-2">
              <div>
                <label htmlFor="bedrooms">Minimum Bedrooms</label>
                <input
                  id="bedrooms"
                  type="number"
                  name="bedrooms"
                  min="1"
                  max="10"
                  step="1"
                  placeholder="2"
                  value={filters.bedrooms}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="dateAdded">Date Added (After)</label>
                <input
                  id="dateAdded"
                  type="date"
                  name="dateAdded"
                  value={filters.dateAdded}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row-full">
              <label htmlFor="postcode">Postcode Area</label>
              <input
                id="postcode"
                type="text"
                name="postcode"
                placeholder="BR1 / NW1 / SE3"
                value={filters.postcode}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit">Search</button>
          </form>
        </div>


        {/* FAVOURITES */}
        <div className="favourites-box">
          <h2>Favourites</h2>

          {favourites.length === 0 ? (
            <p>No favourite properties yet.</p>
          ) : (
            favourites.map(p => (
              <div
                key={p.id}
                className="property-card"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >

                {/* LEFT SIDE = IMAGE + TITLE */}
                <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                  <img
                    className="property-image"
                    src={getImage(p.id)}
                    alt="property"
                  />

                  <h3 style={{ margin: 0 }}>{p.id}</h3>
                </div>

                {/* RIGHT SIDE = DELETE BUTTON */}
                <button
                  className="view-btn"
                  onClick={() => removeFavourite(p.id)}
                  title="Remove from favourites"
                  style={{
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0"
                  }}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                    alt="Remove"
                    style={{ width: "18px", height: "18px" }}
                  />
                </button>

              </div>
            ))
          )}
        </div>

      </div>


      {/* SEARCH RESULS */}
      <div className="results-section">
        <div className="results-container">
          <h2>Search Results</h2>

          {results.length === 0 ? (
            <p>No properties found.</p>
          ) : (
            results.map(p => {

              const propertyId = p.id || p.property_id;

              return (
                <div key={propertyId} className="property-card">

                  <img
                    className="property-image"
                    src={getImage(propertyId)}
                    alt="property"
                  />

                  <div>
                    <h3>{p.type} - £{p.price}</h3>
                    <p>{p.bedrooms} Bedrooms</p>
                    <p>{p.location}</p>
                    <p>
                      Date Added: {p.added.day} {p.added.month} {p.added.year}
                    </p>
                  </div>

                  <div className="result-view-btn">
                    <button
                      className="view-btn"
                      onClick={() => navigate(`/property/${propertyId}`)}
                    >
                      View
                    </button>
                  </div>

                </div>
              );
            })
          )}
        </div>
      </div>

    </div>
  );
}

export default SearchPage;
