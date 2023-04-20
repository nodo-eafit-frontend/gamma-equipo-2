'use client';
import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import infoContacto from '../../../data/infoContacto';

const Contacto = () => {
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
					}, 1000);
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
		<section className="contacto">
			<h2 className="contacto__title">Contacto</h2>
			<div ref={sliderRef} className="keen-slider contacto__carousel">
				{infoContacto.map(({ id, name, infoImg, alt, info, email }) => (
					<article key={id} className="keen-slider__slide contacto__slider">
						<Image
							className="contacto__image"
							src={infoImg.src}
							alt={alt}
							width={200}
							height={200}
						/>
						<h3 className="contacto__name">{name}</h3>
						<p className="contacto__info ">
							{info.map((dato) => (
								<>
									<span key={dato}>{dato}</span>
								</>
							))}
						</p>
						<p className="contacto__info contacto__info--color">
							{email.map((dato) => (
								<>
									<span>{dato}</span>
								</>
							))}
						</p>
					</article>
				))}
			</div>
		</section>
	);
};

export default Contacto;
