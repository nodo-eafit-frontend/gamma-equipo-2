'use client';
import React from 'react';
import Image from 'next/image';
import imgCiencia from '../../assets/paginaCausas/2CienciaTecnologiaEInnovacion.jpg';
import YoutubeEmbed from './YoutubeEmbed';


const CienciaTec = () => {
    
    return (
        <>
		<section>
			<div className='container__fondo'>
                <div className='container'>
                    <div className='col'>
                        <Image
                            src={imgCiencia}
                            alt="ciencia y tecnologia"
                            className="header-causas__image"
                            quality={100}
                        />
                        <h1 className='col__title'>
                            Equidad Social e Inclusión

                        </h1>
                    </div>
                    <div className='col'>
                        <p>
                            <br />Creamos valor social a partir de proyectos de investigación, 
                            logrando de una forma eficiente resolver los problemas sociales y 
                            contribuir a la generación de conocimiento. <br />
                            Uno de los propósitos de nuestra Institución que inspira, crea y transforma es desarrollar 
                            la capacidad intelectual de los estudiantes y profesores en todos los programas 
                            académicos con la investigación como soporte básico. <br />
                            Con tus aportes a los proyectos de investigación científica y aplicada, 
                            impulsas la producción de respuestas innovadoras que contribuyen a la solución de 
                            problemáticas de nuestra sociedad.<br /> 
                                
                        </p>                        
                    </div>
                </div>
                <YoutubeEmbed embedId="9AfH9ZEb-18" />
                               
            </div>             
      </section>
      
      </>

      
	);
    
};

export default CienciaTec;