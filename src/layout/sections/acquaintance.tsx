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
import { Font } from '../../styled/Common'
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

export const Acquaintance = () => {
	return (
		<SectionMe id="home">
			<Container>
				<Info>
					<Title>
						<TitleElement>Hello</TitleElement>
						I’m Sergey Dunaev
					</Title>

					<TitleMain>
						<p>A web developer", "A Frontend developer", "A web designer</p>
						<Typewriter
							options={{
								strings: ["A web developer", "A Frontend developer", "A web designer"],
								autoStart: true,
								loop: true,
								delay: 100,
							}}
						/>

					</TitleMain>


					<LinkBlock>
						<Link href="#">Contact me</Link>
					</LinkBlock>

				</Info>
				<Tilt style={{ width: '100%', maxWidth: '630px' }}>
					<MyPhotoBlock>
						<MyPhoto src={myPhoto} />
					</MyPhotoBlock>
				</Tilt>
				{/* <Tilt>
					<MyPhoto src={myPhoto} />
				</Tilt> */}
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
	padding: 0 0 100% 0;
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
	gap: 10px;
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
	
	row-gap: 27px;
	${Font({ family: "'NEXT ART'", weight: 700, lineHeight: "1.14" })}
	font-size: 72px;
	@media (max-width: ${myTheme.size.pc}) {
			${Font({ family: "'NEXT ART'", weight: 700, lineHeight: "1.14", Fmax: 72, Fmin: 42 })}
		}
`;

const TitleElement = styled.span`
	font-size: 48px;
	font-weight: 600;
	line-height: 1.12;
	text-transform: uppercase;
	${Font({ family: "'NEXT ART'", weight: 600, lineHeight: "1.12" })}
	@media (max-width: ${myTheme.size.pc}) {
			${Font({ family: "'NEXT ART'", weight: 600, lineHeight: "1.12", Fmax: 48, Fmin: 36 })}
		}
`

const TitleMain = styled.h1`
	font-size: 24px;
	font-weight: 300;
	${Font({ lineHeight: "1.3" })}
	@media (max-width: ${myTheme.size.pc}) {
			${Font({ lineHeight: "1.3", Fmax: 24, Fmin: 22 })}
		}
	
	p {
		display: none;
	}
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
	/* box-shadow: 0px 2px 13px 0px rgba(226, 158, 0, 0.48); */
	padding: 14px 40px;
	/* background: ${myTheme.colors.orange}; */
	display: flex;
	justify-content: center;
	align-items: center;
	--color: #000;
    --hover: rgb(226, 158, 0);
	transition: 0.3s ease-in;
	box-shadow: inset 0 0 0 2em var(--hover);
	:hover,
    :focus {
      box-shadow: inset 0 0 0 5px var(--hover);
	  color: var(--hover);	
	  transform: scale(1.05);
}

`
