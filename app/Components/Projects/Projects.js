import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './Projects.css';

export default function Projects({count = null}) {
	const data = [
		{
			title: 'Online Product Showcase',
			description: 'Developed a multilingual product catalog website with Django admin, deployed on AWS with secure domain integration.',
			github: 'github.com',
			link: 'https://veronikas.shop',
			image: '/project-1.png',
		},
		{
			title: 'FK Spartaks Official Website Replica',
			description: 'Created a feature-rich replica of the FK Spartaks website using Next.js, including team stats, match countdowns, player profiles, and ticket management, with simulated JSON data.',
			github: 'https://github.com/alexkuznecov16/football-club',
			link: 'https://football-club-six.vercel.app/',
			image: '/project-2.png',
		},
		{
			title: 'Room Booking Search Platform',
			description: 'Created a user-friendly search experience with date, guest, and pet filters. Implemented dynamic URL-based search for streamlined navigation and results display.',
			github: 'https://github.com/alexkuznecov16/hotel_desktop',
			link: 'https://hotel-desktop.vercel.app/',
			image: '/project-3.png',
		},
		{
			title: 'Kanban Board Task Management',
			description: 'Interactive Kanban board using localStorage for task persistence. Includes task addition, description editing, and deletion features.',
			github: 'https://github.com/alexkuznecov16/kanban-board',
			link: 'https://kanban-board-psi-two.vercel.app/',
			image: '/project-4.png',
		},
		{
			title: 'Airplane Ticket Filtering',
			description: 'Built a React app for filtering airline tickets by transfer count, airline company, and price. Features options to select the cheapest, fastest, or most optimal flights.',
			github: 'https://github.com/alexkuznecov16/aviasales',
			link: 'https://aviasales-jet.vercel.app/',
			image: '/project-5.png',
		},
		{
			title: 'Notes App with Vue.js',
			description: 'Developed a lightweight notes application using Vue.js. Features include localStorage integration for saving, deleting, and retrieving notes.',
			github: 'https://github.com/alexkuznecov16/notes',
			link: 'https://notes-henna-seven.vercel.app/',
			image: '/project-6.png',
		},
	];

	const projectsToShow = count == null ? data : data.slice(0, count);
	return (
		<div className='Projects'>
			<h4 className='title'>Projects</h4>
			<div className='Projects__inner'>
				{projectsToShow.map((item, index) => (
					<div className='projects-item' key={index}>
						<Image
							width={200}
							height={250}
							src={item.image}
							alt={item.github}
							quality={100} // Ensures maximum quality
							priority={true} // Improves loading priority
							style={{objectFit: 'cover', borderRadius: '8px'}}
						/>
						<span className='projects__title'>{item.title}</span>
						<p className='projects__description'>{item.description}</p>
						<Link href={item.link}> </Link>
					</div>
				))}
			</div>
			{count != null ? (
				<Link className='more' href='/projects'>
					Full projects
				</Link>
			) : (
				''
			)}
		</div>
	);
}
