import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const App = () => {
	return (
		<main>
			<div>
				<h1 className='text-emerald-600 text-5xl'>Welcome to GSAP and GTA Animation with React!</h1>
			</div>
		</main>
	);
};

export default App;
