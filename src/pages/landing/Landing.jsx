import logo from "../../images/logo.png";
import "./Landing.css";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useState } from "react";
import { getUser } from "../../utilities/users-service"

function Landing({ setUser, user }) {
    const [showLogin, setShowLogin] = useState(getUser());
	return (
		<div className="Landing">
			<div className="landing-logo-container">
				<img
					src={logo}
					className="logo"
					alt="An image of the logo for My Garden. A round logo with images of different poisonous plants and the text My Garden in the center"
				/>
			</div>
			<div className="landing-explanation-container">
				<p className="explanation">
					Your very own Alnwick Garden in the Golden State.
				</p>
			</div>
		</div>
	);
}

export default Landing;
