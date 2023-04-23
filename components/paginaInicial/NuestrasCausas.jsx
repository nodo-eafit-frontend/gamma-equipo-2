import React from 'react';
import Carousel from './CarouselAutoSwitch';
import infoCausas from '../../data/infoCarouselCausas';
import '../../styles/components/paginaInicial/_nuestrasCausas.scss';

const NuestrasCausas = () => {
	return (
		<div className="nuestrasCausas">
			<h2 className="nuestrasCausas__title">Nuestras causas</h2>
			<Carousel info={infoCausas} />
		</div>
	);
};

export default NuestrasCausas;
