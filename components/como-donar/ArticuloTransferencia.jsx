import React from 'react'
import imgTransferenciaQR from '../../assets/como-donar/transferenciaqr.jpg';
import Image from 'next/image';

export default function ArticuloTransferencia() {
    return (
        <article id="article3">
            <div className='row'>
                <div className='col-md-2'>
                    <figure class="float-left">
                        <Image
                            src={imgTransferenciaQR}
                            alt="TransferenciaQR"
                            className="float-left"
                            quality={100}
                        />
                    </figure>
                </div>
                <div className='col-md-10'>
                    <h2>Tranferencia con código QR:</h2>
                    <p>Selecciona la opción “Transferencias”, luego elige la opción “con código QR” y escoge “Transferir usando la cámara.”
                        Desde la sucursal virtual, la app personas o directamente desde una oficina:
                        A la cuenta de ahorros Bancolombia número 935-948075-78 a nombre de la Universidad EAFIT.​​​</p>
                </div>
            </div>
        </article>
    )
}
