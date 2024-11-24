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

export default function Home() {
	return (
		<>
			<Header />
			<div className='intro' style={{backgroundImage: `url(${introImg.src})`}}>
				<div className='container'>
					<div className='intro__inner'>
						<span>I am</span>
						<h1 className='intro-title'>Alexander Kuznecov</h1>
						<p>Web developer</p>
						<a href='https://github.com/alexkuznecov16'>Github</a>
					</div>
				</div>
				<div className='mouse'></div>
			</div>
			<main className='Main'>
				<div className='container'>
					<div className='Main__inner'>
						<Projects count={3} />
						<div className='about'>
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
						<div className='contacts'>
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
