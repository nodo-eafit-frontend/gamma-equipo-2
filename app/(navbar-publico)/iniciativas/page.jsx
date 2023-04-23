import { ImageCard } from '@/components/paginaInicial/Card';
import React from 'react';
import iniciativas from '../../../data/iniciativas';

const Iniciativas = () => {
	return (
		<>
			<header>
				<h1>Iniciativas</h1>
			</header>
			<main>
				<ImageCard info={iniciativas} openInOtherPage={false} />
			</main>
		</>
	);
};

export default Iniciativas;
