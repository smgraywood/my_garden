import logo from '../../images/logo.png'
import './Landing.css'

function Landing() {

	return (
        <div>
            <img
			src={logo}
			className="logo"
			alt="An image of the logo for My Garden. A round logo with images of different poisonous plants and the text My Garden in the center"
		/>
		<a href="/auth/google"><button className="login-button">Login</button></a>
        </div>
    )
}

export default Landing;