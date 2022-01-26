import React from "react";
import {
	Logo,
	NavbarWrapper,
	NavLinks,
	Item,
	Navigation,
} from "../ui/Navbar/Navbar";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useAuth } from "../authHook/useAuth";

export const Navbar = () => {
	const { token } = useAuth();
	const links = !token ? (
		<Navigation>
			<Link to="/login">
				<Item>Login</Item>
			</Link>
			<Link to="/register">
				<Item>Register</Item>
			</Link>
		</Navigation>
	) : (
		<Navigation>
			<Link to="/">
				<Item>Home</Item>
			</Link>
			<Link to="/add">
				<Item>Add</Item>
			</Link>
		</Navigation>
	);
	return (
		<NavbarWrapper>
			<NavLinks>
				<Link to="/">
					<Logo src={logo} />
				</Link>
				<Item className="page-title">SKILLZzz</Item>
				{links}
			</NavLinks>
		</NavbarWrapper>
	);
};
