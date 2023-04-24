import React from 'react'
import imgPersonalmente from '../../assets/como-donar/personalmente.png';
import Image from 'next/image';
import "../../styles/components/como-donar/comoDonar.scss";
export default function ArticuloPersonalmente() {
    return (
        <article id="article5">
            <div className='row'>
                <div className='col-md-2'>
                    <figure class="float-left">
                        <Image
                            src={imgPersonalmente}
                            alt="Personalmente"
                            className="float-left"
                            quality={100}
                        />
                    </figure>
                </div>
                <div className='col-md-10'>
                    <h2>Personalmente en la universidad EAFIT</h2>
                    <p>Dirígete a la caja principal del campus en Medellín, ubicado ​en la ​c​ra 49 #7 Sur-50 Bloque 29, piso 1.​</p>
                </div>
            </div>
        </article>
    )
}
