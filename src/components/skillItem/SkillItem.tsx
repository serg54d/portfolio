import React from "react";
import styled from 'styled-components';
import { myTheme } from "../../styled/Theme.styled";
import { Icon } from "../../components/icon/Icon";
import { Fade } from "react-awesome-reveal";

type SkillPropsType = {
	iconId: string;
	iconWidth?: string;
	iconHeight?: string;
	iconViewBox?: string;
	title: string;
}

export const Skill = (props: SkillPropsType) => {
	return (
		<SkillStyled>
			<Item>
				<IconBlock>
					<Icon iconId={props.iconId} iconWidth={props.iconWidth} iconHeight={props.iconHeight} iconViewBox={props.iconViewBox} />
				</IconBlock>
				<IconTitle>
					{props.title}
				</IconTitle>
			</Item>
		</SkillStyled>
	)
};

const SkillStyled = styled.li`
	padding: 0 15px;
	flex: 0 1 25%;
	display: flex;
	justify-content: center;
	min-width: 270px;

	@media (max-width: ${myTheme.size.tablet}) {
		flex: 0 1 50%;
	}

	@media (max-width: 560px) {
		flex: 0 1 100%;
		padding: 10px 15px;
	}
`

const Item = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	background-color: ${myTheme.colors.grey.dark};
	font-size: 24px;
	color: ${myTheme.colors.white.light};
	padding: 50px;
	box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.47);
	border-radius: 30px;
	row-gap: 50px;
	height: 100%;
	width: 100%;
	@media (max-width: 560px) {
		row-gap: 60px;
	}
`

const IconBlock = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	max-height: 90px;
	flex: 1;
`
const IconTitle = styled.h3`
	line-height: 29px;
	letter-spacing: 0%;
`