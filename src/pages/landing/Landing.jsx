import logo from "../../images/logo.png";
import "./Landing.css";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useState } from "react";

function Landing({ setUser, user }) {
    const [showLogin, setShowLogin] = useState(true);
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
			{showLogin ? (
				<LoginForm setUser={setUser} user={user} />
			) : (
				<SignUpForm setUser={setUser} />
			)}
			<h3>Are you a User?</h3>
			<button
				className="auth-btn"
				onClick={() => setShowLogin(!showLogin)}
			>
				{showLogin ? "SIGN UP" : "LOG IN"}
			</button>
			{/* <a href="/auth/google">
				<button className="login-button">Login</button>
			</a> */}
		</div>
	);
}

export default Landing;
