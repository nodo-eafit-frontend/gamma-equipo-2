'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
	{
		label: 'Inicio',
		route: '/',
	},
];

const Navbar = () => {
	const pathname = usePathname();

	return (
		<nav className="navbar">
			<h3 className="navbar__title">
				Filantropia <span className="navbar__eafit">eafit</span>
			</h3>
			<ul className="navbar__list">
				{links.map(({ label, route }) => (
					<li className="navbar__item" key={route}>
						<Link
							href={route}
							className={`navbar__link${pathname == route ? '--active' : ''}`}
						>
							{label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
