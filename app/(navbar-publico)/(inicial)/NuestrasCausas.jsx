import React from 'react';
import Carousel from '../../../components/paginaInicial/CarouselAutoSwitch';
import infoCausas from '../../../data/infoCarouselCausas';

const NuestrasCausas = () => {
	return (
		<div className="nuestrasCausas">
			<h2 className="nuestrasCausas__title">Nuestras causas</h2>
			<Carousel info={infoCausas} />
		</div>
	);
};

export default NuestrasCausas;
