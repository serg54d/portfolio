import React from "react";
import styled from 'styled-components';
import { myTheme } from "../../styled/Theme.styled";
import myPhoto from '../../assets/images/acquaintance/Sergey-Dunaev.webp';
import myPhoto2 from '../../assets/images/acquaintance/Sergey-Dunaev.png';

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
	max-width: 465px;
`

const MyPhoto = styled.img`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	object-fit: cover;
	object-position: center;
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
`;

const Info = styled.div`
	color: ${myTheme.colors.white.light};
	max-width: 450px;
	letter-spacing: 0%;
	display: flex;
	flex-direction: column;
	row-gap: 27px;
`;

const Title = styled.h2`
	display: flex;
	flex-direction: column;
	font-size: 72px;
	font-weight: 700;
	line-height: 82px;
	row-gap: 27px;
`;

const TitleElement = styled.span`
	font-size: 48px;
	font-weight: 600;
	line-height: 54px;
	text-transform: uppercase;
`

const TitleMain = styled.h1`
	font-size: 18px;
	font-weight: 300;
	line-height: 21px;
	
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
