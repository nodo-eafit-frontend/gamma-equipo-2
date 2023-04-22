import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../../styles/components/paginaInicial/_card.scss';

const Card = () => {
	return <div>Card</div>;
};

export const ImageCard = ({ info }) => {
	//console.log(info);
	return (
		<div
			className="ImageCard__container"
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexWrap: 'wrap',
				gap: '20px',
			}}
		>
			{info.map(({ id, infoImg, alt, nameButton, href }) => (
				<article className="ImageCard" key={id}>
					<Image
						src={infoImg.src}
						alt={alt}
						width={300}
						height={300}
						className="ImageCard__image"
					/>
					<Link href={href} className="ImageCard__link" target="_blank">
						{nameButton}
					</Link>
				</article>
			))}
		</div>
	);
};

export const SimpleCard = ({ id, title, description }) => {
	return (
		<article key={id} className="simpleCard">
			<h2 className="simpleCard__title">{title}</h2>
			<p className="simpleCard__description">{description}</p>
		</article>
	);
};

export default Card;
