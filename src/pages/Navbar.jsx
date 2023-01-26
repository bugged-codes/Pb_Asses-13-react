import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className="navbar">
			<ul className="nav-list">
				<li className="nav-list-items">
					<NavLink className={({ isActive }) => (isActive ? "active-class" : "notActive-class")} to={"/"}>
						Home
					</NavLink>
				</li>
				<li className="nav-list-items">
					<NavLink className={(isActive) => (isActive ? "active-class" : "notActive-class")} to={"/Students"}>
						Students
					</NavLink>
				</li>
				<li className="nav-list-items">
					<NavLink className={({ isActive }) => (isActive ? "active-class" : "notActive-class")} to={"/ContactUs"}>
						Contact Us
					</NavLink>
				</li>
				<li className="nav-list-items">
					<NavLink className={(isActive) => (isActive ? "active-class" : "notActive-class")} to={"/Edit"}>
						Edit
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}
