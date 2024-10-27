import Link from 'next/link';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import './main.css';
import Image from 'next/image';
import {SiThealgorithms} from 'react-icons/si';
import {FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa';

export default function Home() {
	return (
		<>
			<Header />
			<div className='intro'>
				<div className='container'>
					<div className='intro__inner'>
						<span>I am</span>
						<h1 className='intro-title'>Alexander Kuznecov</h1>
						<p>Web developer</p>
						<a href='https://github.com/alexkuznecov16'>Github</a>
					</div>
				</div>
				<div class='mouse'></div>
			</div>
			<main className='Main'>
				<div className='container'>
					<div className='Main__inner'>
						<div className='programming'>
							<h4 className='title'>Programming</h4>
							<div className='programming__inner'>
								<div className='programming-item'>
									<SiThealgorithms />
									<Link href='/programming/algorithms'>Algorithms</Link>
								</div>
								<div className='programming-item'>
									<SiThealgorithms />
									<Link href='/programming/frontend'>Frontend</Link>
								</div>
								<div className='programming-item'>
									<SiThealgorithms />
									<Link href='/programming/projects'>Projects</Link>
								</div>
							</div>
							<Link className='more' href='/programming'>
								Full programming
							</Link>
						</div>
						<div className='about'>
							<h4 className='title'>Profile</h4>
							<div className='about__inner'>
								<p className='text'>
									Hello! My name is Alex, am a passionate Web developer. My programming journey began in 2020. It was the year I was introduced to technologies like Python, Unity, Unreal Engine, HTML CSS. Each of these technologies had strengths in specific areas, but HTML and CSS stood out to me as the most compelling. Since then, I have been diving deeper intro web development.
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
								<Link className='contact-item instagram' href='https://www.instagram.com/kuznecov_alex_?igsh=emR2dGh0MHQ1Z3d3' target='_blank'>
									<FaInstagram />
								</Link>
								<Link className='contact-item linkedin' href='https://www.linkedin.com/in/alexander-kuznecov' target='_blank'>
									<FaLinkedin />
								</Link>
								<Link className='contact-item github' href='https://github.com/alexkuznecov16' target='_blank'>
									<FaGithub />
								</Link>
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
