import React from 'react';
import Navbar from '../../components/Navbar';

const layoutPublico = ({ children }) => {
	return (
		<div className="layout-publico">
			<Navbar exceptionStyle={'exception'} />
			{children}
		</div>
	);
};

export default layoutPublico;
