import React, { useContext } from "react";
import { FavouritesContext } from "../context/FavouritesContext";


function FavouritesList() {

  const { favourites, removeFavourite, clearFavourites } = useContext(FavouritesContext);

  return (
    <div className="favourites-box" aria-label="Favourites List">

      <h3>Your Favourites</h3>

      {favourites.length === 0 && (
        <p>No favourite properties yet.</p>
      )}

      <ul>
        {favourites.map((item) => (
          <li key={item.id} className="fav-item">
            <strong>{item.type}</strong> — £{item.price.toLocaleString()}
            <br />
            <small>{item.location}</small>
            <br />

            <button
              onClick={() => removeFavourite(item.id)}
              aria-label="Remove from favourites"
              className="remove-btn"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      {favourites.length > 0 && (
        <button
          onClick={clearFavourites}
          className="clear-btn"
          aria-label="Clear all favourites"
        >
          Clear All
        </button>
      )}
    </div>
  );
}

export default FavouritesList;

