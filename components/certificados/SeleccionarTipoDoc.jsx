import React from 'react'

export default function SeleccionarTipoDoc() {
  return (
    <div>
       <select className='document__se'>
        <option></option>
        <option>Documento de identidad país de origen</option>
        <option>Documento naconional identidad</option>
        <option>Identificación nacional</option>
        <option>NIT</option>
        <option>Pasaporte</option>
        <option>Cédula de ciudadanía</option>
        <option>Cédula de extranjería</option>
      </select><br />
    </div>
  )
}