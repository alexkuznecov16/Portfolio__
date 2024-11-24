import Projects from '@/app/Components/Projects/Projects';
import '../../main.css';
import React from 'react';
import Header from '@/app/Components/Header/Header';
import Footer from '@/app/Components/Footer/Footer';

export default function page() {
	return (
		<>
			<Header />
			<Projects />
			<Footer />
		</>
	);
}
