// 'use client'

import { useState } from "react";
import styles from "./Form.module.scss";
import Link from "next/link";


export default function Form ({useRegistro}) {
  const { form, form__group, form__input, form__button } = styles;

  const handleSubmit = (event) => {
    event.preventDefault();
    useRegistro(true)
  }

  return (
    <form onSubmit={handleSubmit} className={form}>
      <div className={form__group}>
        <label htmlFor="tipo-documento">Tipo de documento</label>
        <select id="tipo-documento" className={form__input}>
          <option disabled selected>
            Seleccione su tipo de documento
          </option>
          <option>Cédula de ciudadanía</option>
          <option>Cédula de extranjería</option>
          <option>Identificación nacional</option>
          <option>NIT</option>
          <option>Pasaporte</option>
          <option>Documento de identidad país de origen</option>
          <option>Documento nacional identidad</option>
        </select>
      </div>
      <div className={form__group}>
        <label htmlFor="numero-documento">Número de documento</label>
        <input className={form__input} id="numero-documento" type="text" />
      </div>
      <div className={styles["form__group--buttons"]}>
        <button className={`${form__button} ${styles["form__button--primary"]}`}>
            Consultar Certificados
        </button>
        <button>
          <Link href="/" className={`${form__button} ${styles["form__button--secondary"]}`} >
            Regresar
          </Link>
        </button>
      </div>
    </form>
  );
}
