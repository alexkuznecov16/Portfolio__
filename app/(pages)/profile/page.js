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
			<main data-aos='fade-up' className='Profile'>
				<div className='Profile__container'>
					<h4 className='title'>Profile</h4>
					<div className='Profile__inner'>
						<div className='Profile__content'>
							<p className='Profile__text'>
								Hi, my name is Alex and I&apos;m a passionate web developer with experience in both frontend and backend. My journey started in 2020 when I discovered programming through Python, Unity and Unreal Engine technologies. But what fascinated me the most was web development because of the ability to immediately see the results of my labor in HTML and CSS.
								<br />
								<br />
								Today, I build high-quality web applications using technologies such as React, Next.js and Vue.js for the frontend, and Node.js and Django for server-side development. I am equally interested in working with interfaces and designing robust server-side solutions with MySQL databases.
								<br />
								<br />
								My goal is to develop quality products that solve real user problems. I strive for professional growth and am always open to new knowledge and teamwork. My projects demonstrate my ability to create user-friendly interfaces, manage data and solve complex problems.
								<br />
								<br />
								If you are looking for a developer who is willing to dive into details and develop thoughtful solutions, I would love to be a part of your team.
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
