import React, { useState } from "react";
import styled, { css } from 'styled-components';
import { myTheme } from "../../styled/Theme.styled";
import { Link } from "react-scroll";
interface RootProps {
	isOpen: boolean;
}

export const MobileMenu = () => {
	const [menuIsOpen, setMenuIsOpen] = useState(false)
	const onBurgerBtnClick = () => {
		setMenuIsOpen(!menuIsOpen)
		if (!menuIsOpen) {
			document.body.classList.add('menu-open')
		} else {
			document.body.classList.remove('menu-open')
		}
	}
	const onLinkClick = () => { setMenuIsOpen(false) }


	return (
		<StyledMobileMenu>
			<BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
				<span></span>
			</BurgerButton>
			<MobileMenuPopup isOpen={menuIsOpen}>
				<List>
					<Item>
						<NavLink onClick={onLinkClick}
							to="home"
							smooth={true}
							activeClass="active"
							spy={true}

						>
							Home
						</NavLink>
					</Item>
					<Item>
						<NavLink onClick={onLinkClick}
							to="aboutMe"
							smooth={true}
							activeClass="active"
							spy={true}
							offset={-70}

						>
							Aboute Me
						</NavLink>
					</Item>
					<Item>
						<NavLink onClick={onLinkClick}
							to="portfolio"
							smooth={true}
							activeClass="active"
							spy={true}
							offset={-70}
						>
							Portfolio
						</NavLink>
					</Item>
					<Item>
						<NavLink onClick={onLinkClick}
							to="contact"
							smooth={true}
							activeClass="active"
							spy={true}
							offset={-60}
						>
							Contact
						</NavLink>
					</Item>
				</List>
			</MobileMenuPopup>
		</StyledMobileMenu >
	)
};

const StyledMobileMenu = styled.nav`
	display: none;
	width: 100%;
	justify-content: center;
	padding: 0 15px;
	box-sizing: content-box;
	@media (max-width: ${myTheme.size.tablet}) {
		display: flex;
		justify-content: flex-end;
	}
`;

const BurgerButton = styled.button <{ isOpen: boolean }> `
	display: none;
	background-color: rgb(42, 42, 42);
	@media (max-width: ${myTheme.size.tablet}) {
		display: block;
		position: relative;
		flex: 0 0 40px;
		height: 22.5px;
		cursor: pointer;
		z-index: 150;


		
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
			${props => props.isOpen && css<{ isOpen: boolean }>`
				transform: rotate(-45deg);
				top: calc(50% - 1px);
			`}
		}
		&::after {
			bottom: 0px;
			${props => props.isOpen && css<{ isOpen: boolean }>`
				transform: rotate(45deg);
				bottom: calc(50% - 1px);
			`}
		}
		span {
			top: calc(50% - 1px);
			${props => props.isOpen && css<{ isOpen: boolean }>`
				transform: scale(0);
			`}
		}

	}
`

const MobileMenuPopup = styled.div < { isOpen: boolean }> `
	position: fixed;
	overflow: auto;
	width: 100%;
	height: 100%;
	top: 0;
	left: -100%;
	transition: left 0.3s ease 0s;
	z-index: 100;
	background-color: ${myTheme.colors.grey.dark};
	justify-content: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	${props => props.isOpen && css<{ isOpen: boolean }>`
		left: 0;
		overflow: hidden;
	`}

	
`

const List = styled.ul`
	display: flex;
	width: 100%;
	font-size: 18px;
	align-items: center;
	flex-direction: column;
	justify-content: center;
gap: 30px;
font-size: 25px;
flex: 1 1 100%;
padding: 30px;
`

const Item = styled.li`
	flex: 0 1 15%;
	display: flex;
	/* row-gap: 145px; */
	justify-content: center;
	align-items: center;
`
const NavLink = styled(Link)`
	color: ${myTheme.colors.white.light};
	font-weight: 300;
	line-height: 21px;
	letter-spacing: 0%;
	line-height: 1.17;
	letter-spacing: 0%;
	background: linear-gradient(to right, ${myTheme.colors.blue}, ${myTheme.colors.blue} 50%, ${myTheme.colors.white.light} 50%);
   	background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  	background-size: 200% 100%;
    background-position: 100%;
    transition: 0.3s;

  &:hover {
    background-position: 0 100%;
	transform: scale(1.05);
  }
`







