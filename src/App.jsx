import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Hero from './sections/Hero';
import Nav from './sections/Nav';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
	return (
		<main>
			<Nav />
			<Hero />
		</main>
	);
};

export default App;
