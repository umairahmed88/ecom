import React from "react";
import { Head, Navbar, Search } from "../index.component";
import "./Header.css";

const Header = ({ cartItem }) => {
	return (
		<>
			<Head />
			<Search cartItem={cartItem} />
			<Navbar />
		</>
	);
};

export default Header;
