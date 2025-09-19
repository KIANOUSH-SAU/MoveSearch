import "../css/favorites.css";
import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../contexts/MovieContext";

export default function Favorites() {
	const { favorites, isFavorite, addToFavorites, removeFromFavorites } =
		useMovieContext();
	if (favorites) {
		return (
			<div className="favorites">
				<h2>Your Favorites</h2>
				<div className="movies-grid">
					{favorites.map((movie) => (
						<MovieCard movie={movie} key={movie.id} />
					))}
				</div>
			</div>
		);
	}
	return (
		<div className="favorites-empty">
			<h2>No favorite movies yet</h2>
			<p>Start adding movies to favorites...</p>
		</div>
	);
}
