import React from 'react';
import Link from 'next/link';

const Button = ({
	name,
	href,
	width,
	heigth,
	borderRadius,
	color,
	colorHover,
	bgColor,
	bgColorHover,
}) => {
	return (
		<button>
			<Link href={href}>{name}</Link>
		</button>
	);
};

export const ButtonDonar = () => {
	return (
		<button className="buttonDonar">
			<Link href="/donar" className="buttonDonar__link">
				Dona aquí 💙
			</Link>
		</button>
	);
};

export default Button;
