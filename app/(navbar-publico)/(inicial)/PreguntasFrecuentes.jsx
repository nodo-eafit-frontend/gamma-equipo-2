import React from 'react';
import Accordion from '../../../components/paginaInicial/Accordion';
import preguntrasFrecuentes from '../../../data/preguntasFrecuentes';
import '../../../styles/components/paginaInicial/_preguntasFrecuentes.scss';

const PreguntasFrecuentes = () => {
	return (
		<section className="preguntasFrecuentes">
			<h2 className="preguntasFrecuentes__title">Preguntas frecuentes</h2>
			<div
				className="preguntasFrecuentes__preguntas"
				style={{ padding: '10px' }}
			>
				<Accordion info={preguntrasFrecuentes} />
			</div>
		</section>
	);
};

export default PreguntasFrecuentes;
