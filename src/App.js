import React from "react";
import {
	BrowserRouter,
	Route,
	Switch,
} from "react-router-dom";

// stylesheets
import "./App.css";

// custom components
import { ReactComponent as HackClubLogo } from "./assets/hackclub-logo.svg";
import Footer from "./components/footer/footer.component";
import Home from "./pages/Home/home.component";

// component
function App() {
	return (
		<div id="App">
			<HackClubLogo className="hackclub-logo" />
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
				</Switch>
			</BrowserRouter>
			<Footer className="footer" />
		</div>
	);
}

export default App;
