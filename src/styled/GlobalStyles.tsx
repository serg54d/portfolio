import { createGlobalStyle } from "styled-components";



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
}
html {
	/* по умолчанию */
}
`