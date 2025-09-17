import React, { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();
export const useFavorites = () => useContext(FavoritesContext);

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("favorites") || "[]");
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  function toggleFavorite(evt) {
    setFavorites((prev) => {
      const exists = prev.some((e) => e.id === evt.id);
      if (exists) return prev.filter((e) => e.id !== evt.id);
      return [...prev, evt];
    });
  }

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}
