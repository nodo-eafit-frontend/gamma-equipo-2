import React from 'react'
import imgDonacionLinea from '../../assets/como-donar/donacionlinea.png';
  import Image from 'next/image';

export default function ArticuloDonacionEnLinea() {
  return (
    <article id="article1">
      <figure class="float-left">
        <Image
					src={imgDonacionLinea}
					alt="DonacionLinea"
					className="float-left"
					quality={100}
				/>
      </figure>
      <h2>Donación ​en línea</h2>
      <p>De forma fácil y segura realiza la donación con ta​rjeta de crédito o débito​ haciendo clic en el
        í​​cono o ​​​a través ​de ​​nuestro siti​o web de donaciones​.
      </p>
    </article>
  )
}
