import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ButtonDonar } from '../../components/paginaInicial/Button';

const layoutPublico = ({ children }) => {
	return (
		<div className="layout-publico">
			<Navbar exceptionStyle={'exception'} />
			<ButtonDonar />
			{children}
			<Footer />
		</div>
	);
};

export default layoutPublico;
