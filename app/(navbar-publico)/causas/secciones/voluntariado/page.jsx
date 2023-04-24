'use client';
import React from 'react';
import QuienesSomos from './quienes-somos';
import Beneficios from './beneficios';
import '../../../../../styles/components/paginaCausas/_bloque.scss';

const pageVol = () => {
  return (
    <>
      <section>
        <QuienesSomos/>
        <div className='linea'/>

        <Beneficios/>
        <div className='linea'/>
      </section>
    </>
  )
}

export default pageVol
