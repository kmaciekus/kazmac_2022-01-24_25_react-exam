import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./components/AuthProvider";
import { RequireAuth } from "./components/RequireAuth";
import { Navbar } from "./organisms/Navbar";
import { AddSkill } from "./pages/AddSkill";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { NotFound } from "./pages/NotFound";
import { Register } from "./pages/Register";

function App() {
	return (
		<div className="App">
			<AuthProvider>
				<Navbar />
				<Routes>
					<Route
						path="/"
						element={
							<RequireAuth>
								<Home />
							</RequireAuth>
						}
					/>
					<Route 
						path="/add"
						element={
							<RequireAuth>
								<AddSkill />
							</RequireAuth>
						}
					/>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/404" element={<NotFound/>} />

					<Route path="*" element={<Navigate to="/404"/>} />
				</Routes>
			</AuthProvider>
		</div>
	);
}

export default App;
