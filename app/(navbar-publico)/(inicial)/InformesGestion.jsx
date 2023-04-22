import React from 'react';
import informesGestion from '@/data/informesGestion';
import { ImageCard } from '@/components/paginaInicial/Card';
import '../../../styles/components/paginaInicial/_informesGestion.scss';

const InformesGestion = () => {
	return (
		<section className="informesGestionInicio">
			<h2 className="informesGestionInicio__title">Informes de gestión</h2>
			<div className="informesGestionInicio__containerCards">
				<ImageCard info={informesGestion} />
			</div>
		</section>
	);
};

export default InformesGestion;
