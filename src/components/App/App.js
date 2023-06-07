import MyGarden from "../../pages/myGarden/MyGarden";
import AlnwickGarden from "../../pages/alnwickGarden/AlnwickGarden";
import HarmOrHealth from "../../pages/harmOrHealth/HarmOrHealth";
import Search from "../../pages/search/Search";
import Landing from "../../pages/landing/Landing";
import { Route, Routes } from "react-router-dom";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useState } from "react";
import { getUser } from "../../utilities/users-service";

function App({ setUser, user }) {
	const [showLogin, setShowLogin] = useState(getUser());
	return (
		<div className="App">
			{user ? (
				<>
					<Routes>
						<Route path="/" element={<Landing />}></Route>
						<Route path="/myGarden" element={<MyGarden />}></Route>
						<Route
							path="/alnwickGarden"
							element={<AlnwickGarden />}
						></Route>
						<Route
							path="/harmOrHealth"
							element={<HarmOrHealth />}
						></Route>
						<Route path="/search" element={<Search />}></Route>
					</Routes>
				</>
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
			<Landing path="/" setUser={setUser} />
		</div>
	);
}

export default App;
