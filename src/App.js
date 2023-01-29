import React from "react";
import MasterRoutes from "./pages/navigate/MasterRoutes";
import Navbar from "./pages/navigate/Navbar";
import "./css/App.css";

function App() {
	return (
		<div className="App">
			<Navbar />
			<MasterRoutes />
		</div>
	);
}

export default App;
