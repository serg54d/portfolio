import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/header';
import { Acquaintance } from './layout/sections/Acquaintance';
import { Page } from './layout/main/main';
import { Skills } from './layout/sections/Skills';
import { AboutMe } from './layout/sections/AboutMe';
import { Portfolio } from './layout/sections/Portfolio';
import { Footer } from './layout/footer/Footer';
import { Particle } from './components/particle/Particle';

function App() {
	return (
		<Wrapper>
			<Particle />
			<Header />
			<Page>
				<Acquaintance />
				<Skills />
				<AboutMe />
				<Portfolio></Portfolio>
			</Page>
			<Footer />
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