import React from 'react';
import Link from 'next/link';
import '../../styles/components/paginaCausas/_buttonVoluntariado.scss';

export const ButtonVoluntariado = () => {
	return (
		<button className='buttonVoluntariado'>
			<Link href="https://forms.office.com/pages/responsepage.aspx?id=XrX3mb6ce0aBQ5GXgpGK-x0jvEkZ8mJKr-W85ajA-YVUNTZBSVcwVTIyRjlJWVMxRU83NkFLSU5SQy4u" target='_blank'>
				Inscríbete aquí
			</Link>
		</button>
	);
};

export default ButtonVoluntariado;