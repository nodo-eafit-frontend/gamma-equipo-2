'use client';
import React from 'react';
import Image from 'next/image';
import imgTransf from '../../../assets/paginaCausas/3transformacionHumanistica.jpg';
import imgCultura from '../../../assets/paginaCausas/6Cultura.png';
import imgDeporte from '../../../assets/paginaCausas/7Deporte.png';
import '../../../styles/components/paginaCausas/_flexbox.scss';

const TransformacionH = () => {
    
    return (
		<>
			<div className='container'>
                    <div className='col'>
                        <Image
							src={imgTransf}
							alt="transformacion humanistica"
							className="header-causas__image"
							quality={100}
						/>
                        <h1 className='col__title'>
                            Transformación Humanística

                        </h1>
                    </div>

                    <div className='col'>
                        <p>
                            <br />EAFIT es una Universidad que a lo largo de su historia ha promovido el desarrollo del arte, 
                            el deporte y la cultura como parte fundamental de la institución, adicionalmente en más de 
                            medio siglo de existencia, la Universidad se ha preocupado por ofrecer la mejor infraestructura 
                            para el desarrollo de las actividades universitarias, en un ambiente que favorece el bienestar 
                            de sus estudiantes, empleados, docentes y visitantes.<br /> La formación no se da solo en las aulas, 
                            también en diferentes espacios deportivos, artísticos y culturales. Con tus aportes a esta causa 
                            contribuyes a la creación de un ambiente que favorece el aprendizaje integral de su comunidad.
                        </p>
                    </div>
                                                      

            </div>
            <h1 className='col__subtitle'>Conoce los fondos a los que puedes aportar</h1>
            <div className='container'>
                <div className='col'>
                    <Image
                        src={imgCultura}
                        alt="transformacion humanistica"
                        className="col__image"
                        quality={100}
                    />
                </div>
                <div className='col'>
                    <h2 className='col__sub'>Cultura</h2>
                    <p>
                        Apoyamos actividades culturales y artísticas de la Universidad, 
                        tales como obras de literatura, arte, películas, documentales, 
                        música, entre otras. Además, con esta iniciativa se contribuye 
                        al fortalecimiento del acervo documental de la Universidad.</p>
                </div>
            </div>
            <section>
                <div className='container'>
                    <div className='col'>
                        <Image
                            src={imgDeporte}
                            alt="transformacion humanistica"
                            className="col__image"
                            quality={100}
                        />
                    </div>
                    <div className='col'>
                        <h2 className='col__sub'>Deporte</h2>
                        <p>
                        Fomentamos el deporte y contribuimos al desarrollo integral de los deportistas de 
                        EAFIT en diferentes competencias y eventos a nivel representativo de la Institución.
                        </p>
                    </div>
                </div>
            </section>

		</>
	);
};

export default TransformacionH;