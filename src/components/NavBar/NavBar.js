import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar(props) {
	return (
        <div className="div-container">
            <nav className="NavBar">
                <NavLink
                    to="/myGarden"
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
        </div>
	);
}

export default NavBar;