//Kind of like the state manager for the favorite movies (contains a global state and some helper functions)

import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);
export const MovieProvider = ({ children }) => {
	const [favorites, setFavorites] = useState([]);
	useEffect(() => {
		const storedFavs = localStorage.getItem("favorites");

		if (storedFavs) setFavorites(JSON.parse(storedFavs));
	}, []);
	useEffect(() => {
		localStorage.setItem("favorites", JSON.stringify(favorites));
	}, [favorites]); //So anytime the "favorites" state changes, we update what we're storing in our local storage

	//3 operations need to be added 1.Adding to the favorites 2.Removing from the favorites 3.Checking if something IS a favorite

	const addToFavorites = (movie) => {
		setFavorites((prev) => [...prev, movie]); //Gets all the previously liked movies and then adds the new movie
	};

	const removeFromFavorites = (movieId) => {
		setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
	};

	const isFavorite = (movieId) => {
		return favorites.some((movie) => movie.id === movieId); //some tells us if one of these conditions is true
	};

	const value = {
		favorites,
		addToFavorites,
		removeFromFavorites,
		isFavorite,
	};
	return (
		<MovieContext.Provider value={value}>{children}</MovieContext.Provider>
	);
};
