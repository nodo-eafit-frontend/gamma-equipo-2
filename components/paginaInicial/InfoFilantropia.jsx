import React from 'react';
import { SimpleCard } from '@/components/paginaInicial/Card';
import infoFilantropia from '/data/infoPaginaInicialFilantropia';

const InfoFilantropia = () => {
	return (
		<section
			className="info-filantropia"
			style={{
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'center',
				alignItems: 'center',
				gap: '25px',
				padding: '20px',
			}}
		>
			{infoFilantropia.map(({ id, title, description }) => (
				<SimpleCard key={id} title={title} description={description} />
			))}
		</section>
	);
};

export default InfoFilantropia;
