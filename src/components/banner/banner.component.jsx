import React from "react";
import "./banner.styles.scss";
import HackClubIterLogo from "../../assets/hackclub-iter-logo.png";

function Banner() {
	return (
		<div className="banner">
			<img
				src={HackClubIterLogo}
				alt="hackclub-iter-logo-main"
				className="banner__logo"
			/>
			<h1 className="banner__title">Hack Club ITER</h1>
			<button className="banner__button">
				Become a member &rarr;
			</button>
		</div>
	);
}

export default Banner;
