import React from 'react';
import Link from 'next/link';
import '../../styles/components/paginaCausas/_buttonConoce.scss';

const ButtonConoceMas = () => {
  return (
        <button className='buttonConoce'>
            <Link href="/causas/secciones/voluntariado" target='_blank'>
                Conoce más de nosotros
            </Link>
        </button>
    );
};

export default ButtonConoceMas;
