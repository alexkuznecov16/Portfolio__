export const metadata = {
	title: 'Alexander Kuznecov #portfolio',
	description: "Alexander Kuznecov's portfolio website (Front-end developer | Full-stack developer)",
	authors: [
		{
			name: 'Alexander Kuznecov (c)',
			url: 'https://github.com/alexkuznecov16',
		},
	],
};

export default function RootLayout({children}) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
