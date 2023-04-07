'use client';
import React from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import infoCausas from '../../data/infoCarouselCausas';
import Image from 'next/image';
import { CarouselCard } from './Card';
import Button from './Button';
import Link from 'next/link';

const Carousel = () => {
	const [sliderRef, instaceRef] = useKeenSlider(
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
		<>
			<section ref={sliderRef} className="keen-slider carouselCausas">
				{infoCausas.map(({ id, title, infoImg, alt, nameButton, href }) => (
					<article
						className="carouselCausas__card keen-slider__slide "
						key={id}
					>
						<Image
							className="carouselCausas__image"
							src={infoImg.src}
							alt={alt}
							width={300}
							height={300}
						/>
						<div className="carouselCausas__containerText">
							<h3 className="carouselCausas__title">{title}</h3>
							<Link href={href} className="carouselCausas__button">
								{nameButton}
							</Link>
						</div>
					</article>
				))}
			</section>
		</>
	);
};

export default Carousel;

/* const Carrousel = () => {
	const [sliderRef, instaceRef] = useKeenSlider(
		{
			slideChanged() {
				console.log('slide change');
			},
			loop: true,
		},
		[
			//add plugins
		]
	);

	return (
		<section ref={sliderRef} className="keen-slider">
			{infoCausas.map(({ id, title, infoImg, alt, nameButton, href }) => (
				<CarouselCard
					className="keen-slider__slide"
					key={id}
					title={title}
					infoImg={infoImg}
					alt={alt}
					nameButton={nameButton}
					href={href}
				/>
			))}
		</section>
	);
};

export default Carrousel;


 */

/*
	id: 4,
	title: 'Inspiración - Voluntariado',
	infoImg: getAllImages()[1],
	alt: 'imagen Inspiración - Voluntariado',
	nameButton: 'Ver más',
	link: '', 
*/

/* <Carousel variant="dark">
			{infoCausas.map(({ id, title, infoImg, alt, nameButton, href }) => (
				<Carousel.Item key={id}>
					<Image
						alt={alt}
						src={infoImg.src}
						width="450"
						height="450"
						style={{
							maxWidth: '500px',
							margin: 'auto',
							maxHeight: '500px',
						}}
					/>
					<Carousel.Caption
						style={{
							margin: 'auto',
						}}
					>
						<h3>{title}</h3>
						<Button href={href} name={nameButton} />
					</Carousel.Caption>
				</Carousel.Item>
			))}
		</Carousel> */
