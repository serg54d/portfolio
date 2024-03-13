import React from "react";
import styled from 'styled-components';
import { Logo } from "../../components/logo/logo";
import { HeaderMenu } from "./HeaderMenu";
import { MobileMenu } from "./MobileMenu";
import { myTheme } from "../../styled/Theme.styled";

export const Header = () => {
	return (
		<StyledHeader>
			<Container>
				<Logo />
				<HeaderMenu />
				<MobileMenu />
			</Container>
		</StyledHeader >
	);
};

const StyledHeader = styled.header`
	z-index: 100;
	padding: 25px 0px;
	position: absolute;
	width: 100%;
	overflow: hidden;
`;

const Container = styled.div`
	max-width: ${myTheme.container.containerWidth};
	box-sizing: content-box;
	margin: 0 auto;
	padding: 0 15px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	row-gap: 220px;
`;

