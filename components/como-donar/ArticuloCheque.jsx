import React from 'react'
import imgCheque from '../../assets/como-donar/chequeodonacionespecie.png';
import Image from 'next/image';

export default function ArticuloCheque() {
    return (
        <article id="article4">
            <figure class="float-left">
                <Image
					src={imgCheque}
					alt="Cheque"
					className="imagen4"
					quality={100}
				/>
            </figure>
            <h2>Cheque o donación en especie</h2>
            <p>Comunícate con Filantropía EAFIT:
                (57) 604​ 2619500 ext 9297
                cfilantropia@eafit.edu.co​</p>
        </article>
        
    )
}
