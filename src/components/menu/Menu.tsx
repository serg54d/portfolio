import React from "react";
import styled from 'styled-components';
import { myTheme } from "../../styled/Theme.styled";

export const Menu = () => {
	return (
		<StyledMenu>
			<List>
				<Item>
					<Link>Home</Link>
				</Item>
				<Item>
					<Link>About me</Link>
				</Item>
				<Item>
					<Link>Portfolio</Link>
				</Item>
				<Item>
					<Link>Contact</Link>
				</Item>
			</List>
		</StyledMenu>
	)
};

const StyledMenu = styled.nav`
	display: flex;
	flex: 0 1 710px;
	max-width: 710px;
	justify-content: center;
	padding: 0 15px;
	box-sizing: content-box;
`;

const List = styled.ul`
	display: flex;
	width: 100%;
	font-size: 18px;
	align-items: center;
	
`

const Item = styled.li`
	flex: 0 1 25%;
	display: flex;
	row-gap: 145px;
	justify-content: center;
	align-items: center;
`
const Link = styled.a`
color: ${myTheme.colors.white.light};
font-weight: 300;
line-height: 21px;
letter-spacing: 0%;
	
`







