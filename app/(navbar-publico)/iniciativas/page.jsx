import { ImageCard } from '@/components/paginaInicial/Card';
import React from 'react';
import iniciativas from '../../../data/iniciativas/iniciativas';

const Iniciativas = () => {
	return (
		<>
			<main>
				<h1
					style={{
						textAlign: 'center',
						fontWeight: '600',
						fontSize: '2.5rem',
						padding: '10px',
					}}
				>
					Iniciativas
				</h1>
				<ImageCard info={iniciativas} openInOtherPage={false} />
			</main>
		</>
	);
};

export default Iniciativas;
