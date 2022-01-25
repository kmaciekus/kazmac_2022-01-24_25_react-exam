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

export const Navbar = ({ ...props }) => {
	const { linkHome, linkAdd } = props;
	const links =
		!linkHome & !linkAdd ? (
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
				<Link to={`/${linkHome}`}>
					<Item>{linkHome.charAt(0).toUpperCase() + linkHome.slice(1)}</Item>
				</Link>
				<Link to={`/${linkAdd}`}>
					<Item>{linkAdd.charAt(0).toUpperCase() + linkAdd.slice(1)}</Item>
				</Link>
			</Navigation>
		);
	return (
		<NavbarWrapper>
			<NavLinks>
				<Link to="/">
					<Logo src={logo} />
				</Link>
				{links}
			</NavLinks>
		</NavbarWrapper>
	);
};
