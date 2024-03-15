import React from "react";
import styled from 'styled-components';
import iconsSprite from '../../assets/icons-font/icons-sprite.svg'
import { myTheme } from "../../styled/Theme.styled";
import { Font } from '../../styled/Common'

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
	font-size: 48px;
	letter-spacing: 0%;
	display: flex;
	justify-content: center;

	${Font({ family: "'NEXT ART'", weight: 400, lineHeight: "1.12" })}
	@media (max-width: ${myTheme.size.pc}) {
			${Font({ family: "'NEXT ART'", weight: 400, lineHeight: "1.12", Fmax: 48, Fmin: 46 })}
		}
`

