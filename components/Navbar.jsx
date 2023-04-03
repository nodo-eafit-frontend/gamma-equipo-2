'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
	{
		label: 'Inicio',
		route: '/',
	},
	{
		label: 'Causas',
		route: '/causas',
	},
	{
		label: 'Donar',
		route: '/donar',
	},
	{
		label: 'Cómo donar',
		route: '/como-donar',
	},
	{
		label: 'Iniciativas',
		route: '/iniciativas',
	},
	{
		label: 'Informes de gestión',
		route: '/informes-de-gestion',
	},
	{
		label: 'Noticias',
		route: '/noticias',
	},
];

const Navbar = ({ className }) => {
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			const navbar = document.querySelector('.navbar');
			if (navbar && window.scrollY > 0) {
				navbar.classList.add('navbar--scrolled');
			} else {
				navbar.classList.remove('navbar--scrolled');
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav className={`navbar ${className}`}>
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
