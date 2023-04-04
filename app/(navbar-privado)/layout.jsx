import React from 'react';
import NavbarPrivado from '../../components/NavbarPrivado';
import FooterPrivado from '../../components/FooterPrivado';

const layoutPrivado = ({ children }) => {
	return (
		<div>
			<NavbarPrivado />
			{children}
			<FooterPrivado />
		</div>
	);
};

export default layoutPrivado;
