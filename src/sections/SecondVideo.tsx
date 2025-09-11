import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const SecondVideo = () => {
	const videoRef = useRef<HTMLVideoElement>(null);

	useGSAP(() => {
		gsap.set('.lucia', { marginTop: ' -60px', opacity: 0 });

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.lucia',
				start: 'top top',
				end: 'bottom top',//when the bottom of lucia section reaches the top of the viewport
				scrub: 2,
				pin: true,
			},
		});

		tl.to('.lucia', { opacity: 1, duration: 1, ease: 'power1.inOut' });

		if (videoRef.current) {
			videoRef.current.onloadedmetadata = () => {
				tl.to(
					videoRef.current,
					{
						currentTime: videoRef.current!.duration,
						duration: 3,
						ease: 'power1.inOut',
					},
					'<'
				);
			};
		}
	}, []);

	return (
		<section className="lucia">
			<div className="h-dvh">
				<video
					ref={videoRef}
					className="size-full object-cover second-vd"
					src="/videos/output2.mp4"
					preload="auto"
					muted
					playsInline
					style={{ objectPosition: '15% 0' }}
				/>
			</div>
		</section>
	);
};

export default SecondVideo;
