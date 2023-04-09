'use client';
import React from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

import Image from 'next/image';
import { CarouselCard } from './paginaInicial/Card';
import Button from './paginaInicial/Button';
import Link from 'next/link';

const Carousel = ({ info }) => {
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
				{info.map(({ id, title, infoImg, alt, nameButton, href }) => (
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
