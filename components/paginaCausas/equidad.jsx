'use client';
import React from 'react';
import Image from 'next/image';
import imgEquidad from '../../assets/paginaInicial/causas/1equidadSocialEInclusion.jpg'
import imgBecas from '../../assets/paginaInicial/causas/5FondoDeBecas.png'

const EquidadSocial = () => {
    
    return (
		<>
			<div className='container'>
                <div className='col'>
                    <div className='col-ex'>
                        <Image
                            src={imgEquidad}
                            alt="equidad social"
                            className="header-causas__image"
                            quality={100}
                        />
                        <h1 className='col-ex__title'>
                            Equidad Social e Inclusión

                        </h1>
                    </div>
                </div>

                <div className='col'>
                    <div className='col-ex'>
                        <p>
                            En Colombia, más de dos millones de jóvenes se inscriben a una Institución de Educación 
                            Superior, pero solo el 41% logra matricularse. En Antioquia, de cada 10 jóvenes entre los 
                            17 y 21 años, solo 5 ingresan a una Institución de Educación Superior.<br /> 
                            En Medellín, de cada 100 estudiantes que culminan el grado 11, solo 48 hacen tránsito 
                            inmediato a la Educación Superior. Con Filantropía EAFIT, la Universidad, con el apoyo 
                            de diversos aliados, ha logrado otorgar más de 2.540 becas cada semestre.<br /> <br /> 
                                
                        </p>
                        
                    </div>
                </div>
                
            </div>
            <h1 className='col-ex__subtitle'>Conoce el fondo de Becas</h1>
                        <Image
                            src={imgBecas}
                            alt='fondo becas'
                            className='header-causas__image'
                            quality={100}
                        /> 
		</>
	);
};

export default EquidadSocial;