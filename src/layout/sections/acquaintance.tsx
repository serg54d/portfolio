import React from "react";
import styled from 'styled-components';
import { myTheme } from "../../styled/Theme.styled";
import myPhoto from '../../assets/images/acquaintance/Sergey-Dunaev.webp';
import myPhoto2 from '../../assets/images/acquaintance/Sergey-Dunaev.png';
import iconSlash from '../../assets/icons-font/slashIcon.svg';
import iconUx from '../../assets/icons-font/uxIcon.svg';
import iconPs from '../../assets/icons-font/psIcon.svg';
import iconUi from '../../assets/icons-font/uiIcon.svg';
import ellipseIcon from '../../assets/icons-font/ellipseIcon.svg';

export const Acquaintance = () => {
	return (
		<SectionMe>
			<Container>
				<Info>
					<Title>
						<TitleElement>Hello</TitleElement>
						I’m Sergey Dunaev
					</Title>
					<TitleMain>
						I've been doing web design, front-end and back-end development for a year now.
						Do you need a website design, site layout, or maybe a turnkey website? Then contact me
					</TitleMain>
					<LinkBlock>
						<Link href="#">Contact me</Link>
					</LinkBlock>

				</Info>
				<MyPhotoBlock>
					<MyPhoto src={myPhoto} />
				</MyPhotoBlock>
				{/* <picture>
					<source srcset={myPhoto} type="image/webp" />
					<source srcset={myPhoto2} type="image/png" />
					<MyPhoto />
				</picture> */}

			</Container>

		</SectionMe>
	)
};

const MyPhotoBlock = styled.div`
	position: relative;
	padding: 0 0 51% 0;
	width: 100%;
	max-width: 630px;

	z-index: 2;
	
	::before {
		content: "";
		position: absolute;
		background-color: rgba(0, 0, 0, 0);
		border: 60px solid ${myTheme.colors.blue};
		border-radius: 50%;
		width: 85%;
		height: 85%;
		right: 10%;
		top: 15%;
		z-index: 0;
		@media (max-width: ${myTheme.size.mobile}) {
			border: 50px solid ${myTheme.colors.blue};
		}

		@media (max-width: ${myTheme.size.mobileSmall}) {
			border: 45px solid ${myTheme.colors.blue};
			width: 80%;
			height: 80%;
		}
		
	}
	
	@media (max-width: ${myTheme.size.mobile}) {
		padding: 0 0 62% 0;
	}
	@media (max-width: ${myTheme.size.mobileSmall}) {
			padding: 0 0 78% 0;
		}

`

const MyPhoto = styled.img`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	right: 0;
	object-fit: contain;
	object-position: center;
	background-image: url(${iconSlash}), url(${iconUx}), url(${iconPs}),url(${iconUi});
	background-repeat: no-repeat;
	background-position:13% 23%, 0% 55%, 9% 90%, 78% 19%;
	

	@media (max-width: ${myTheme.size.mobile}) {
		background-size: 70px, 70px, 70px, 70px;
	}

	@media (max-width: ${myTheme.size.mobileSmall}) {
			background-size: 62px, 62px, 62px, 62px;
		}
`
const SectionMe = styled.section`
	background: ${myTheme.colors.grey.dark};
	padding-top: 130px;

`
const Container = styled.div`
	max-width: ${myTheme.container.containerWidth};
	box-sizing: content-box;
	margin: 0 auto;
	padding: 0 15px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	@media (max-width: ${myTheme.size.tablet}) {
		flex-wrap: wrap;
		justify-content: center;
	}
`;

const Info = styled.div`
	color: ${myTheme.colors.white.light};
	max-width: 450px;
	letter-spacing: 0%;
	display: flex;
	flex-direction: column;
	row-gap: 27px;
	font-family: "NEXT ART";
	display: flex;
	@media (max-width: ${myTheme.size.tablet}) {
			max-width: 600px;
			justify-content: center;
			align-items: center;
			text-align: center;
		}

		@media (max-width: ${myTheme.size.mobile}) {
			max-width: 550px;
			
		}
`;

const Title = styled.h2`
	display: flex;
	flex-direction: column;
	font-size: 72px;
	font-weight: 700;
	line-height: 1.14;
	row-gap: 27px;
	font-size: calc((100vw - 320px) / (1920 - 320) * (72 - 38) + 38px);
`;

const TitleElement = styled.span`
	font-size: 48px;
	font-weight: 600;
	line-height: 1.12;
	text-transform: uppercase;
	font-size: calc((100vw - 320px) / (1920 - 320) * (48 - 32) + 32px);
`

const TitleMain = styled.h1`
	font-size: 18px;
	font-weight: 300;
	line-height: 21px;
	font-family: "ArodoraPro-Light";
	font-size: calc((100vw - 320px) / (1920 - 320) * (18 - 20) + 20px);
`

const LinkBlock = styled.div`
	display: flex;
`

const Link = styled.a`
	font-size: 18px;
	font-weight: 700;
	line-height: 20px;
	color: #000;
	border-radius: 6px;
	box-shadow: 0px 2px 13px 0px rgba(226, 158, 0, 0.48);
	padding: 14px 40px;
	background: ${myTheme.colors.orange};
	display: flex;
	justify-content: center;
	align-items: center;
`
