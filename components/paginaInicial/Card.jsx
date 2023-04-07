import React from 'react';
import Image from 'next/image';

const Card = () => {
	return <div>Card</div>;
};

/* export const CarouselCard = ({
	id,
	title,
	infoImg,
	alt,
	nameButton,
	href,
	className,
}) => {
	return (
		<article key={id} className={`${className} CarouselCard`}>
			<h2 className="CarouselCard__title">{title}</h2>
			<Image src={infoImg.src} alt={alt} width={500} height={500} />
		</article>
	);
}; */

export const SimpleCard = ({ id, title, description }) => {
	return (
		<article key={id} className="simpleCard">
			<h2 className="simpleCard__title">{title}</h2>
			<p className="simpleCard__description">{description}</p>
		</article>
	);
};

export default Card;
