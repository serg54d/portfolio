import React from "react";
import styled from 'styled-components';
import { myTheme } from "../../styled/Theme.styled";
import { Title } from "../../components/title/title";
import { Slider } from "../../components/slider/Slider";
import photoProject from '../../assets/images/portfolio/portfolio.webp';

export const Portfolio = () => {
	return (
		<StyledPortfolio >
			<Container>
				<Title title={"Portfolio"} />
				<Slider></Slider>
			</Container>
		</StyledPortfolio>
	)
};



const StyledPortfolio = styled.section`
	background-color: ${myTheme.colors.grey.dark};
	padding: 100px 0;
`;

const Container = styled.div`
	max-width: ${myTheme.container.containerWidth};
	box-sizing: content-box;
	margin: 0 auto;
	padding: 0 15px;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	gap: 50px;
`;



