'use client';
import React from 'react';
import Image from 'next/image';
import imgDocente from '../../../../../assets/paginaCausas/iconoDocente.png';
import imgMentor from '../../../../../assets/paginaCausas/iconoMentor.png';
import imgApoyo from '../../../../../assets/paginaCausas/iconoApoyo.png';
import imgDiseno from '../../../../../assets/paginaCausas/iconoDiseño.png';
import '../../../../../styles/components/paginaCausas/_voluntariado.scss';



const FormasVoluntariado = () => {
  return (
    <>
      <section>
        <h1 className='col__title'>Formas de voluntariado</h1>
        <div className='container'>
            <p className='col__encabezado'>
            <br />El voluntariado se expresa a través de tres modalidades que presentaremos a continuación: 
            Filantropía, Responsabilidad Social Universitaria – RSU y Académico buscando así fortalecer la cultura 
            de la solidaridad y ​​la transformación social.
            </p>
        </div>
        <h2 className='col__text'><br />Roles</h2>
        <div className='container'>
            <div className='col'>            
                <Image
                    src={imgDocente}
                    alt="icono docente"
                    className="col__icono"
                    quality={100}
                    
                />
                <h1 className='col__subtitle'>Docente o facilitador</h1>
                <p>
                <br />Si tienes conocimientos en algún tema y quieres 
                compartir esos saberes con un grupo con el fin de fortalecer capacidades, puedes apoyarnos en este rol.​
                </p>
            </div>
            <div className='col'>
                <Image
                    src={imgMentor}
                    alt="icono mentor"
                    className="col__icono"
                    quality={100}
                    
                /><h1 className='col__subtitle'>Mentor o tutor</h1>
                <p>
                <br />Si quieres acompañar de forma más personalizada a estudiantes como modelo de inspiración y estímulo 
                con el fin de favorecer su aprendizaje y fortalecimiento personal, te necesitamos.
                </p>
            </div>
        </div>
        <div className='container'>
            <div className='col'>
                <Image
                    src={imgApoyo}
                    alt="icono apoyo"
                    className="col__icono"
                    quality={100}
                    
                /><h1 className='col__subtitle'>Apoyo estratégico</h1>
                <p>
                <br />Si te gustan las actividades puntuales donde puedes 
                responder rápidamente en la asignación de tareas puedes apoyarnos desde este rol.
                </p>
            </div>
            <div className='col'>
                <Image
                    src={imgDiseno}
                    alt="icono diseño"
                    className="col__icono"
                    quality={100}
                    
                /><h1 className='col__subtitle'>Diseño y comunicaciones</h1>
                <p>
                <br />Tienes habilidades para diseñar y/o comunicar ideas de forma creativa, te esperamos.​
                </p>
            </div>
        </div>
      </section>

      <section>
        <div className='container'>
        <p className='col__subtitle'>
            Estos son algunos de los conocimientos que siempre requerimos para desarrollar 
            los diferentes proyectos, escríbenos en c​​uál nos puedes apoyar:
        </p>
        </div>
        <div className='container'>
            <div className='col'>
                <p className='col__encabezado'>
                    -Resolución de con​​flictos​<br/>
                    -Trabajo en e​​quipo​<br/>
                    -Liderazgo Innovad​​or​<br/>
                    -Design Thinki​​ng​<br/>
                    -Mercadeo - Ventas - Co​​mercialización​<br/>
                    -Alianzas Est​​​ratégicas​<br/>
                    -Marketing ​​​digital​<br/>
                    -Manejo de redes​​ sociales​​<br/>
                </p>
            </div>
            <div className='col'>
                <p className='col__encabezado'>
                    -Desarrollo de aplicaciones<br/>
                    -Diseño de procesos<br/>
                    -Herramientas ofimáticas<br/>
                    -Diseño gráfico<br/>
                    -Diagramación<br/>
                    -Lenguajes de programación<br/>
                    -Diseño de páginas web<br/>
                    -Edición y creación de videos<br/>
                </p>
            </div>
        </div>
      </section>
    </>
  );
};

export default FormasVoluntariado;
