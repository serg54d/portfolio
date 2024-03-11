import React from "react";
import styled from 'styled-components';
import { myTheme } from "../../styled/Theme.styled";
import { Logo } from "../../components/logo/logo";
import { Icon } from "../../components/icon/Icon";



export const Footer = () => {
	return (
		<StyledFooter>
			<Container>
				<Wrapper>
					<Menu>
						<MenuList>
							<MenuItem>
								<MenuLink href="#">Home</MenuLink>
							</MenuItem>
							<MenuItem>
								<MenuLink href="#">About me</MenuLink>
							</MenuItem>
							<MenuItem>
								<MenuLink href="#">Portfolio</MenuLink>
							</MenuItem>
							<MenuItem>
								<MenuLink href="#">Contact</MenuLink>
							</MenuItem>
						</MenuList>
					</Menu>
					<Contact>
						<ContactTitle>Contact:</ContactTitle>
						<ContactItem>Email: notitanic33@gmail.com</ContactItem>
						<ContactItem>Inst: notitanic33</ContactItem>
						<ContactItem>Calls: +7 (900) - 121 - 54 -54</ContactItem>
					</Contact>
					<Info>
						<Block>

							<Logo />
							<IconBlock>
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
`

const MenuItem = styled.li`
	
`

const MenuLink = styled.a`
	color: ${myTheme.colors.white.light}
`
const Contact = styled.div`
	display: flex;
	flex-direction: column;	
	flex: 0 1 33%;
	gap: 18px;
	min-width: 245px;
`

const ContactTitle = styled.h4`
	
`

const ContactItem = styled.p`
	
`
const Info = styled.div`
	display: flex;
	flex-direction: column;
	flex: 0 1 33%;
	gap: 55px;
	
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
`

const Copyright = styled.p`
	
`