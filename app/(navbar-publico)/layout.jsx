import React from 'react';
import Navbar from '../../components/Navbar';
import { ButtonDonar } from '../../components/paginaInicial/Button';

const layoutPublico = ({ children }) => {
	return (
		<div className="layout-publico">
			<Navbar exceptionStyle={'exception'} />
			<ButtonDonar />
			{children}
		</div>
	);
};

export default layoutPublico;
