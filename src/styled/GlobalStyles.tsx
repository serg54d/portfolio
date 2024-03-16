import { createGlobalStyle } from "styled-components";
import { myTheme } from "../styled/Theme.styled";


export const GlobalStyles = createGlobalStyle`
		
*,
*::before,
*::after {
	margin: 0;
	padding: 0;
	border: 0;
	box-sizing: border-box;
}
li {
	list-style: none;
}
a,
a:visited {
	text-decoration: none;
}
a:hover {
	text-decoration: none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
	font-weight: inherit;
	font-size: inherit;
}
img {
	vertical-align: top;
}
html,
body {
	height: 100%;
	font-family: "ArodoraPro-Light", "Roboto";
	min-width: 320px;
}
html {
	/* по умолчанию */
}

section {
	padding: 100px 0;
	@media (max-width: ${myTheme.size.tablet}) {
		padding: 70px 0;
	}

	@media (max-width: ${myTheme.size.mobile}) {
		padding: 45px 0;
	}

	@media (max-width: ${myTheme.size.mobileSmall}) {
		padding: 35px 0;
	}
}
`
