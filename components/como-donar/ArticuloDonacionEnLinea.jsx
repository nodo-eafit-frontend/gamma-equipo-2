import React from 'react'
import imgDonacionLinea from '../../assets/como-donar/donacionlinea.png';
import Image from 'next/image';
import "../../styles/components/como-donar/comoDonar.scss";
export default function ArticuloDonacionEnLinea() {
  return (
    <article id="article1">
      <div className='row'>
        <div className='col-md-2'>
          <figure class="float-left">
            <Image
              src={imgDonacionLinea}
              alt="DonacionLinea"
              quality={100}
            />
          </figure>
        </div>
        <div className='col-md-10'>
          <h2>Donación ​en línea</h2>
          <p>De forma fácil y segura realiza la donación con ta​rjeta de crédito o débito​ haciendo clic en el
            í​​cono o ​​​a través ​de ​​nuestro siti​o web de donaciones​.
          </p>
        </div>
      </div>
    </article>
  )
}
