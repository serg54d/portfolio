import React from "react";
import styled from 'styled-components';
import { Logo } from "../../components/logo/logo";
import { Menu } from "../../components/menu/Menu";
import { myTheme } from "../../styled/Theme.styled";

export const Header = () => {
	return (
		<StyledHeader>
			<Container>
				<Logo />
				<Menu />
				<BurgerMenu>
					<BurgerMenuElement />
				</BurgerMenu>
			</Container>
		</StyledHeader >
	);
};

const BurgerMenu = styled.button`
	display: none;
	background-color: rgb(42, 42, 42);
	@media (max-width: ${myTheme.size.tablet}) {
		display: block;
		position: relative;
		flex: 0 0 40px;
		height: 22.5px;
		cursor: pointer;
		z-index: 5;
		span,
		&::before,
		&::after {
			content: "";
			transition: all 0.3s ease 0s;
			left: 0px;
			position: absolute;
			width: 100%;
			height: 2px;
			background-color: #fff;
		}
		&::before {
			top: 0px;
		}
		&::after {
			bottom: 0px;
		}
		span {
			top: calc(50% - 1px);
		}

	}
`

const BurgerMenuElement = styled.span`
	
`

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

