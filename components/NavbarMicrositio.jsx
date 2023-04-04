import React from 'react';
import Image from 'next/image';
import imgNavbar from '../assets/navbar-micrositio/EA_HEADER_MICRO_ESP_1.png';
import imagen_navbar from '../assets/navbar-micrositio/imagen_navbar.svg';
import { Poppins, Montserrat, Ephesis } from 'next/font/google';

const ephesis = Ephesis({
	subsets: ['latin'],
	weight: ['400'],
});

const NavbarMicrositio = () => {
	return (
		<div className="navbar-micrositio">
			<Image
				src={imagen_navbar}
				alt="Imagen navbar micrositio"
				className="navbar-micrositio__imagen"
				quality={100}
			/>
			<p className="navbar-micrositio__texto">
				<span className={`${ephesis.className} navbar-micrositio__subtexto1`}>
					Transformando vidas
				</span>
				<span className="navbar-micrositio__subtexto2">
					a través de tus aportes para que alguien más alcance sus sueños{' '}
				</span>
			</p>
		</div>
	);
};

export default NavbarMicrositio;
