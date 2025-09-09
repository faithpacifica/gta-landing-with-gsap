import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const FirstVideo = () => {
  // The `useRef` hook is used primarily to store a mutable object which does not cause re-renders when changed. This makes it suitable for storing references to DOM elements, like video elements in this context.
	const videoRef = useRef(null); // Create a ref for the video element

	useGSAP(() => {
		gsap.set('first-vd-wrapper', { marginTop: '-150vh', opacity: 0 }); //hide the video section initially

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.first-vd-wrapper', //which section to trigger the animation
				start: 'top top',
				end: '+=200% top', // when the animation should end 2 ta sectionni oladi
				scrub: true, //smoothy delay
				pin: true,
			},
		})

		tl.to('.hero-section', { delay: 0.5, opacity: 0, ease: 'power1.inOut' });
		tl.to('.first-vd-wrapper', {
			duration: 2,
			opacity: 1,
			ease: 'power1.inOut',
		});

		videoRef.current.onloadedmetadata = () => {
			tl.to(
				videoRef.current,
				{
					currentTime: videoRef.current.duration,
					ease: 'power1.inOut',
					duration: 3,
				},
				'<'
			); // '<' means start at the same time as previous animation
		};
	}, []);

	return (
		<section className="first-vd-wrapper">
			<div className="h-dvh">
				<video
					ref={videoRef}
					muted
					playsInline
					preload="auto "
					src="/videos/output1.mp4"
					className="first-vd"
				/>
			</div>
		</section>
	);
};

export default FirstVideo;
