import React, { useState, useContext } from "react";
import "./PropertyPage.css";
import { FavouritesContext } from "../context/FavouritesContext";

import img1 from "../assets/Images/Prop4/img1.jpg";
import img2 from "../assets/Images/Prop4/img2.jpg";
import img3 from "../assets/Images/Prop4/img3.jpg";
import img4 from "../assets/Images/Prop4/img4.jpg";
import img5 from "../assets/Images/Prop4/img5.jpg";

function PropertyPage4() {

  const { addFavourite } = useContext(FavouritesContext);
  const [mainImg, setMainImg] = useState(img1);
  const [activeTab, setActiveTab] = useState("description");

  const property = {
    id: "prop4",
    title: "1 Bedroom Flat",
    price: 285000,
    bedrooms: 1,
    type: "Flat",
    location: "Bromley Road, Bromley BR1",
    description: "Modern one bedroom apartment..."
  };

  return (
    <div className="wrapper">
      <h1 className="title">Property Details</h1>

      <img className="main-img" src={mainImg} alt="property" />

      <div className="thumb-row">
        <img className="thumb" src={img1} onClick={() => setMainImg(img1)} />
        <img className="thumb" src={img2} onClick={() => setMainImg(img2)} />
        <img className="thumb" src={img3} onClick={() => setMainImg(img3)} />
        <img className="thumb" src={img4} onClick={() => setMainImg(img4)} />
        <img className="thumb" src={img5} onClick={() => setMainImg(img5)} />
      </div>

      <div className="info-row">
        <span className="price">£285,000</span>
        <span> | 1 Bed Flat | </span>
        <span>{property.location}</span>
      </div>

      <div className="fav-btn-container">
        <button className="fav-btn"
          onClick={() => addFavourite({ id: property.id, title: property.title, price: property.price, image: img1 })}>
          ❤ Add to Favourites
        </button>
      </div>

      <div className="tabs">
        <div className={activeTab === "description" ? "active-tab" : "tab"} onClick={() => setActiveTab("description")}>Description</div>
        <div className={activeTab === "floor" ? "active-tab" : "tab"} onClick={() => setActiveTab("floor")}>Floor Plan</div>
        <div className={activeTab === "map" ? "active-tab" : "tab"} onClick={() => setActiveTab("map")}>Map</div>
      </div>

      <div className="content-box">
        {activeTab === "description" && <p>{property.description}</p>}
        {activeTab === "floor" && <p>1 Bed Flat layout</p>}
        {activeTab === "map" && <p>{property.location}</p>}
      </div>
    </div>
  );
}

export default PropertyPage4;
