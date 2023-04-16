import React from 'react'
import imgBancolombia from '../../assets/como-donar/conveniobancolombia.png';
import Image from 'next/image';

export default function ArticuloConvenioBancolombia() {
    return (
        <article id="article2">
            <figure class="float-left">
                <Image
					src={imgBancolombia}
					alt="Bancolombia"
					quality={100}
				/>
            </figure>
            <h2>Convenio Bancolombia</h2>
            <p>Puedes programar tus donaciones recurrentes desde la sucursal virtual personas inscribiendo el convenio No. 76787 a nombre de EAFIT CENTRO FILANTROPÍA
                por la opción “pagos facturas” o puedes acercarte a cualquier sucursal Bancolombia y solicitar la inscripción al mismo convenio​.​</p>
        </article>
    )
}
