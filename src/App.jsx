import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Hero from './sections/Hero';
import Nav from './sections/Nav';
import FirstVideo from './sections/FirstVideo';
import Jason from './sections/Jason';
import SecondVideo from './sections/SecondVideo';
import Lucia from './sections/Lucia';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
	return (
		<main>
			<Nav />
			<Hero />
			<FirstVideo />
			<Jason />
			<SecondVideo />
			<Lucia />
		</main>
	);
};

export default App;
