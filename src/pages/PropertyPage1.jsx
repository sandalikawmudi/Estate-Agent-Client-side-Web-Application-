import React, { useState, useContext } from "react";
import "./PropertyPage.css";
import { FavouritesContext } from "../context/FavouritesContext";

// IMPORT IMAGES
import img1 from "../assets/Images/Prop1/img1.jpg";
import img2 from "../assets/Images/Prop1/img2.jpg";
import img3 from "../assets/Images/Prop1/img3.jpg";
import img4 from "../assets/Images/Prop1/img4.jpg";
import img5 from "../assets/Images/Prop1/img5.jpg";

function PropertyPage1() {

  const { addFavourite } = useContext(FavouritesContext);

  // MAIN IMAGE STARTS AS img1
  const [mainImg, setMainImg] = useState(img1);
  const [activeTab, setActiveTab] = useState("description");

  const property = {
    id: "prop1",
    title: "3 Bedroom Semi Detached House",
    price: 750000,
    bedrooms: 3,
    type: "House",
    postcode: "BR5",
    location: "Petts Wood Road, Petts Wood, Orpington BR5",
    description:
      "Attractive three bedroom semi-detached family home situated within 0.5 miles of Petts Wood station..."
  };

  const handleAddFavourite = () => {
    addFavourite({
      id: property.id,
      title: property.title,
      price: property.price,
      image: img1
    });
  };

  return (
    <div className="wrapper">

      <h1 className="title">Property Details</h1>

      {/* MAIN IMAGE */}
      <img className="main-img" src={mainImg} alt="property" />

      {/* THUMBNAILS (img1 added here) */}
      <div className="thumb-row">

        <img className="thumb" src={img1} onClick={() => setMainImg(img1)} />
        <img className="thumb" src={img2} onClick={() => setMainImg(img2)} />
        <img className="thumb" src={img3} onClick={() => setMainImg(img3)} />
        <img className="thumb" src={img4} onClick={() => setMainImg(img4)} />
        <img className="thumb" src={img5} onClick={() => setMainImg(img5)} />

      </div>

      <div className="info-row">
        <span className="price">£750,000</span>
        <span> | 3 Bed House | </span>
        <span>{property.location}</span>
      </div>

      <div className="fav-btn-container">
        <button className="fav-btn" onClick={handleAddFavourite}>
          ❤ Add to Favourites
        </button>
      </div>

      <div className="tabs">
        <div className={activeTab === "description" ? "active-tab" : "tab"}
          onClick={() => setActiveTab("description")}>
          Description
        </div>

        <div className={activeTab === "floor" ? "active-tab" : "tab"}
          onClick={() => setActiveTab("floor")}>
          Floor Plan
        </div>

        <div className={activeTab === "map" ? "active-tab" : "tab"}
          onClick={() => setActiveTab("map")}>
          Map
        </div>
      </div>

      <div className="content-box">
        {activeTab === "description" && <p>{property.description}</p>}
        {activeTab === "floor" && <p>Ground floor + 3 Bedrooms layout.</p>}
        {activeTab === "map" && <p>{property.location}</p>}
      </div>

    </div>
  );
}

export default PropertyPage1;
