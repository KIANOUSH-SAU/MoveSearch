import "../css/MovieCard.css";
export default function MovieCard({ movie }) {
	function onFavoriteClick() {
		alert("Favorite button was clicked");
	}
	return (
		<div className="movie-card">
			<div className="movie-poster">
				<img
					className="movie-image"
					src={movie.url}
					alt={movie.title}
				/>
				<div className="movie-overlay">
					<button className="favorite-btn" onClick={onFavoriteClick}>
						❤️
					</button>
				</div>
				{/*sinece the movie prop is an object, it can contain the url property */}
			</div>
			<div className="movie-info">
				<h3>{movie.title}</h3>
				<p>{movie.release_date}</p>
			</div>
		</div>
	);
} //The "movie" prop is gonna be an object
