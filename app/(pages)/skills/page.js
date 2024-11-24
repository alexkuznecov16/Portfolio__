import Footer from '@/app/Components/Footer/Footer';
import Header from '@/app/Components/Header/Header';
import React from 'react';
import '../../main.css';
import {SiThealgorithms} from 'react-icons/si';
import {FaEye, FaServer, FaCloud} from 'react-icons/fa';
import Link from 'next/link';
import './Skills.css';

export default function page() {
	return (
		<>
			<Header />
			<main className='Skills'>
				<div className='container'>
					<h2 className='title'>Skills</h2>
					<div className='Skills__inner'>
						<div className='Skills__inner'>
							<div className='Skills-item'>
								<SiThealgorithms />
								<Link href='/skills/algorithms'>Algorithms & Data Structures</Link>
							</div>
							<div className='Skills-item'>
								<FaEye />
								<Link href='/skills/frontend-development'>Frontend development</Link>
							</div>
							<div className='Skills-item'>
								<FaServer />
								<Link href='/skills/backend-development'>Backend development</Link>
							</div>
							<div className='Skills-item'>
								<FaCloud />
								<Link href='/skills/cloud-services'>Cloud Services</Link>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
