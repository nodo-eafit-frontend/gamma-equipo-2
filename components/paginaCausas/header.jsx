'use client';
import React, { useEffect } from 'react';
import '../../styles/components/paginaCausas/_header.scss';


const HeaderCausas = () => {
	 useEffect(() => {
		const handleScroll = () => {
			const header = document.querySelector('.header-causas__title');
			if (header && window.scrollY > 0) {
				header.classList.add('header-causas__title--scrolled');
			} else {
				header.classList.remove('header-causas__title--scrolled');
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []); 

	return (
		<>
			<header className="header-causas">
				<h1 className="header-causas__title">
					Nuestras Causas
				</h1>
			</header>
		</>
	);
};

export default HeaderCausas;
