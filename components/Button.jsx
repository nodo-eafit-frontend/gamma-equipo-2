import React from 'react';
import Link from 'next/link';

const ButtonDefault = () => {
	return <div>botonDefault</div>;
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

export default ButtonDefault;
