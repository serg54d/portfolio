import React from "react";
import styled from 'styled-components';
import { myTheme } from "../../styled/Theme.styled";
import { Link } from "react-scroll";

export const HeaderMenu = () => {
	return (
		<StyledMenu>

			<List>
				<Item>
					<NavLink
						to="home"
						smooth={true}
						activeClass="active"
						spy={true}

					>
						Home
					</NavLink>
				</Item>
				<Item>
					<NavLink
						to="aboutMe"
						smooth={true}
						activeClass="active"
						spy={true}
						offset={-25}
					>
						About me
					</NavLink>
				</Item>
				<Item>
					<NavLink
						to="portfolio"
						smooth={true}
						activeClass="active"
						spy={true}
					>
						Portfolio
					</NavLink>
				</Item>
				<Item>
					<NavLink
						to="contact"
						smooth={true}
						activeClass="active"
						spy={true}
						offset={-500}

					>
						Contact
					</NavLink>
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
	@media (max-width: ${myTheme.size.tablet}) {
		display: none;
	}
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
const NavLink = styled(Link)`
	color: ${myTheme.colors.white.light};
	font-weight: 300;
	line-height: 1.17;
	letter-spacing: 0%;
	background: linear-gradient(to right, ${myTheme.colors.blue}, ${myTheme.colors.blue} 50%, ${myTheme.colors.white.light} 50%);
   	background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  	background-size: 200% 100%;
    background-position: 100%;
    transition: 0.3s;
	cursor: pointer;

  &:hover, &.active {
    background-position: 0 100%;
	transform: scale(1.05);
  }
`







