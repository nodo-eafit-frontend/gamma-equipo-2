'use client';
import React from 'react';
import Image from 'next/image';
import imgcertificados from '../../../../../assets/paginaCausas/certificacion.jpg';
import imgInsignia1 from '../../../../../assets/paginaCausas/insigniaLider.png';
import imgInsignia2 from '../../../../../assets/paginaCausas/insigniaFilantropia.png';
import '../../../../../styles/components/paginaCausas/_voluntariado.scss';


const Beneficios = () => {
  return (
    <>
      <section>
        <h1 className='col__title'>Beneficios</h1>
        <div className='container'>
            <p className='col__encabezado'>
            <br />Participar del Voluntariado EAFIT te permite fortalecer cualidades y competencias entre las cuales 
                se destacan la empatía, habilidades comunicativas, liderazgo, trabajo en equipo y 
                creatividad e innovación, también canalizar tu vocación y deseo desinteresado de contribuir a la 
                transformación social, igualmente, favorece la adquisición de nuevo conocimiento y experiencia en 
                proyectos y problemáticas sociales.
                <br /><br />Tú decides cuánto tiempo dedicar según el proyecto de voluntariado y disponibilidad con que cuentes, 
                sin embargo, realizar mínimo 20 horas de voluntariado y participar de las capacitaciones te harán merecedor 
                de una insignia digital.
            </p>
        </div>
        <h2 className='col__text'><br />Certificados</h2>
        <div className='container'>
            <div className='col'>
                <h1 className='col__subtitle'>Certificación</h1>
                <Image
                    src={imgcertificados}
                    alt="certificacion"
                    className="col__image-2"
                    quality={100}
                />
            </div>
            <div className='col'>
                <p>
                <br /><br />Participar en algún proyecto de voluntariado en EAFIT te permite validar horas de labor social 
                por medio de un certificado, el cual puedes presentar a los fondos de becas si cuentas con una, o anexar como 
                experiencia a tu hoja de vida para aplicar a un empleo.
                </p>
            </div>

        </div>
      </section>

      <section>
        <h2 className='col__text'><br />Insignias digitales</h2>
        <div className='container'>
            <div className='col'>
                <Image
                    src={imgInsignia1}
                    alt="insignia oro"
                    className="col__image"
                    quality={100}
                />
                <Image
                    src={imgInsignia2}
                    alt="insignia plata"
                    className="col__image"
                    quality={100}
                />
            </div>
            <div className='col'>
                <p>
                <br /><br />Tú decides cuánto tiempo dedicar según el proyecto de voluntariado y disponibilidad 
                con que cuentes, sin embargo, realizar mínimo 20 horas de voluntariado y participar al menos de una 
                capacitación te hará merecedor de una insignia digital que puedes publicar en tus redes sociales, 
                la cual reconoce y visibiliza tus logros marcando la diferencia, abriéndote puertas a nu​​evas oportunidades 
                laborales, académicas o profesionales.
                </p>
            </div>

        </div>
      </section>
    </>
  )
}

export default Beneficios;
