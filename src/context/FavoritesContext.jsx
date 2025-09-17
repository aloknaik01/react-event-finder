import React, { createContext, useContext, useEffect, useState } from 'react'

const FavoritesContext = createContext()
export const useFavorites = () => useContext(FavoritesContext)

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try { return JSON.parse(localStorage.getItem('favorites') || '[]') } catch { return [] }
  })
  const [flash, setFlash] = useState(null) // ephemeral message

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  useEffect(() => {
    if (!flash) return
    const t = setTimeout(() => setFlash(null), 2200)
    return () => clearTimeout(t)
  }, [flash])

  function toggleFavorite(evt) {
    setFavorites(prev => {
      const exists = prev.some(e => e.id === evt.id)
      if (exists) {
        setFlash('Removed from favorites')
        return prev.filter(e => e.id !== evt.id)
      }
      setFlash('Added to favorites')
      return [...prev, evt]
    })
  }

  function removeById(id) {
    setFavorites(prev => prev.filter(e => e.id !== id))
    setFlash('Removed from favorites')
  }

  return <FavoritesContext.Provider value={{ favorites, toggleFavorite, removeById, flash }}>{children}</FavoritesContext.Provider>
}
