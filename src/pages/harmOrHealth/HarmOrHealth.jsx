import "./HarmOrHealth.css";
import NavBar from "../../components/NavBar/NavBar";

function HarmOrHealth() {
	return (
		<div className="HarmOrHealth">
            <NavBar/>
			<div>
				<h1 className="harmhealth-title">Harm or Health?</h1>
			</div>
            <div className="harmhealth-links-container">
			<p>
				Poisonous plants have always been a part of the world around us,
				but why would you want to create a garden full of poisonous
				plants? Well part of why you might want to do this is because in
				small doses some of the most poisonous plants have healing
				capabilities. Some of these deadly plants serve a dual purpose
				as life saving medications.
			</p>
			<a
				className="harmhealth-links"
				href="https://crimereads.com/historical-poisons-plants-and-medicine/"
				target="_blank"
				rel="noreferrer"
			>
				It's the Dose that Kills
			</a>
			<a
				className="harmhealth-links"
				href="https://www.nytimes.com/2020/08/27/t-magazine/poisonous-flowers-healing-plants.html"
				target="_blank"
				rel="noreferrer"
			>
				The Dual History of Poisonous Flowers
			</a>
			<a
				className="harmhealth-links"
				href="https://www.amnh.org/explore/news-blogs/on-exhibit-posts/the-power-of-poison-poison-as-medicine"
				target="_blank"
				rel="noreferrer"
			>
				The Power of Poison
			</a>
			<a
				className="harmhealth-links"
				href="https://www.nytimes.com/1994/03/08/science/in-ancient-times-flowers-and-fennel-for-family-planning.html"
				target="_blank"
				rel="noreferrer"
			>
				In Ancient Times, Flowers and Fennel For Family Planning
			</a>
            </div>
		</div>
	);
}

export default HarmOrHealth;
