'use client';
import React from 'react';
import QuienesSomos from './quienes-somos';
import Beneficios from './beneficios';
import FormasVoluntariado from './formas-voluntariado';
import Modalidades from './modalidades';
import '../../../../../styles/components/paginaCausas/_bloque.scss';

const pageVol = () => {
  return (
    <>
      <section>
        <div className='linea__small'/>
        <QuienesSomos/>
        <div className='linea'/>

        <Beneficios/>
        <div className='linea'/>

        <FormasVoluntariado/>
        <Modalidades/>
        <div className='linea'/>
      </section>
    </>
  )
}

export default pageVol
