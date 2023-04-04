'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdClose, MdMenu } from 'react-icons/md';

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

const Navbar = ({ exceptionStyle }) => {
	const pathname = usePathname();

	const [isOpen, setIsOpen] = useState(false);

	const toggleNavbar = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const handleScroll = () => {
			const navbar = document.querySelector('.navbar');
			if (navbar && window.scrollY > 0) {
				navbar.classList.add('--scrolled');
			} else {
				navbar.classList.remove('--scrolled');
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav className={`navbar ${exceptionStyle}`}>
			<h3 className="navbar__title">
				Filantropia <span className="navbar__eafit">eafit</span>
			</h3>
			<div className="navbar__nav-container">
				<button className="navbar__toggler" onClick={() => toggleNavbar()}>
					{isOpen ? <MdClose /> : <MdMenu />}
				</button>
				<div className={`navbar__list-container ${isOpen ? 'show' : ''}`}>
					<ul className="navbar__list">
						{links.map(({ label, route }) => (
							<li className="navbar__item" key={route}>
								<Link
									href={route}
									className={`navbar__link${
										pathname == route ? '--active' : ''
									}`}
								>
									{label}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
