import React from 'react'
import imgTiempo from '../../assets/como-donar/tiempoytalento.png';
import Image from 'next/image';

export default function ArticuloTiempoTalento() {
    return (
        <article id="article7">
            <div className='row'>
                <div className='col-md-2'>
                    <figure class="float-left">
                        <Image
                            src={imgTiempo}
                            alt="Cheque"
                            className="float-left"
                            quality={100}
                        />
                    </figure>
                </div>
                <div className='col-md-10'>
                    <h2>Tiempo y talento</h2>
                    <p>Puedes donar tu tiempo, talento y/o conocimiento participando de los diferentes proyectos
                        de voluntariado en temas comunitarios, sociales, culturales, educativos y filantrópicos,
                        contribuyendo con la transformación social del país y obteniendo incontables experiencias
                        que le aportarán ​a tu proyecto de vida. Únete.
                        Ingresa y diligencia el formulario haciendo clic aquí
                    </p>
                </div>
            </div>
        </article>
    )
}
