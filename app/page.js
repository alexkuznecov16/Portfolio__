'use client';
import Link from 'next/link';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import './main.css';
import Image from 'next/image';
import {SiThealgorithms} from 'react-icons/si';
import {FaEye, FaServer} from 'react-icons/fa';
import Socials from './Components/Socials/Socials';
import introImg from '/public/city.jpg';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import {useEffect} from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
	useEffect(() => {
		Aos.init({
			duration: 800,
			once: false,
		});
	}, []);
	return (
		<>
			<Header />
			<div className='intro' style={{backgroundImage: `url(${introImg.src})`}}>
				<div className='container'>
					<div className='intro__inner'>
						<span>I am</span>
						<h1 className='intro-title'>Alexander Kuznecov</h1>
						<p>Frontend, Backend developer</p>
						<div className='btn-block'>
							{/* <Link href='https://github.com/alexkuznecov16'>Github</Link> */}
							<Link download='AlexanderKuznecovResume.pdf' href='/AlexanderKuznecovResume.pdf'>
								Resume
							</Link>
						</div>
					</div>
				</div>
				<div className='mouse'></div>
			</div>
			<Skills />
			<main className='Main'>
				<div className='container'>
					<div className='Main__inner'>
						<Projects  count={3} />
						<div data-aos='fade-up' className='about'>
							<h4 className='title'>Profile</h4>
							<div className='about__inner'>
								<p className='text'>
									Hello! My name is Alex, am a passionate Web developer. My skills journey began in 2020. It was the year I was introduced to technologies like Python, Unity, Unreal Engine, HTML CSS. Each of these technologies had strengths in specific areas, but HTML and CSS stood out to me as the most compelling. Since then, I have been diving deeper intro web development.
								</p>
								<Image src='/my-image.jpg' width={400} height={450} alt='my-image' />
							</div>
							<Link className='more' href='/profile'>
								Full profile
							</Link>
						</div>
						<div data-aos='fade-up' className='contacts'>
							<h4 className='title'>Get in Touch</h4>
							<div className='contacts__inner'>
								<Socials />
							</div>
							<Link className='more' href='/contacts'>
								Full contacts
							</Link>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
