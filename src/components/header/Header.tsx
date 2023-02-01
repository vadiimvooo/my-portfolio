import { CTA } from './CTA';
import './Header.scss';
import { HeaderSocial } from './HeaderSocial';

const me = require("../../assets/me.png")

export const Header = () => {
	return (
		<header className="header">
			<div className="container header__container">
				<h5>Hello I'm</h5>
				<h1>Vadym Voiedilo</h1>
				<h5 className="text-light">Frontend Developer</h5>

				<CTA />
				<HeaderSocial />

				<div className="me header__me">
					<img src={me} alt="me" />
				</div>

				<a 
					href="#contact"
					className="header__scroll-down"
				>
					Scroll Down
				</a>
			</div>
		</header>
	);
}