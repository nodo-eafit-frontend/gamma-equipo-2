'use client';
import React from 'react';
import Image from 'next/image';
import imgVoluntariado from '../../assets/paginaInicial/causas/4Inspiracion-voluntariado.jpg'

const Voluntariado = () => {
    
    return (
		<>
			<div className='container'>
                <div className='col'>
                    <div className='col-ex'>
                        <Image
                            src={imgVoluntariado}
                            alt="inspiracion voluntariado"
                            className="header-causas__image"
                            quality={100}
                        />
                        <h1 className='col-ex__title'>
                            Inspiración - Voluntariado

                        </h1>
                    </div>
                            
                </div>

                <div className='col'>
                    <div className='col-ex'>
                        <p>
                            El voluntariado EAFIT es un puente de transformación social y cultural, 
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