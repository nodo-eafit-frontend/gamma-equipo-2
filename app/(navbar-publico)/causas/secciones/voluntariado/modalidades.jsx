'use client';
import React from 'react';
import Image from 'next/image';
import imgmFilantropia from '../../../../../assets/paginaCausas/mFilantropia.jpg';
import imgmrsu from '../../../../../assets/paginaCausas/mrsu.jpg';
import imgmAcademico from '../../../../../assets/paginaCausas/mAcademico.jpg';
import '../../../../../styles/components/paginaCausas/_voluntariado.scss';


const Modalidades = () => {
  return (
    <div>
      <h1 className='col__text'>Modalidades</h1>
        <div className='container'>
            <div className='col'>
                <h1 className='col__subtitle'>1. Filantropía</h1>
                <Image
                    src={imgmFilantropia}
                    alt="Filantropia"
                    className="col__image-2"
                    quality={100}
                />
            </div>
            <div className='col'>
                <p>
                <br />Esta modalidad tiene relación con todas las contribuciones en tiempo y conocimiento 
                que se realizan con la finalidad de gestionar recursos económicos para el otorgamiento de becas a 
                estudiantes de escasos recursos y/o con excelentes condiciones académicas, la financiación de 
                proyectos de investigación, de innovación y/o desarrollo institucional.<br />
                ​Los voluntarios que participan en esta modalidad podrán aprender sobre gestión de recursos para 
                financiar proyectos con impacto social, por lo cual hacen parte de un equipo filantrópico que apoya 
                temas de gestión, administrativos y logísticos en las diferentes campañas, eventos y actividades de 
                procuración de fondos.
                </p>
            </div>
        </div>
        <div className='container'>
            <div className='col'>
                <h1 className='col__subtitle'>1. Responsabilidad Social Universitaria - RSU</h1>
                <Image
                    src={imgmrsu}
                    alt="RSU"
                    className="col__image-2"
                    quality={100}
                />
            </div>
            <div className='col'>
                <p>
                <br />En esta modalidad están consideradas todas las formas, programas y proyectos 
                desplegados al interior de la política de RSU en los que la comunidad Eafitense y sus allegados 
                implementan programas o procesos de emprendimiento con el propósito de contribuir a la transformación 
                social y cultural de comunidades y entornos en situación de privación y/o vulnerabilidad, 
                evidenciada en sostenibilidad, calidad de vida y equidad.<br/>
                Se fortalece la relación Universidad - Comunidad por medio de tres líneas de acción, 
                Escuela Social una línea de gran valor por su apuesta para la equidad e inclusión ya que por 
                medio de ciclos de formación buscamos cerrar brechas de conocimiento y fortalecer capacidades. 
                Mentoría Estudiantil, línea que está tomando gran relevancia en el voluntariado pu​esto que permiten 
                acompañar, guiar, inspirar y motivar por medio de espacios de confianza y empatía a los mentorados, 
                favoreciendo su aprendizaje y fortalecimiento personal. Y finalmente, Servicio Social en el cual nuestros 
                voluntarios apoyan actividades logísticas y administrativas tanto en campañas como eventos de proyección social.
                </p>
            </div>
        </div>
        <div className='container'>
            <div className='col'>
                <h1 className='col__subtitle'>3. Académico</h1>
                <Image
                    src={imgmAcademico}
                    alt="Academico"
                    className="col__image-2"
                    quality={100}
                />
            </div>
            <div className='col'>
                <p>
                <br />Pertenece a esta modalidad de voluntariado todas las contribuciones en tiempo 
                y conocimiento que se realizan bajo los principios del voluntariado con el fin de complementar 
                las tareas misionales de la Universidad EAFIT en aprendizaje, descubrimiento y creación e interacción 
                con el entorno. Son proyectos con impacto social relacionados con grupos de investigación, 
                semilleros, Innovación EAFIT y proyectos de aula. Si haces parte de uno de ellos cuéntanos para articularnos.
                </p>
            </div>
        </div>
    </div>
  );
};

export default Modalidades;

