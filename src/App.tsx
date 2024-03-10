import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/header';
import { Acquaintance } from './layout/sections/acquaintance';
import { Page } from './layout/main/main';
import { Skills } from './layout/sections/skills';
import { AboutMe } from './layout/sections/aboutMe';
import { Portfolio } from './layout/sections/portfolio';


function App() {
	return (
		<Wrapper>
			<Header />
			<Page>
				<Acquaintance />
				<Skills />
				<AboutMe />
				<Portfolio></Portfolio>
			</Page>
		</Wrapper>



	);
}

export default App;

const Wrapper = styled.div`
	min-height: 100%;
	display: flex;
	flex-direction: column;
	overflow: hidden;

	// Фикс для слайдеров
	> * {
		min-width: 0;
	}
`