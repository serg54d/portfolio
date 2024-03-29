import React, { MouseEvent, ElementRef, useRef, FormEvent, useState, ChangeEvent, useEffect } from "react";
import emailjs from '@emailjs/browser';
import styled, { css } from 'styled-components';
import { myTheme } from "../../styled/Theme.styled";
import myPhoto from '../../assets/images/acquaintance/Sergey-Dunaev.webp';
import iconSlash from '../../assets/icons-font/slashIcon.svg';
import iconUx from '../../assets/icons-font/uxIcon.svg';
import iconPs from '../../assets/icons-font/psIcon.svg';
import iconUi from '../../assets/icons-font/uiIcon.svg';
import { Font } from '../../styled/Common'
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';
import 'reactjs-popup/dist/index.css';
import { transform } from "@babel/core";
interface RootProps {
	isOpen: boolean;
}


export const Acquaintance = () => {
	const [formIsOpen, setFormIsOpen] = useState(false)
	const onFormBtnClick = () => { setFormIsOpen(!formIsOpen) }
	const onLinkClick = () => { setFormIsOpen(false) }
	const onFormBtnClose = () => { setFormIsOpen(false) }
	//const formRef = useRef<ElementRef<'form'>>(null);
	const [onFormSent, setFormIsSent] = useState(false)
	const [email, setEmail] = useState('')
	const [theme, setTheme] = useState('')
	const [name, setName] = useState('')
	const [emailDirty, setEmailDirty] = useState(false)
	const [themeDirty, setThemeDirty] = useState(false)
	const [nameDirty, setNameDirty] = useState(false)
	const [messageDirty, setMessageDirty] = useState(false)
	const [emailError, setEmailError] = useState('Емейл не может быть пустым')
	const [themeError, setThemeError] = useState('Тема обращения не может быть пустой')
	const [nameError, setNameError] = useState('Имя не может быть пустым')
	const [messageError, setMessageError] = useState('Поле сообщения не может быть пустым')
	const [form, setForm] = useState<{ name: string, email: string, theme: string, message: string }>({ name: '', email: '', theme: '', message: '' })
	const [formValid, setFormValid] = useState(false)

	const blurHandler = (e: any) => {
		switch (e.target.name) {
			case 'email':
				setEmailDirty(true)
				break
			case 'theme':
				setThemeDirty(true)
				break
			case 'name':
				setNameDirty(true)
				break
			case 'message':
				setMessageDirty(true)
				break
		}
	}

	const emailHandler = (emailValue: any) => {
		const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		if (!re.test(String(emailValue).toLowerCase())) {
			setEmailError('Некорректный емейл')
		}

		else if (!emailValue) {
			setEmailError('Емейл не может быть пустым')
		}

		else {
			setEmailError('')
		}
	}

	const themeHandler = (themeValue: any) => {
		if (themeValue.length < 5 || themeValue.length > 60) {
			setThemeError('Слишком короткая или длинная тема')
		}
		else if (!themeValue) {
			setThemeError('Тема не может быть пустой')
		}
		else {
			setThemeError('')
		}
	}

	const nameHandler = (nameValue: any) => {
		if (!nameValue) {
			setNameError('Поле "имя" не может быть пустым')
		}
		else {
			setNameError('')
		}
	}

	const messageHandler = (messageValue: any) => {
		if (!messageValue) {
			setMessageError('Поле сообщения не может быть пустым')
		}
		else {
			setMessageError('')
		}
	}

	function handleChange(event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
		const { value, name } = event.target  // const value = event.target.value

		if (name === 'name') {
			nameHandler(value)
		} else if (name === 'email') {
			emailHandler(value);
		} else if (name === 'message') {
			messageHandler(value)
		} else if (name === 'theme') {
			themeHandler(value);
		}


		console.log(value, name)
		setForm(prevState => {
			return {
				...prevState,
				[name]: value
			}
		})
	}
	const sendEmail = () => {
		console.log('form is sending...')
		const { name, email, theme, message } = form;
		if (!name || !email || !theme) {
			console.log('there is error')
			if (emailError || themeError || nameError) {
				setFormValid(false)
			} else {
				setFormValid(true)
			}
			return
		}


		emailjs
			.send('service_7i249jd', 'template_qc16uwy', form, {
				publicKey: '8UtJZk-R4OJuUCItH',
			})
			.then(
				() => {
					setFormIsSent(true)
					setForm({ name: '', email: '', theme: '', message: '' })
				},
				(error) => {
					console.log('FAILED...', error.text);
				},
			);

	};
	const onFormBtnSent = (e: FormEvent<HTMLFormElement>) => {
		console.log('form is submitting...')

		e.preventDefault();
		sendEmail();
	}

	console.log(onFormSent)
	return (
		<SectionMe id="home" >
			<Container isOpen={formIsOpen}>
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
					<LinkBlock >
						<Link isOpen={formIsOpen} onClick={onFormBtnClick}>Contact me</Link>
					</LinkBlock>

				</Info>
				<Tilt style={{ width: '100%', maxWidth: '630px' }}>
					<MyPhotoBlock >
						<MyPhoto src={myPhoto} />
					</MyPhotoBlock>
				</Tilt>
				<StyledForm onSubmit={onFormBtnSent} isOpen={formIsOpen}>
					<TitleForm>
						Write me
						<CloseForm type="button" onClick={onFormBtnClose}>
							<span></span>
						</CloseForm>
					</TitleForm>

					<About>
						<BlockInput >
							{(nameDirty && nameError) && <div>{nameError}</div>}
							<StyledInput onChange={e => handleChange(e)} onBlur={e => blurHandler(e)} value={form.name} placeholder="Name" name={'name'} type="text" />
						</BlockInput>
						<BlockInput >
							{(emailDirty && emailError) && <div>{emailError}</div>}
							{/* {onChange = { handleChange } } */}
							<StyledInput onChange={e => handleChange(e)} onBlur={e => blurHandler(e)} value={form.email} placeholder="email" name={'email'} type="email" />
						</BlockInput>
						<BlockInput>
							{(themeDirty && themeError) && <div>{themeError}</div>}
							{/* value={form.theme} */}
							{/* onChange={handleChange} */}
							{/* value={form.theme} */}
							<StyledInput onChange={e => handleChange(e)} onBlur={e => blurHandler(e)} value={form.theme} placeholder="Theme" name={'theme'} type="text" />
						</BlockInput>

					</About>
					<TextBlock>
						{(messageDirty && messageError) && <div>{messageError}</div>}
						<Text onChange={e => handleChange(e)} onBlur={e => blurHandler(e)} value={form.message} placeholder="Tell us about your puppers include his/her name" name={'message'} />
					</TextBlock>
					<BtnBlock>
						<BtnSubmit disabled={formValid} type="submit" isSent={onFormSent} />
					</BtnBlock>
					{onFormSent && <FormSuccessfully isSent={onFormSent} >{onFormSent ? 'Успешно отправлено' : 'Заполните поля'}</FormSuccessfully>}
					{!onFormSent && <FormNotSuccessfully isSent={!onFormSent} >{onFormSent ? 'Заполните поля' : 'Заполните поля'}</FormNotSuccessfully>}
				</StyledForm>
			</Container>
		</SectionMe >
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
	
	@media (max-width: ${myTheme.size.tablet}) {
		padding: 0 0 70% 0;
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
const Container = styled.div <{ isOpen: boolean }>`
position: relative;
	max-width: ${myTheme.container.containerWidth};
	
	box-sizing: content-box;
	margin: 0 auto;
	padding: 0 15px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 10px;
	${props => props.isOpen && css<{ isOpen: boolean }>`
	z-index: 10; 	
	position: relative;
	>*:not(form) {
		opacity: 0.3;
	}

	`}
	@media (max-width: ${myTheme.size.tablet}) {
		flex-wrap: wrap;
		justify-content: center;
	}
	@media (max-width: ${myTheme.size.mobileSmall}) {
		padding: 60px 0px !important;
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
			${Font({ family: "'NEXT ART'", weight: 700, lineHeight: "1.14", Fmax: 72, Fmin: 36 })}
			
		}
	@media (max-width: ${myTheme.size.tablet}) {
			${Font({ family: "'NEXT ART'", weight: 700, lineHeight: "1.14", Fmax: 50, Fmin: 36 })}
			/* row-gap: 20px; */
		}	
`;

const TitleElement = styled.span`
	font-size: 48px;
	font-weight: 600;
	line-height: 1.12;
	text-transform: uppercase;
	${Font({ family: "'NEXT ART'", weight: 600, lineHeight: "1.12" })}
	@media (max-width: ${myTheme.size.pc}) {
			${Font({ family: "'NEXT ART'", weight: 600, lineHeight: "1.12", Fmax: 48, Fmin: 30 })}
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

const Link = styled.button <{ isOpen: boolean }>`
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



const StyledForm = styled.form < { isOpen: boolean }>`
	position: absolute;
	overflow: auto;
	width: 100%;
	/* height: 100%; */
	left: 50%;
	bottom: 50%;
	transform: translate(-50%, 50%) scale(0);
	transition: 0.5s;
	z-index: 100;
	max-width: 500px;
	padding: 40px;
	background-color: #5d62b5;
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: ${myTheme.colors.grey.light};
	overflow: hidden;
	gap: 20px;

	${props => props.isOpen && css<{ isOpen: boolean }>`
		transform: translate(-50%, 50%) scale(1);
	`}

	@media (max-width: ${myTheme.size.mobile}) { 
		padding: 25px;
			width: 95%;
		}
`
const CloseForm = styled.button`
	display: block;
	position: absolute;
	left: 88%;
	top: 5%;
	
	width: 40px;
	height: 22.5px;
	background-color: inherit;
	cursor: pointer;
	z-index: 150;
	transform: rotate(45deg);
@media (max-width: ${myTheme.size.mobile}) { 
	left: 86%;
	top: 3%;
		}
	span,
		&::after {
			content: "";
			transition: all 0.3s ease 0s;
			left: 0px;
			position: absolute;
			width: 100%;
			height: 2px;
			background-color: #fff;
		}

			&::after {
			bottom: 0px;
			transform: rotate(90deg);
		bottom: calc(50% - 1px);
		
		}
`

const TitleForm = styled.h3`
	color: #fff;
	text-align: center;
	font-size: 36px;
	font-weight: 900;
	line-height: 1.17;
	/* margin-bottom: 43px; */
	display: flex;
	justify-content: center;
`
const About = styled.div`
	display: flex;
	flex-wrap: wrap;
	row-gap: 22px;
	/* margin: 0 -11px 22px -11px; */
	justify-content: space-between;
	overflow: hidden;
	width: 100%;
	justify-content: center;
`
const BlockInput = styled.div`
	display: flex;
	flex-direction: column;

	flex: 0 0 99%;
`
const StyledInput = styled.input`
	outline: none;
	border: 2px solid #ffffff;
	border-radius: 10px;
	padding: 10px 20px;
	flex: 1 1 auto;
	
	color: #ffffff;
	transition: all 0.3s ease 0s;
	background-color: ${myTheme.colors.grey.light};
	:focus {
	
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
	flex-direction: column;
`

const Text = styled.textarea`
	flex: 0 0 99%;
	outline: none;
	border: 2px solid #ffffff;
	border-radius: 10px;
	padding: 10px 20px;
	flex: 1 1 auto;
	background-color: ${myTheme.colors.grey.light};
	color: #ffffff;
	transition: all 0.3s ease 0s;
	min-height: 140px;
	:focus {
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

const BtnBlock = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
`

const BtnSubmit = styled.input <{ isSent: boolean }>`
	display: flex;
	max-width: 200px;
	padding: 10px 20px;
	border-radius: 10px;
	text-align: center;
	color: ${myTheme.colors.white.snow};
	background-color: rgb(0, 120, 240);
	${Font({ family: "'NEXT ART'", weight: 700, lineHeight: "1.14" })}
	font-size: 16px;
	transition: 0.3s;

	:hover {
		color: rgb(0, 120, 240);
		background-color: ${myTheme.colors.white.snow};
	}

	/* :disabled {
		cursor: not-allowed;
		:hover {
			color: ${myTheme.colors.white.snow};
			background-color: rgb(0, 120, 240);
		}
	} */


`


const FormSuccessfully = styled.p <{ isSent: boolean }>`
	text-align: center;
	color: ${(props) => props.isSent ? '#2be84e' : '#ff0000'};

`

const FormNotSuccessfully = styled.p <{ isSent: boolean }>`
	text-align: center;
	color: ${(props) => props.isSent ? '#ff0000' : '#2be84e'};
`

