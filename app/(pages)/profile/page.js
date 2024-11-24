import React from 'react';
import Image from 'next/image';
import '../../main.css';
import Footer from '@/app/Components/Footer/Footer';
import Header from '@/app/Components/Header/Header';
import './Profile.css';

export default function page() {
	return (
		<>
			<Header />
			<main className='Profile'>
				<div className='Profile__container'>
					<h4 className='title'>Profile</h4>
					<div className='Profile__inner'>
						<div className='Profile__content'>
							<p className='Profile__text'>
								Hello! My name is Alex, and I am a passionate Web developer. My skills journey began in 2020. It was the year I was introduced to technologies like Python, Unity, Unreal Engine, HTML, and CSS.
								<br />
								<br />
								Each of these technologies had strengths in specific areas, but HTML and CSS stood out to me as the most compelling. Since then, I have been diving deeper into web development, exploring frameworks like React, Next.js, and Vue.js, as well as backend solutions like Django and Node.js.
							</p>
						</div>
						<div className='Profile__image'>
							<Image src='/my-image.jpg' width={400} height={450} alt='Picture of Alex' style={{borderRadius: '8px'}} />
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
