'use client';
import React from 'react';
import Image from 'next/image';
import imgCiencia from '../../assets/paginaInicial/causas/2CienciaTecnologiaEInnovacion.jpg'


const CienciaTec = () => {
    
    return (
		<>
			<div className='container'>
                <div className='col'>
                    <div className='col-ex'>
                        <Image
                            src={imgCiencia}
                            alt="ciencia y tecnologia"
                            className="header-causas__image"
                            quality={100}
                        />
                        <h1 className='col-ex__title'>
                            Ciencia, tecnología e innovación
                        </h1>
                    </div>       
                </div>

                <div className='col'>
                    <p>
                        Creamos valor social a partir de proyectos de investigación, 
                        logrando de una forma eficiente resolver los problemas sociales y 
                        contribuir a la generación de conocimiento. <br />
                        Uno de los propósitos de nuestra Institución que inspira, crea y transforma es desarrollar 
                        la capacidad intelectual de los estudiantes y profesores en todos los programas 
                        académicos con la investigación como soporte básico. <br />
                        Con tus aportes a los proyectos de investigación científica y aplicada, 
                        impulsas la producción de respuestas innovadoras que contribuyen a la solución de 
                        problemáticas de nuestra sociedad.
                    </p>

                </div>

            </div>
		</>
	);
};

export default CienciaTec;