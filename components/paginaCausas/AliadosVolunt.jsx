import React from 'react';
import Image from 'next/image';
import imagesAlVoluntariado from '@/data/causas/aliadosvoluntariado';
import '../../styles/components/paginaCausas/_aliadosVoluntariado.scss';

const AliadosVolunt = () => {
  return (
    <>
        <footer className='fotterVol'>
            <h2 className='footerVol__title'><br/><br/>Nuestros Aliados</h2>
            <section className='footerVol__container'>
                {imagesAlVoluntariado.map(({ id, infoImg, alt }) => (
                    <Image
                        key={id}
                        src={infoImg}
                        alt={alt}
                        width={100}
                        height={100}
                        className='footerVol__image'

                    />
                ))}
            </section>

        </footer>
      
    </>
  )
}

export default AliadosVolunt;
