'use client';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import banner from '../../../../assets/vamos-pa-lante/BannerVamosPaLanteAgradeciendo.jpg';
import datosBeca from '../../../../assets/vamos-pa-lante/datosbeca.png';
import organizadores from '@/data/iniciativas/vamos-pa-lante/organizadores';
import universidadesSocias from '@/data/iniciativas/vamos-pa-lante/universidadesSocias';
import aliados from '@/data/iniciativas/vamos-pa-lante/aliados';

const VamosPaLante = () => {
	return (
		<main className="vamosPaLante">
			<section className="vamosPaLante__banner">
				<Image
					src={banner.src}
					alt="vamos pa lante imagen"
					width={300}
					height={300}
				/>
			</section>

			<section className="vamosPaLante__ayudemos">
				<p>
					Ayudamos a los estudiantes de pregrado de segundo semestre en
					adelante, que se encuentren en riesgo de desertar de sus carreras por
					razones económicas, otorgando becas de rescate y sostenimiento por un
					semestre.
				</p>
				<iframe
					width="560"
					height="316"
					src="https://www.youtube.com/embed/DcrtCEfsAxc"
					title="Graduados, esta es la oportunidad para ser parte de la construcción de un sueño"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				></iframe>
			</section>

			<section className="vamosPaLante__info">
				<article className="vamosPaLante__conoceMas">
					<span>Conoce más</span>
					<h2>Sobre esta beca</h2>
				</article>

				<article className="vamosPaLante__organizadoresSociosAliados">
					<div>
						<h3>Organizadores</h3>
						{organizadores.map(({ id, infoImg, alt }) => (
							<Image
								key={id}
								src={infoImg}
								alt={alt}
								width={150}
								height={150}
							/>
						))}
					</div>

					<div>
						<h3>Universidades socias</h3>
						{universidadesSocias.map(({ id, infoImg, alt }) => (
							<Image
								key={id}
								src={infoImg}
								alt={alt}
								width={150}
								height={150}
							/>
						))}
					</div>

					<div>
						<h3>Aliados</h3>
						{aliados.map(({ id, infoImg, alt }) => (
							<Image
								key={id}
								src={infoImg}
								alt={alt}
								width={150}
								height={150}
							/>
						))}
					</div>
				</article>

				<article className="vamosPaLante__comoFunciona">
					<h3>¿Cómo funciona?</h3>
					<span>La matrícula semestral será cubierta así:</span>
					<Image
						src={datosBeca.src}
						alt="datos beca imagen"
						width={300}
						height={300}
					/>
					<span>+ sostenimiento semestral</span>
				</article>

				<article className="vamosPaLante__meta">
					<h3>Meta país</h3>

					<span>500 becas</span>

					<span>$4.000.000.000</span>
				</article>

				<Link
					href="https://www.eafit.edu.co/institucional/centro-filantropia/campanias/Documents/VAMOS%20PALANTE-2022%20-%20EAFITDEFINITIVA.pdf"
					className="vamosPaLante__button"
				>
					Ingresa aquí y conoce más detalles
				</Link>
				<h3>Gracias</h3>
				<p>Tu solidaridad nos inspira</p>
			</section>
		</main>
	);
};

export default VamosPaLante;
