import Link from 'next/link';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Socials from '../../Components/Socials/Socials';
import '../../main.css';
import './Contacts.css';
import {FaMapMarkerAlt, FaEnvelope} from 'react-icons/fa';

export default function page() {
	return (
		<>
			<Header />
			<main className='Contacts'>
				<h4 className='title'>Contacts</h4>
				<div className='container'>
					<div className='Contacts__inner'>
						<p className='contact-description'>Feel free to contact me through any of the following methods. I&apos;m open to collaborations and discussions!</p>
						<div className='Socials__inner'>
							<Socials />
						</div>
						<p>
							<FaMapMarkerAlt /> I am located in Jurmala, Latvia.
						</p>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d139196.29359872767!2d23.55736889664761!3d56.966924493738745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eedd07e8a104d3%3A0x78537e586c6c16df!2zSsWrcm1hbGE!5e0!3m2!1sen!2slv!4v1731851544964!5m2!1sen!2slv'
							width='600'
							height='450'
							style={{border: 0}}
							allowfullscreen=''
							loading='lazy'
							referrerpolicy='no-referrer-when-downgrade'
						></iframe>
						<Link href={'mailto:alexander.kuznecov16@gmail.com'}>
							<FaEnvelope /> You can reach me at email
						</Link>
						<div className='back-to-home'>
							<Link href='/'>Back to Home</Link>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
