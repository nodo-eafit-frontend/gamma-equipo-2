'use client';
import Image from 'next/image';
import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import banner1 from '../../../../assets/creadores-de-principios/banner (1).jpg';
import banner2 from '../../../../assets/creadores-de-principios/banner (2).jpg';
import fondoBecaRescate from '../../../../assets/creadores-de-principios/imagen_2020-10-01_125623.png';

const CreadoresDePrincipios = () => {
	const [sliderRef] = useKeenSlider(
		{
			loop: true,
		},
		[
			(slider) => {
				let timeout;
				let mouseOver = false;
				function clearNextTimeout() {
					clearTimeout(timeout);
				}
				function nextTimeout() {
					clearTimeout(timeout);
					if (mouseOver) return;
					timeout = setTimeout(() => {
						slider.next();
					}, 2000);
				}
				slider.on('created', () => {
					slider.container.addEventListener('mouseover', () => {
						mouseOver = true;
						clearNextTimeout();
					});
					slider.container.addEventListener('mouseout', () => {
						mouseOver = false;
						nextTimeout();
					});
					nextTimeout();
				});
				slider.on('dragStarted', clearNextTimeout);
				slider.on('animationEnded', nextTimeout);
				slider.on('updated', nextTimeout);
			},
		]
	);

	return (
		<main className="creadoresPrincipios">
			<section
				ref={sliderRef}
				className="keen-slider creadoresPrincipios__carousel"
				style={{ width: '100%' }}
			>
				<div
					className="keen-slider__slide creadoresPrincipios__card"
					style={{ width: '100%' }}
				>
					<Image
						src={banner1}
						alt="a"
						fill
						className="creadoresPrincipios__banner"
					/>
				</div>
				<div
					className="keen-slider__slide creadoresPrincipios__card"
					style={{ width: '100%' }}
				>
					<Image
						src={banner2}
						alt="a"
						width={300}
						height={300}
						className="creadoresPrincipios__banner"
					/>
				</div>
			</section>

			<section className="creadoresPrincipios__text">
				<p>
					Grandes historias se han construido gracias a la confianza de otros
				</p>
				<p>
					En EAFIT creemos que las personas que transforman el futuro necesitan
					un principio y nosotros ayudamos a crearlo
				</p>
				<p>Tú también puedes ser un creador de principios, aportando al</p>
				<Image
					src={fondoBecaRescate}
					alt="a"
					width={300}
					height={300}
					className="creadoresPrincipios__imgFondoBeca"
				/>
				<p>
					Ofrece a los estudiantes, con excelencia académica, el 50% del valor
					de la matrícula para aplicar por un semestre.
				</p>
			</section>
		</main>
	);
};

export default CreadoresDePrincipios;
