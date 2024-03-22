import React from "react";
import styled from 'styled-components';
import { myTheme } from "../../styled/Theme.styled";
import { Logo } from "../../components/logo/logo";
import { Icon } from "../../components/icon/Icon";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import { Font } from '../../styled/Common'



export const Footer = () => {
	return (
		<StyledFooter id="contact">
			<Container>
				<Wrapper>
					<Menu>
						<MenuList>
							<MenuItem>
								<MenuLink
									to="home"
									smooth={true}
									spy={true}
								>
									Home
								</MenuLink>
							</MenuItem>
							<MenuItem>
								<MenuLink
									to="aboutMe"
									smooth={true}
									spy={true}
									offset={-25}
								>
									About me
								</MenuLink>
							</MenuItem>
							<MenuItem>
								<MenuLink
									to="portfolio"
									smooth={true}
									spy={true}
								>
									Portfolio
								</MenuLink>
							</MenuItem>
							<MenuItem>
								<MenuLink
									to="contact"
									smooth={true}
									spy={true}
									offset={-500}
								>
									Contact
								</MenuLink>
							</MenuItem>
						</MenuList>
					</Menu>
					<Contact>
						<ContactTitle>Contact:</ContactTitle>
						<ContactItem href="mailto:serg54d@gmail.com&serg54d@bk.ru?body=Привет, ">
							Email: serg54d@gmail.com
						</ContactItem>
						<ContactItem href="https://instagram.com/" target="_blank">Inst: notitanic33</ContactItem>
						<ContactItem href="tel:+79515509694">Calls: +7 (951) - 550 - 96 -94</ContactItem>
					</Contact>
					<Info>
						<Block>

							<Logo />
							<IconBlock onClick={() => { scroll.scrollToTop() }}>
								<Icon iconId='arrowUp' iconViewBox='0 0 26 24' iconWidth='26' iconHeight='24' />
							</IconBlock>
						</Block>
						<Copyright>
							Copyright © 2024, Notitanic
						</Copyright>
					</Info>
				</Wrapper>
			</Container>
		</StyledFooter >
	);
};




const StyledFooter = styled.footer`
	background-color: ${myTheme.colors.grey.light};
	color: ${myTheme.colors.white.light};
	padding: 50px 0;
	position: relative;
`;

const Container = styled.div`
	max-width: ${myTheme.container.containerWidth};
	box-sizing: content-box;
	margin: 0 auto;
	padding: 0 15px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Wrapper = styled.div`
	max-width: 775px;
	width: 100%;
	box-sizing: content-box;
	margin: 0 auto;
	padding: 0 15px;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	gap: 55px;
	line-height: 1.17;
	font-size: 18px;
	@media (max-width: ${myTheme.size.pc}) {
		${Font({ Fmax: 18, Fmin: 20 })}	
	}
	font-size: calc((100vw - 320px) / (1240 - 320) * (18 - 20) + 20px);
	@media (max-width: ${myTheme.size.mobile}) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: calc((100vw - 320px) / (767 - 320) * (25 - 21) + 21px);
		text-align: center;
	}
`;

const Menu = styled.nav`
	flex: 0 1 33%;
	align-items: center;
	display: flex;
	gap: 50px;
		
`

const MenuList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 18px;
	@media (max-width: ${myTheme.size.mobile}) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 22px;
	}
`

const MenuItem = styled.li`
transition: 0.3s;
	&:hover {
    
	transform: scale(1.03);
  }
`

const MenuLink = styled(Link)`
	color: ${myTheme.colors.white.light};
	background: linear-gradient(to right, ${myTheme.colors.blue}, ${myTheme.colors.blue} 50%, ${myTheme.colors.white.light} 50%);
   	background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  	background-size: 200% 100%;
    background-position: 100%;
    transition: 0.3s;
cursor: pointer;
  &:hover {
    background-position: 0 100%;
	
  }
`
const Contact = styled.div`
	display: flex;
	flex-direction: column;	
	flex: 0 1 33%;
	gap: 18px;
	min-width: 245px;
		@media (max-width: ${myTheme.size.mobile}) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 22px;
	}
	
`

const ContactTitle = styled.h4`
	
`

const ContactItem = styled.a`
		font-size: 18px;
		background: linear-gradient(to right, ${myTheme.colors.blue}, ${myTheme.colors.blue} 50%, ${myTheme.colors.white.snow} 50%);
   	background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  	background-size: 200% 100%;
    background-position: 100%;
    transition: 0.5s;
	cursor: pointer;
  &:hover {
    background-position: 0 100%;
	
  }
	@media (max-width: ${myTheme.size.pc}) {
		${Font({ Fmax: 18, Fmin: 20 })}
	}
`
const Info = styled.div`
	display: flex;
	flex-direction: column;
	flex: 0 1 33%;
	gap: 55px;
		@media (max-width: ${myTheme.size.mobile}) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 30px;
	}
`

const Block = styled.div`
	display: flex;
	align-items: top;
	gap: 25px;
`

const IconBlock = styled.div`
	background: linear-gradient(135.00deg, rgb(226, 163, 0) 0%,rgb(226, 149, 0) 100%);
	padding: 18px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 0.3s;
	cursor: pointer;
	&:hover{
		opacity: 0.8;
		transform: scale(1.05)
	}
`

const Copyright = styled.p`
	
`