'use client';
import React, {useRef, useState} from 'react';
import './Header.css';
import {IoMdMenu, IoMdClose} from 'react-icons/io';
import Link from 'next/link';

export default function Header() {
	const mobileRef = useRef(null);
	const [isMobileOpen, setMobileOpen] = useState(false);

	const openMobile = () => {
		setMobileOpen(true);
		document.body.style.overflow = 'hidden';
	};

	const closeMobile = () => {
		setMobileOpen(false);
		document.body.style.overflow = '';
	};

	return (
		<header className='header'>
			<div className='container'>
				<nav className='header__nav full'>
					<Link href='/'>Overview</Link>
					<Link href='/projects'>Projects</Link>
					<Link href='/profile'>Profile</Link>
					<Link href='/contacts'>Get in Touch</Link>
				</nav>

				<IoMdMenu className='toOpen' onClick={openMobile} />
				<nav ref={mobileRef} className={`header__nav mobile ${isMobileOpen ? 'opened' : ''}`}>
					<IoMdClose className='toClose' onClick={closeMobile} />
					<Link onClick={closeMobile} href='/'>
						Overview
					</Link>
					<Link onClick={closeMobile} href='/projects'>
						Projects
					</Link>
					<Link onClick={closeMobile} href='/profile'>
						Profile
					</Link>
					<Link onClick={closeMobile} href='/contacts'>
						Get in Touch
					</Link>
				</nav>
			</div>
		</header>
	);
}
