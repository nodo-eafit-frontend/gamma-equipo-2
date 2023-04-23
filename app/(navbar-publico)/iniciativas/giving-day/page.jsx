import React from 'react';
import Image from 'next/image';
import imgHeader from '../../../../assets/giving-day/undraw_different_love_a-3-rg.svg';
import { FaMoneyBill, FaHandsHelping, FaHeart } from 'react-icons/fa';
import restaurantesYMarcasEnEafit from '@/data/iniciativas/giving-day/restaurantesYMarcasEnEafit';
import restaurantesYMarcasFueraEafit from '@/data/iniciativas/giving-day/restaurantesYMarcasFueraEafit';
import patrocinadores from '@/data/iniciativas/giving-day/patrocinadores';

const cardHeaderInfo = [
	{
		id: 1,
		icon: <FaHeart />,
		text: '¡Gracias por volar con nosotros!',
	},
	{
		id: 2,
		icon: <FaHandsHelping />,
		text: '500 donaciones se recibieron en esta jornada',
	},
	{
		id: 3,
		icon: <FaMoneyBill />,
		text: '30000000 pesos recaudados',
	},
];

const GivingDay = () => {
	return (
		<main className="givingDay">
			<section className="givingDay__header">
				<article className="givingDay__row1Header">
					<h2 className="givingDay__title">
						#Volemos Juntos <span>eafit</span>
					</h2>
					<Image
						src={imgHeader}
						alt="a"
						width={300}
						height={300}
						className="givingDay__imagenHeader"
					/>
				</article>

				<article className="givingDay__row2Header">
					{cardHeaderInfo.map(({ id, icon, text }) => (
						<article key={id} className="givingDay__cardHeader">
							<span>{icon}</span>
							<span>{text}</span>
						</article>
					))}
				</article>
			</section>

			<section className="givingDay__info">
				<p>
					El 1 de noviembre celebramos juntos la cuarta versión del Giving Day
					EAFIT para fortalecer el Fondo de Becas y ayudar a nuestros
					estudiantes con la campaña Vamos Pa&apos;Lante.
				</p>
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/NpUUfkPnwzQ"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				></iframe>
			</section>

			<section className="givingDay__aliados">
				<h2 className="givingDay__titleAliados">Aliados</h2>

				<article className="givingDay__marcasEnEafit">
					<h3>Restaurantes y marcas en EAFIT:</h3>
					{restaurantesYMarcasEnEafit.map(({ id, infoImg, alt }) => (
						<div key={id}>
							<Image src={infoImg.src} alt={alt} width={150} height={150} />
						</div>
					))}
				</article>

				<article className="givingDay__marcasFueraEafit">
					<h3>Restaurantes y marcas fuera de EAFIT:</h3>
					{restaurantesYMarcasFueraEafit.map(({ id, infoImg, alt }) => (
						<div key={id}>
							<Image src={infoImg.src} alt={alt} width={150} height={150} />
						</div>
					))}
				</article>

				<article className="givingDay__patrocinadores">
					<h3>Patrocinadores</h3>
					{patrocinadores.map(({ id, infoImg, alt }) => (
						<div key={id}>
							<Image src={infoImg.src} alt={alt} width={150} height={150} />
						</div>
					))}
				</article>
			</section>
		</main>
	);
};

export default GivingDay;
