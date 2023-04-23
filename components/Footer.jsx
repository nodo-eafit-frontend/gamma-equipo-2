import React from 'react';
import imagenesAliados from '../data/dataImagenesAliados';
import Image from 'next/image';
import '../styles/components/_footer.scss';

const Footer = () => {
	//console.log(imagenesAliados);
	return (
		<>
			<hr />
			<footer className="footer">
				<h2 className="footer__title">Conoce nuestros principales aliados</h2>
				<section className="footer__containerImages">
					{imagenesAliados.map(({ id, infoImg, alt }) => (
						<Image
							key={id}
							src={infoImg}
							alt={alt}
							width={150}
							height={150}
							className="footer__image"
						/>
					))}
				</section>
			</footer>
		</>
	);
};

export default Footer;
