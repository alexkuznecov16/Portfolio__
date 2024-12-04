import Image from 'next/image';
import React from 'react';
import './Skills.css';
import '../../main.css';

import css from '../../assets/css-3.png';
import html from '../../assets/html.png';
import js from '../../assets/js.png';
import typescript from '../../assets/typescript.png';
import reactjs from '../../assets/reactjs.png';
import sass from '../../assets/sass.png';
import database from '../../assets/database.png';
import django from '../../assets/django.png';
import nextjs from '../../assets/nextjs.png';
import python from '../../assets/python.png';
import nodejs from '../../assets/nodejs.png';
import Link from 'next/link';

export default function Skills() {
	const skills = [css, html, js, typescript, reactjs, sass, database, django, nextjs, python, nodejs];
	return (
		<div className='Skills'>
			<h4 className='title'>Skills</h4>
			<div className='Skills__inner'>
				<div className='marquee'>
					{[...skills, ...skills].map((skill, index) => (
						<div className='skill-logo' key={index}>
							<Image alt='logo' src={skill} width={200} height={200} />
						</div>
					))}
				</div>
			</div>
			<Link className='more' href='https://github.com/alexkuznecov16'>
				All skills
			</Link>
		</div>
	);
}
