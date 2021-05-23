import React from "react";
import "./footer.styles.scss";
import SoaLogo from "../../assets/soa-logo.png";
import { ReactComponent as HackClubRainbowLogo } from "../../assets/hackclub-rainbow.svg";
import { ReactComponent as GitHubLogo } from "../../assets/github.svg";
import { ReactComponent as InstagramLogo } from "../../assets/instagram.svg";
import { ReactComponent as TwitterLogo } from "../../assets/twitter.svg";

function Footer() {
	return (
		<footer className="footer">
			<div className="footer__partners">
				<a
					href="https://www.soa.ac.in/iter"
					className="footer__partner-link">
					<img
						src={SoaLogo}
						alt="soa logo"
						className="footer__partner"
					/>
				</a>
				<a
					href="https://hackclub.com/"
					className="footer__partner-link">
					<HackClubRainbowLogo className="footer__partner" />
				</a>
			</div>
			<div className="footer__socials">
				<a
					href="https://www.github.com/hackclubiter"
					className="footer__social-link">
					<GitHubLogo className="footer__social-icon" />
				</a>
				<a
					href="https://www.instagram.com/hackclubiter"
					className="footer__social-link">
					<InstagramLogo className="footer__social-icon" />
				</a>
				<a
					href="https://www.twitter.com/hackclubiter"
					className="footer__social-link">
					<TwitterLogo className="footer__social-icon" />
				</a>
			</div>
		</footer>
	);
}

export default Footer;
