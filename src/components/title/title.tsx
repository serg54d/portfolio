import React from "react";
import styled from 'styled-components';
import iconsSprite from '../../assets/icons-font/icons-sprite.svg'
import { myTheme } from "../../styled/Theme.styled";

type TitlePropsType = {
	title: string
}

export const Title = (props: TitlePropsType) => {
	return (
		<StyledTitle>
			{props.title}
		</StyledTitle>
	)
};

const StyledTitle = styled.h2`
	color: ${myTheme.colors.white.light};
	font-family: "NEXT ART";
	font-size: 48px;
	font-weight: 400;
	line-height: 1.125;
	letter-spacing: 0%;
	display: flex;
	justify-content: center;
`

