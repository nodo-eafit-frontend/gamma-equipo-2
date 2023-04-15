import React from 'react'


export default function NumeroDoc ({children}) {
  return (
    <>
     <label htmlFor="number-doc" className='document__tipe'>Número de documento</label><br />
      <input className='document__tipe--num' type="text" name="number-doc" /><br />
    </>
  )
}