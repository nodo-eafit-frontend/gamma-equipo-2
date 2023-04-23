// import React from 'react'
import styles from './TienesCertificados.module.scss';


const TienesCertificados = () => {

  const { descargar } = styles;
  return (
    <h1 className={descargar}>Descarga aqui tus certificados
    {/* <button onclick="window.open(‘http://miweb.com/dir1/dir2/archivo.ext’)">Descargar</button> */}
    </h1>
  )
}

export default TienesCertificados;