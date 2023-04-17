'use client';
import React from 'react';
import Image from 'next/image';
import imgVoluntariado from '../../assets/paginaCausas/4Inspiracion-voluntariado.jpg'

const Voluntariado = () => {
    
    return (
		<>
            <div className='container__fondo'>
                <div className='container'>
                    <div className='col'>
                        <Image
                            src={imgVoluntariado}
                            alt="inspiracion voluntariado"
                            className="header-causas__image"
                            quality={100}
                        />
                        <h1 className='col__title'>
                            Inspiración - Voluntariado

                        </h1>
                    </div>

                    <div className='col'>
                        <p>
                            <br/>El voluntariado EAFIT es un puente de transformación social y cultural, 
                            que inspira a la comunidad eafitense y sus allegados a vincularse con iniciativas
                            sociales, académicas, comunitarias, culturales y para la filantropía, 
                            permitiendo asumir responsabilidad y rol en la sociedad y/o al interior de la Universidad 
                            a través de la contribución eficaz de tiempo y conocimiento.
                        </p>
                    </div>
                </div>
            </div>
		</>
	);
};

export default Voluntariado;