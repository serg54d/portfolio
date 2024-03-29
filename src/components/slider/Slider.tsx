import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styled from 'styled-components';
import { myTheme } from "../../styled/Theme.styled";
import photoProject from '../../assets/images/portfolio/portfolio.webp';
import arrowMini from '../../assets/icons-font/arrowMini.svg'
import { Font } from '../../styled/Common'

import '../../styled/slider.css'
import { Icon } from '../icon/Icon';

type SlidePropsType = {
	text: string
	title: string
	linkSlide?: string
	imageSlide: string
}

const Slide = (props: SlidePropsType) => {
	return (
		<StyledSlide>
			<ImageBlock>
				<img src={props.imageSlide} alt="Проект planetka" />
				<LinkProject href={props.linkSlide}>view project</LinkProject>
			</ImageBlock>
			<Comment>
				<TitleComment>{props.title}</TitleComment>
				<Text>
					{props.text}
				</Text>
				<Link href={props.linkSlide}>More</Link>
			</Comment>
		</StyledSlide>
	)
}

const items = [
	<Slide text={
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec magna lacus. Etiam euismod egestas mauris nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim purus, tempor sed massa vel, accumsan bibendum magna. Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel.'
	}
		title={'Landing Ice-cream'}
		imageSlide={photoProject}
		linkSlide={'#'}
	/>,
	<Slide text={
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. '
	}
		title={'Landing Ice-cream 2'}
		imageSlide={photoProject}
		linkSlide={'#'}
	/>,
]

export const Slider = () => (
	<StyledSlider>
		<SliderBlock>
			<AliceCarousel
				mouseTracking
				disableDotsControls
				autoHeight


				renderPrevButton={() => {
					return (
						<Icon iconId='arrowPrev' iconViewBox='0 0 26 24' iconWidth='26' iconHeight='24' />
					)
				}}
				renderNextButton={() => {
					return (
						<Icon iconId='arrowNext' iconViewBox='0 0 26 24' iconWidth='26' iconHeight='24' />
					)
				}}
				items={items}
			/>
		</SliderBlock>
	</StyledSlider>
);

const BtnBlock = styled.div``

const StyledSlider = styled.div`
	display: flex;
	justify-content: center;
	background-color: ${myTheme.colors.grey.light};
	
	border-radius: 29px;
	box-shadow: 0px 4px 15px 0px rgba(27, 27, 27, 0.28);
	width: 85%;
	
	max-width: 970px;
	@media (max-width: ${myTheme.size.tablet}) {
		width: 95%;
	}
	@media (max-width: ${myTheme.size.mobileSmall}) {
		width: 100%;
	}
`

const SliderBlock = styled.div`
	padding: 50px;
	width: 99%;
	@media (max-width: ${myTheme.size.tablet}) {
	padding: 40px;
	}
	@media (max-width: ${myTheme.size.mobile}) {
	padding: 30px;
	}
`
const StyledSlide = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	gap: 15px;

	@media (max-width: ${myTheme.size.mobile}) {
		flex-wrap: wrap;
		justify-content: center;
		gap: 40px;
	}

`
const ImageBlock = styled.div`
	position: relative;
	padding: 0 0 57% 0;
	width: 100%;
	max-width: 495px;
	cursor: pointer;
	
	@media (max-width: ${myTheme.size.mobile}) {
		padding: 0 0 63% 0;
	}
	@media (max-width: ${myTheme.size.mobileSmall}) {
		padding: 0 0 80% 0;
	}


	&::before {
		content:'';
		width: 100%;
		height: 100%;
		position: absolute;
		top:0;
		left: 0;
		backdrop-filter: blur(2px);
		background: rgba(0, 0, 0, 0.3);
		z-index: 1;
		transform: scale(0);
		transition: 0.3s;
		transform-origin: top left;
		@media (max-width: ${myTheme.size.tablet}) {
			transform: scale(1);
		}
	}

	a {
		@media (max-width: ${myTheme.size.tablet}) {
			transform: translate(-50%, -50%) scale(1);
		}
	}

	:hover {
		::before{
			transform: scale(1);
			
			
		}
	:hover a {
		transform: translate(-50%, -50%) scale(1);
		
	}
	
	

	}

	img {
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		right: 0;
		object-fit: fill;
		object-position: center;
	}


`

const LinkProject = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding: 10px 30px;
	max-width: 180px;
	background-color: #7572d5;
	color: ${myTheme.colors.white.snow};
	z-index: 5;
	position: absolute;
	top: 50%;
	left: 50%;
	transition: 0.3s;
	transform: translate(-50%, -50%) scale(0);
	text-transform: uppercase;
`

const Comment = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 25px;
	align-items: center;
	text-align: center;
	color: ${myTheme.colors.white.snow};
	width: 100%;
	max-width: 296px;
	font-size: 18px;
	@media (max-width: ${myTheme.size.mobile}) {
		max-width: 100%;
		row-gap: 30px;
	}
`

const TitleComment = styled.h3`
	color: ${myTheme.colors.white.snow};
	font-size: 24px;
	letter-spacing: 0%;
		${Font({ lineHeight: '1.25', })};	
	@media (max-width: ${myTheme.size.pc}) {
		
		${Font({ Fmax: 24, Fmin: 26 })};
		
	}

`

const Text = styled.p`
	color: ${myTheme.colors.white.snow};
	

	letter-spacing: 0%;
	${Font({ lineHeight: '1.3' })};	
	@media (max-width: ${myTheme.size.pc}) {
		
		${Font({ lineHeight: '1.3', Fmax: 18, Fmin: 20 })};
		
	}
`

const Link = styled.a`
	color: rgb(226, 161, 0);
	font-weight: 300;
	
	line-height: 1.16;
	letter-spacing: 0%;
	position: relative;
	
	::after {
		content: '';
		background: url(${arrowMini}) 0 0 no-repeat;
		position: absolute;
		width: 100%;
		height: 100%;
		top: 20%;
		margin-left: 7px;
	}
`






