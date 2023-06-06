import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar(props) {
	return (
		<nav className="NavBar">
			<NavLink
				to="/"
				className={({ isActive, isPending }) =>
					isPending ? "pending" : isActive ? "active" : ""
				}
			>
				My Garden
			</NavLink>
			<NavLink
				to="/alnwickGarden"
				className={({ isActive, isPending }) =>
					isPending ? "pending" : isActive ? "active" : ""
				}
			>
				Alnwick Garden
			</NavLink>
			<NavLink
				to="/harmOrHealth"
				className={({ isActive, isPending }) =>
					isPending ? "pending" : isActive ? "active" : ""
				}
			>
				Harm or Health?
			</NavLink>
			<NavLink
				to="/search"
				className={({ isActive, isPending }) =>
					isPending ? "pending" : isActive ? "active" : ""
				}
			>
				Search
			</NavLink>
		</nav>
	);
}

export default NavBar;