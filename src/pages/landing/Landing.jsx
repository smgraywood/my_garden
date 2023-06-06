import logo from "../../images/logo.png";
import "./Landing.css";

function Landing() {
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
			<a href="/auth/google">
				<button className="login-button">Login</button>
			</a>
		</div>
	);
}

export default Landing;
