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

			<a
				href="http://bit.ly/hackclubiter-20"
				className="banner__cta">
				Become a member &rarr;
			</a>
		</div>
	);
}

export default Banner;
