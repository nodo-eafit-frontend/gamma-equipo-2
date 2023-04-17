'use client';
import React from 'react';
import Image from 'next/image';
import imgEquidad from '../../assets/paginaCausas/1equidadSocialEInclusion.jpg'
import imgBecas from '../../assets/paginaCausas/5FondoDeBecas.png'

const EquidadSocial = () => {    
    return (
        <>
		<section>
			<div className='container'>

                <div className='col'>
                    <Image
                        src={imgEquidad}
                        alt="equidad social"
                        className="header-causas__image"
                        quality={100}
                    />
                    <h1 className='col__title'>
                        Equidad Social e Inclusión

                    </h1>
                </div>

                <div className='col'>
                    <p>
                        <br /><br />En Colombia, más de dos millones de jóvenes se inscriben a una Institución de Educación 
                        Superior, pero solo el 41% logra matricularse. En Antioquia, de cada 10 jóvenes entre los 
                        17 y 21 años, solo 5 ingresan a una Institución de Educación Superior.<br /><br /> 
                        En Medellín, de cada 100 estudiantes que culminan el grado 11, solo 48 hacen tránsito 
                        inmediato a la Educación Superior. Con Filantropía EAFIT, la Universidad, con el apoyo 
                        de diversos aliados, ha logrado otorgar más de 2.540 becas cada semestre.<br /> <br /> 
                            
                    </p>
                    
                </div>
                
            </div>
            
            <div className='container'>
                <div className='col'>
                    <h1 className='col__subtitle'>
                        Conoce el fondo de Becas
                    </h1>
                    <Image
                        src={imgBecas}
                        alt='fondo becas'
                        className='col__image'
                        quality={100}
                    />                        
                </div>
                <div className='col'>
                    <p>
                        <br />Brindamos acceso a la Universidad EAFIT a jóvenes que cuentan con un excelente desempeño 
                        académico y que no disponen de los recursos económicos para asumir el valor de la matrícula 
                        en la Institución. <br/>
                        Gracias a tus aportes a nuestro fondo de becas, lograremos que muchos más estudiantes puedan 
                        acceder a una institución de alta calidad que ayudará a que la vida de estos jóvenes se transforme
                        para siempre logrando así una sociedad más equitativa.
                                
                    </p>                        
                </div>

            </div>              
      </section>
      </>
	);
};

export default EquidadSocial;

/* const FondoBecas = () => {    

    return (
    <>
      <div className='container'>
                <div className='col'>
                    <div className='col-ex'>
                        <h1 className='col-ex__subtitle'>
                            Conoce el fondo de Becas
  
                        </h1>
                        <Image
                            src={imgBecas}
                            alt='fondo becas'
                            className='header-causas__image'
                            quality={100}
                        />
                        
                    </div>
                </div>
  
                <div className='col'>
                    <div className='col-ex'>
                        <p>
                            Brindamos acceso a la Universidad EAFIT a jóvenes que cuentan con un excelente desempeño 
                            académico y que no disponen de los recursos económicos para asumir el valor de la matrícula 
                            en la Institución. <br/>
                            Gracias a tus aportes a nuestro fondo de becas, lograremos que muchos más estudiantes puedan 
                            acceder a una institución de alta calidad que ayudará a que la vida de estos jóvenes se transforme
                            para siempre logrando así una sociedad más equitativa.
                                
                        </p>
                        
                    </div>
                </div>                
            </div>
            
    </>
  );
  };
  export default FondoBecas; */


/* const Equidadsocial = ({info}) => {
    const {title,body} = info;
        return (
            <>
            <div className='container'>
                <div className='col col-ex'>
                        <section>
                            <Image
                                src={imgEquidad}
                                alt="equidad social"
                                className="header-causas__image"
                                quality={100}
                            />
                            <div>
                                {equidadsocial.map(({title, body}) =>(
                                    <div>
                                        <h1 className='col-ex__title'>
                                            {title}
                                        </h1>
                                        <div className='col col-ex'>
                                            <p>
                                                {body}
                                            </p>
                                        </div>
                                    </div>

                                ))}
                            </div>
                        </section>
                </div>
            </div>
            </>
        );
};
export default Equidadsocial;  */
