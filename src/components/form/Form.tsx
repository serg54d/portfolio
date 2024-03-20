import React from "react";
import styled from 'styled-components';
import { myTheme } from "../../styled/Theme.styled";
import 'reactjs-popup/dist/index.css';


export const Form = () => {

	return (
		<StyledForm>
			<Title>Lorem ipsum dolor</Title>
			<About>
				<BlockInput>
					<StyledInput placeholder="Name" type="text" name="name" value="" />
				</BlockInput>
				<BlockInput>
					<StyledInput placeholder="Email" type="email" name="email" value="" />
				</BlockInput>
				<BlockInput>
					<StyledInput placeholder="Phone Number" type="tel" name="phone" value="" />
				</BlockInput>
			</About>
			<TextBlock>
				<Text placeholder="Tell us about your puppers include his/her name" name="text" />
			</TextBlock>
		</StyledForm>
	)
};


const StyledForm = styled.form`
	max-width: 585px;
	width: 600px;
	padding: 76px 57px;
	background-color: #5d62b5;
	border-radius: 40px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	
`
const Title = styled.h3`
	color: #fff;
	text-align: center;
	font-size: 36px;
	font-weight: 900;
	line-height: 1.17;
	margin-bottom: 43px;
`
const About = styled.div`
	display: flex;
	flex-wrap: wrap;
	row-gap: 22px;
	margin: 0 -11px 22px -11px;
	justify-content: space-between;
`
const BlockInput = styled.div`
	display: flex;
	padding: 0 11px;
	flex: 0 0 50%;
`
const StyledInput = styled.input`
	outline: none;
	border: 2px solid #ffffff;
	border-radius: 10px;
	padding: 10px 20px;
	flex: 1 1 auto;
	background: #5d62b5;
	color: #ffffff;
	transition: all 0.3s ease 0s;

	:focus {
		box-shadow: 0px 5px 10px #020657;
		transform: scale(1.01);
	}

	::placeholder {
		color: #ffffff82;
		font-size: 16px;
		font-weight: 400;
		line-height: 1.5;
		letter-spacing: 0.15px;
	}
`
const TextBlock = styled.div`
	display: flex;
`

const Text = styled.textarea`
	flex: 0 0 100%;
	outline: none;
	border: 2px solid #ffffff;
	border-radius: 10px;
	padding: 10px 20px;
	flex: 1 1 auto;
	background: #5d62b5;
	color: #ffffff;
	transition: all 0.3s ease 0s;
	min-height: 180px;
	margin-bottom: 30px;
	:focus {
		box-shadow: 0px 5px 10px #020657;
		transform: scale(1.01);
	}
	::placeholder {
		color: #ffffff82;
	font-size: 16px;
	font-weight: 400;
	line-height: 1.5;
	letter-spacing: 0.15px;
	}
`
