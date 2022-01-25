import { Routes, Route } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./components/AuthProvider";
import { Navbar } from "./organisms/Navbar";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

function App() {
	return (
		<div className="App">
			<AuthProvider>
				<Navbar  />
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Routes>
			</AuthProvider>
		</div>
	);
}

export default App;
