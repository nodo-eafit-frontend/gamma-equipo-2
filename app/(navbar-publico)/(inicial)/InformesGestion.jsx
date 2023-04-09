import React from 'react';
import informesGestion from '@/data/informesGestion';
import { ImageCard } from '@/components/paginaInicial/Card';

const InformesGestion = () => {
	return (
		<section className="informesGestionInicio">
			<h2 className="informesGestionInicio__title">Informes de gestión</h2>
			<ImageCard info={informesGestion} />
		</section>
	);
};

export default InformesGestion;
