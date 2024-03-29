import React from "react";
import styled from 'styled-components';
import { Icon } from "../icon/Icon";
import { myTheme } from "../../styled/Theme.styled";
import { animateScroll as scroll } from "react-scroll";

export const Logo = () => {
	return (
		<LogoBlock onClick={() => { scroll.scrollToTop() }}>
			<LogoBlock>
				<Icon iconId={'headerLogo'} iconWidth='65px' iconHeight="48px" iconViewBox="0" />
				<h2>Notitanic</h2>
			</LogoBlock>
		</LogoBlock>
	)
};



const LogoBlock = styled.a`
	font-family: "Nico Moji";
	display: flex;
	color: ${myTheme.colors.white.snow};
	font-size: 18px;
	font-weight: 400;
	line-height: 1;
	letter-spacing: 0%;
	align-items: center;
	justify-content: center;
	column-gap: 10px;
	transition: .3s;
	cursor: pointer;
	

	:hover {
		color: #f1abab;
		color: ${myTheme.colors.blue};
		transition: 0.3s;
		scale: 1.01;
	}

	:hover svg{
		stroke: #f1abab;
		stroke: ${myTheme.colors.blue};
		transition: 0.3s;
	}

	svg :hover {
		/* color: currentColor;
		stroke: currentStroke; */
	}

`