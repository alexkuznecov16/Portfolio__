import React from 'react';
import './Socials.css';
import Link from 'next/link';
import {FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa';

export default function Socials() {
	return (
		<>
			<Link className='contact-item instagram' href='https://www.instagram.com/kuznecov_alex_?igsh=emR2dGh0MHQ1Z3d3' target='_blank'>
				<FaInstagram />
			</Link>
			<Link className='contact-item linkedin' href='https://www.linkedin.com/in/alexander-kuznecov' target='_blank'>
				<FaLinkedin />
			</Link>
			<Link className='contact-item github' href='https://github.com/alexkuznecov16' target='_blank'>
				<FaGithub />
			</Link>
		</>
	);
}
