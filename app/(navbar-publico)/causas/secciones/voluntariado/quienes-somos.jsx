'use client';
import React from 'react';
import Image from 'next/image';
import imgReconocimientoA from '../../../../../assets/paginaCausas/reconocimiento1.png';
import imgsemana from '../../../../../assets/paginaCausas/semanavoluntariado.png';
import '../../../../../styles/components/paginaCausas/_voluntariado.scss';

const QuienesSomos = () => {
  return (
    <>
    <section>
        <h1 className='col__title'>Quienes Somos</h1>
        <div className='container'>
            <p className='col__encabezado'> <br /> El voluntariado EAFIT es un puente de transformación social y cultural, 
                que inspira a la comunidad eafitense y sus allegados a vincularse con iniciativas sociales, 
                académicas, comunitarias, culturales y para la filantropía, permitiendo asumir responsabilidad 
                y rol en la sociedad y/o al interior de la Universidad a través de la contribución eficaz de tiempo 
                y conocimiento.
            </p>
        </div>
        <h2 className='col__text'><br />Reconocimientos</h2>
        <div className='container'>
            <div className='col'>
                <h1 className='col__subtitle'> Reconocimiento de la Alcaldía de Medellín</h1>
                <Image
                    src={imgReconocimientoA}
                    alt="reconocimiento alcaldia"
                    className="col__image"
                    quality={100}
                />
            </div>
            <div className='col'>
                <p>
                <br /><br />El 4 de dici​embre en la ceremonia ​“Héroes como vos” de la @alcaldiademed reci​​bimos un 
                reconocimiento por nuestro programa y trabajo de voluntariado @eafit en la categoría universidades, 
                distinción que nos llena de alegría y orgullo por las acciones emprendidas que buscan forjar humanidad y 
                territorio.
                </p>
            </div>

        </div>

        <div className='container'>
            <div className='col'>
                <h1 className='col__subtitle'> Semana del Voluntariado 2020</h1>
                <Image
                    src={imgsemana}
                    alt="semana voluntariado"
                    className="col__image"
                    quality={100}
                />
            </div>
            <div className='col'>
                <p>
                <br /><br />Es un honor para nosotros haber recibido el Reconocimiento al Voluntariado de Medellín 
                2020 en la categoría universitaria, lo que ratifica que en la Universidad EAFIT estamos comprometidos 
                con la transformación social de la ciudad y es un gran motivador para seguir trabajando desde el 
                Voluntariado con solidaridad, empatía e inclusión.​
                </p>
            </div>

        </div>
        
    </section>
      
    </>
  )
}

export default QuienesSomos;
