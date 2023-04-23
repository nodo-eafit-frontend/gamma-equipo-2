import React from 'react';
import styles from "./Botones.module.scss";
import Link from 'next/link';

const Botones = () => {
    const {grupobotones, grupobotones__boton} = styles;
  return (
    <div className={grupobotones}>
        <button className={`${grupobotones__boton} ${styles["grupobotones__boton--primario"]}`}>
            Realizar donación
        </button>
        <button className={`${grupobotones__boton} ${styles["grupobotones__boton--secundario"]}`}>
          <Link href="/">
            Regresar
          </Link>
        </button>
    </div>
  )
}

export default Botones