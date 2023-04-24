import React from 'react'
import imgNomina from '../../assets/como-donar/deduccionnominaempleados.png';
import Image from 'next/image';
import "../../styles/components/como-donar/comoDonar.scss";
export default function ArticuloDeduccion() {
    return (
        <article id="article6">
            <div className='row'>
                <div className='col-md-2'>
                    <figure class="float-left">
                        <Image
                            src={imgNomina}
                            alt="Nomina"
                            className="float-left"
                            quality={100}
                        />
                    </figure>
                </div>
                <div className='col-md-10'>
                    <h2>Deducción de nómina para empleados</h2>
                    <p>Si eres profesor o empleado de la Universidad, puedes realizar tu donación ingr​esando a este link y diligenciando el formulario.
                        Si deseas hacerlo físico,​ ​descarga el formato de deducción de nómina​ y envíalo firmado, como documento adjunto, a los correos mavelasquc@eafit.edu.co​​ y ​​cfilant​ropia@eafit.edu.co.​​</p>
                </div>
            </div>
        </article>
    )
}
