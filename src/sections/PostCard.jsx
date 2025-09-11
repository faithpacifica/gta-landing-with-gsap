import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

const PostCard = () => {
	const videoRef = useRef(null);

	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.post-card',
				start: 'top center',
				end: 'bottom center',
				scrub: true,
			},
		});

		videoRef.current.onloadedmetadata = () => {
			tl.to(
				videoRef.current,
				{
					currentTime: videoRef.current.duration,
					duration: 3,
					ease: 'power1.inOut',
				},
				'<'
			);
		};
	});

	return (
		<section className="post-card">
			<div className="animated-gradient-bg" />

      <div className="min-h-[400px] post-card-wrapper group hover:rotate-1 hover:-[1.02] transition duration-700">
				<img src="/images/overlay.webp" className="" />

				<video
					ref={videoRef}
					className=""
					src="/videos/postcard-vd.mp4"
					preload="auto"
					muted
					playsInline
					autoPlay
				/>

				<button className="group-hover:bg-yellow transition duration-700">
					{' '}
					Explore Leonida Keys
				</button>
			</div>
		</section>
	);
};

export default PostCard;
