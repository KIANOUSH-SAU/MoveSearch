import "../src/css/App.css";
import NavBar from "./components/Navbar";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<NavBar />
			<main className="main-content">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/favorites" element={<Favorites />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
