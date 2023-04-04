import React from 'react';
import Image from 'next/image';
import imgNavbar from '../assets/navbar-micrositio/EA_HEADER_MICRO_ESP_1.png';

const NavbarMicrositio = () => {
	return (
		<div className="navbar-micrositio">
			<Image
				//src={'https://servicios.eafit.edu.co/cs/FLDONCS/cache/EA_HEADER_MICRO_ESP_1.png'}
				src={imgNavbar}
				alt="Imagen navbar micrositio"
				className="navbar-micrositio__imagen"
				quality={100}
			/>
		</div>
	);
};

export default NavbarMicrositio;
