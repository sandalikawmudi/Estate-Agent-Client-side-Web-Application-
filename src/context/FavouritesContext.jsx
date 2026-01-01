import React, { createContext, useState } from "react";

export const FavouritesContext = createContext();

function FavouritesProvider({ children }) {

  const [favourites, setFavourites] = useState([]);

  const addFavourite = (property) => {
    // prevent duplicates
    setFavourites(prev =>
      prev.some(p => p.id === property.id) ? prev : [...prev, property]
    );
  };

  const removeFavourite = (id) => {
    setFavourites(prev => prev.filter(p => p.id !== id));
  };

  return (
    <FavouritesContext.Provider value={{ favourites, addFavourite, removeFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesProvider;
