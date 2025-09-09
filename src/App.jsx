import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Hero from './sections/Hero';
import Nav from './sections/Nav';
import FirstVideo from './sections/FirstVideo';
import Jason from './sections/Jason';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
	return (
		<main>
			<Nav />
			<Hero />
			<FirstVideo />
			<Jason />

		</main>
	);
};

export default App;
