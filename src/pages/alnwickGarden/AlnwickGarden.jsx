import "./AlnwickGarden.css";
import AlnwickImage from '../../images/alnwick-image.jpeg'
import NavBar from "../../components/NavBar/NavBar";

function AlnwickGarden() {
	return (
		<>
            <NavBar/>
			<div className="AlnwickGarden">
				<h1 className="alnwick-title">Alnwick Garden</h1>
                <img className= "alnwick-image" src={AlnwickImage}></img>
				<div className="alnwick-links-container">
                    <p>
                The Alnwick Garden plays host to the small but deadly Poison Garden—filled exclusively with around 100 toxic, intoxicating, and narcotic plants. Alnwick Garden is what inspired this project. Check out these articles about the most famous Poison Garden in the world and get inspired to create your own list of toxic plant species for your own Poison Garden in the golden state!
                </p>
					<a
						className="alnwick-links"
						href="https://www.alnwickgarden.com/the-garden/poison-garden/"
						target="_blank"
						rel="noreferrer"
					>
						The Poison Garden (Official Site)
					</a>
					<a
						className="alnwick-links"
						href="https://www.npr.org/sections/health-shots/2017/04/27/525143152/welcome-to-the-poison-garden-medicines-medieval-roots"
						target="_blank"
						rel="noreferrer"
					>
						Welcome to the Poison Garden
					</a>
					<a
						className="alnwick-links"
						href="https://www.smithsonianmag.com/travel/step-inside-worlds-most-dangerous-garden-if-you-dare-180952635/"
						target="_blank"
						rel="noreferrer"
					>
						Step Inside the World's Most Dangerous Garden
					</a>
				</div>
			</div>
		</>
	);
}

export default AlnwickGarden;
