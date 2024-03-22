import React from "react";
import styled from 'styled-components';
import { myTheme } from "../../styled/Theme.styled";
import myPhoto from '../../assets/images/about-me/Sergey-Dunaev.webp';
import myPhoto2 from '../../assets/images/about-me/Sergey-Dunaev2.webp';
import myPhoto3 from '../../assets/images/about-me/Sergey-Dunaev3.webp';
import { Font } from '../../styled/Common'
import { Title } from "../../components/title/title";

export const AboutMe = () => {
	return (
		<StyledAboutMe id="aboutMe" >
			<Container>
				<Title title={"About me"} />
				<Block>
					<PartImages>
						<CardAboutMe>
							<CardAboutMeWrapper>
								<ImageBlock>
									<img src={myPhoto} alt="SergeyDunaev" />
								</ImageBlock>
							</CardAboutMeWrapper>

						</CardAboutMe>
						<CardAboutMe>
							<CardAboutMeWrapper>
								<ImageBlock>
									<img src={myPhoto3} alt="SergeyDunaev2" />
								</ImageBlock>
							</CardAboutMeWrapper>
						</CardAboutMe>

					</PartImages>
					<TextBLock>
						<TextItem>
							Greetings to all! My name is Sergey, I'm 21 years old. I work as an IT specialist and develop web applications.
							Since childhood I have been interested in creativity. I live in Voronezh, Russia.
							For me, programming is a profession of the future that will help me fulfill my dream of traveling. I do web design,
							front-end and back-end development, as well as turnkey website creation. Why should you choose me for your project?
							Each project I handle is approached with the utmost care and attention to detail.

						</TextItem>
					</TextBLock>
					<PartImage>
						<CardAboutMe>
							<CardAboutMeWrapper>
								<ImageBlock>
									<img src={myPhoto2} alt="SergeyDunaev" />
								</ImageBlock>
							</CardAboutMeWrapper>

						</CardAboutMe>
					</PartImage>
				</Block>
			</Container>
		</StyledAboutMe>
	)
};



const StyledAboutMe = styled.section`
	background-color: ${myTheme.colors.grey.light};
	/* padding: 100px 0; */
	position: relative;
`;

const Container = styled.div`
	max-width: ${myTheme.container.containerWidth};
	box-sizing: content-box;
	margin: 0 auto;
	padding: 0 15px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	row-gap: 50px;
	
`;

const Block = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	/* flex-wrap: wrap; */
	gap: 10px;
	@media (max-width: ${myTheme.size.tablet}) {
		flex-direction: column;
		align-items: center;
	}
	
`;

const PartImages = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex: 0 1 25%;
	width: 100%;
	flex-wrap: wrap;
	gap: 50px;
	@media (max-width: ${myTheme.size.tablet}) {
		flex-direction: row;
justify-content: center;
gap: 10px;
	}
`

const TextBLock = styled.div`
	display: flex;
	color: ${myTheme.colors.white.snow};
	font-size: 20px;

	flex: 1 1 50%;	



	@media (max-width: ${myTheme.size.tablet}) {
		width: 80%;
	}
	@media (max-width: ${myTheme.size.mobile}) {
			max-width: 550px;
			width: 100%;
	}
	
`;
const TextItem = styled.p`
	background-color: ${myTheme.colors.grey.dark};
	padding:60px;
	border-radius: 14px;
	${Font({ lineHeight: "1.4" })};
	@media (max-width: ${myTheme.size.pc}) {
		padding: 40px;
		${Font({ lineHeight: "1.4", Fmax: 20, Fmin: 24 })};
		
	}
`

const PartImage = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	
	flex: 0 1 25%;
	
`
const CardAboutMe = styled.div`
	background-color: ${myTheme.colors.grey.dark};
    display: flex;
    flex: 0 1 40%;
    justify-content: center;
	border-radius: 14px;
	max-width: 440px;
	@media (max-width: ${myTheme.size.mobile}) {
		flex: 0 1 100%;
	}
`

const CardAboutMeWrapper = styled.div`
	display: flex;
    justify-content: flex-start;
    align-items: center;
    min-width: 300px;
	width: 100%;
    padding: 30px;
	@media (max-width: ${myTheme.size.tablet}) {
		/* min-width: 0px; */
	}
`



const ImageBlock = styled.div`
	    position: relative;
		padding: 0 0 125% 0;
		width: 100%;
		max-width: 630px;
		z-index: 2;
		display: flex;
		outline: 6px solid #686868;
		background-color: #fff;

		img {
			position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		object-fit: cover;
		object-position: center;
		
		}

	@media (max-width: ${myTheme.size.tablet}) {
		padding: 0 0 80% 0;
	}
`;

