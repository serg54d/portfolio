import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styled from 'styled-components';
import { myTheme } from "../../styled/Theme.styled";
import photoProject from '../../assets/images/portfolio/portfolio.webp';
import arrowMini from '../../assets/icons-font/arrowMini.svg'

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
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim purus, tempor sed massa vel, accumsan bibendum magna. Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel.'
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

const StyledSlider = styled.div`
	display: flex;
	justify-content: center;
	background-color: ${myTheme.colors.grey.light};
	
	border-radius: 29px;
	box-shadow: 0px 4px 15px 0px rgba(27, 27, 27, 0.28);
	width: 85%;
	max-width: 970px;
`

const SliderBlock = styled.div`
	padding: 50px;
	width: 100%;
	
`
const StyledSlide = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	gap: 10px;
	
`
const ImageBlock = styled.div`
	position: relative;
	padding: 0 0 57% 0;
	width: 100%;
	max-width: 495px;

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
const Comment = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 25px;
	align-items: center;
	text-align: center;
	color: ${myTheme.colors.white.snow};
	width: 100%;
	max-width: 296px;
	
`

const TitleComment = styled.h3`
	color: ${myTheme.colors.white.snow};
	font-size: 24px;
	line-height: 1.25;
	letter-spacing: 0%;

`

const Text = styled.p`
	
`

const Link = styled.a`
	color: rgb(226, 161, 0);
	font-weight: 300;
	font-size: 18px;
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






