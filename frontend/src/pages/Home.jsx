import MovieCard from "../components/MovieCard";
import "../css/Home.css";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
export default function Home() {
	const [searchQuery, setSearchQuery] = useState("");

	const movies = [
		{ id: 1, title: "John Wick", release_date: "2022" },
		{ id: 2, title: "Avengers 1", release_date: "2012" },
		{ id: 3, title: "Avengers 2", release_date: "2015" },
		{ id: 4, title: "Avengers 3", release_date: "2018" },
	];

	const handleSearch = (e) => {
		e.preventDefault();
		alert(searchQuery);
		setSearchQuery("");
	};
	return (
		<>
			<div className="home">
				<form onSubmit={handleSearch} className="search-form">
					<input
						type="text"
						placeholder="search for movies..."
						className="search-input"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
					/>
					<button type="submit" className="search-button">
						Search
					</button>
				</form>
				<div className="movies-grid">
					{movies.map((movie) => (
						<MovieCard movie={movie} key={movie.id} />
					))}
				</div>
			</div>
		</>
	);
}
