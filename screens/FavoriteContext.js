import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Function to add a movie to favorites
  const addFavorite = (movie) => {
    const isFavorite = favorites.some(fav => fav.id === movie.id);
    if (!isFavorite) {
      setFavorites([...favorites, movie]);
    }
  };

  // Function to remove a movie from favorites by its id
  const removeFavorite = (id) => {
    setFavorites(favorites.filter(fav => fav.id !== id));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};



