import React, { useState, useContext } from "react";
import "./PropertyPage.css";
import { FavouritesContext } from "../context/FavouritesContext";

// IMPORT IMAGES
import img1 from "../assets/Images/Prop2/img1.jpg";
import img2 from "../assets/Images/Prop2/img2.jpg";
import img3 from "../assets/Images/Prop2/img3.jpg";
import img4 from "../assets/Images/Prop2/img4.jpg";
import img5 from "../assets/Images/Prop2/img5.jpg";

function PropertyPage2() {

  const { addFavourite } = useContext(FavouritesContext);

  // Main image starts as img1
  const [mainImg, setMainImg] = useState(img1);
  const [activeTab, setActiveTab] = useState("description");

  const property = {
    id: "prop2",
    title: "2 Bedroom Flat",
    price: 399995,
    bedrooms: 2,
    type: "Flat",
    location: "Crofton Road Orpington BR6",
    description:
      "Presented in excellent decorative order throughout is this two double bedroom, two bathroom, garden flat..."
  };

  return (
    <div className="wrapper">

      <h1 className="title">Property Details</h1>

      {/* MAIN IMAGE */}
      <img className="main-img" src={mainImg} alt="property" />

      {/* THUMBNAILS */}
      <div className="thumb-row">
        <img className="thumb" src={img1} onClick={() => setMainImg(img1)} />
        <img className="thumb" src={img2} onClick={() => setMainImg(img2)} />
        <img className="thumb" src={img3} onClick={() => setMainImg(img3)} />
        <img className="thumb" src={img4} onClick={() => setMainImg(img4)} />
        <img className="thumb" src={img5} onClick={() => setMainImg(img5)} />
      </div>

      <div className="info-row">
        <span className="price">£399,995</span>
        <span> | 2 Bed Flat | </span>
        <span>{property.location}</span>
      </div>

      <div className="fav-btn-container">
        <button
          className="fav-btn"
          onClick={() =>
            addFavourite({
              id: property.id,
              title: property.title,
              price: property.price,
              image: img1
            })
          }
        >
          ❤ Add to Favourites
        </button>
      </div>

      <div className="tabs">
        <div
          className={activeTab === "description" ? "active-tab" : "tab"}
          onClick={() => setActiveTab("description")}
        >
          Description
        </div>

        <div
          className={activeTab === "floor" ? "active-tab" : "tab"}
          onClick={() => setActiveTab("floor")}
        >
          Floor Plan
        </div>

        <div
          className={activeTab === "map" ? "active-tab" : "tab"}
          onClick={() => setActiveTab("map")}
        >
          Map
        </div>
      </div>

      <div className="content-box">
        {activeTab === "description" && <p>{property.description}</p>}
        {activeTab === "floor" && <p>2 Bed Flat layout</p>}
        {activeTab === "map" && <p>{property.location}</p>}
      </div>

    </div>
  );
}

export default PropertyPage2;

