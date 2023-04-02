import React from 'react';
import Link from 'next/link';

const links = [
	{
		label: 'Inicio',
		route: '/',
	},
];

const Navbar = () => {
	return (
		<nav>
			<ul>
				{links.map(({ label, route }) => (
					<li key={route}>
						<Link href={route}>{label}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
