import React from "react";
import styled from 'styled-components';
import { myTheme } from "../../styled/Theme.styled";
import myPhoto from '../../assets/images/about-me/Sergey-Dunaev.webp';
import myPhoto2 from '../../assets/images/about-me/Sergey-Dunaev2.webp';
import myPhoto3 from '../../assets/images/about-me/Sergey-Dunaev3.webp';

import { Title } from "../../components/title/title";

export const AboutMe = () => {
	return (
		<StyledAboutMe >
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
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam molestias suscipit optio saepe! Fugiat omnis mollitia ipsam voluptas inventore atque ipsa saepe repellendus veniam at eligendi minus, placeat blanditiis facere!
							Perspiciatis voluptas vero voluptate numquam culpa placeat consectetur neque. Cumque aspernatur natus maiores sapiente corrupti molestiae perspiciatis maxime eligendi libero. Vitae, quasi eos? Quidem, iusto aliquam autem similique maiores fuga.
							Quod aliquid eveniet itaque commodi! Autem doloremque eius reiciendis, corrupti, molestias quidem dolor dolorum ipsum ipsam, quod soluta! Ducimus autem nihil temporibus dolor rem cum ipsum suscipit aspernatur facilis in!
							Sed quaerat consequuntur officia nobis. Eius natus ratione nesciunt sequi porro possimus rerum soluta eaque. Veritatis nostrum tempore quam praesentium aliquid non magnam quis, quas possimus cumque nesciunt, reiciendis atque.
							Nam quam beatae accusantium incidunt officiis quis sequi expedita possimus voluptatem officia libero explicabo, laboriosam quaerat architecto. Ratione, labore maxime explicabo magni perspiciatis quis, animi cumque molestiae eaque, voluptatibus quod.
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
	padding: 100px 0;
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
	flex-wrap: wrap;

	@media (max-width: ${myTheme.size.tablet}) {
		flex-direction: column;
	}
	
`;

const PartImages = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex: 0 1 25%;
	
`

const TextBLock = styled.div`
	max-width: 500px;
	color: ${myTheme.colors.white.snow};
	font-size: 20px;
	font-weight: 300;
	line-height: 1.2;
	
	flex: 1 1 50%;

	@media (max-width: ${myTheme.size.mobile}) {
		background-size: 70px, 70px, 70px, 70px;
	}
	
`;
const TextItem = styled.p`
	background-color: ${myTheme.colors.grey.dark};
	padding:60px;
	border-radius: 14px;
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
    flex: 0 0 30%;
    justify-content: center;
	border-radius: 14px;
	
`

const CardAboutMeWrapper = styled.div`
	display: flex;
    justify-content: flex-start;
    align-items: center;
    min-width: 310px;

    padding: 30px;
	@media (max-width: ${myTheme.size.tablet}) {
		width: none;
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
`;

