'use client';

import React, { useState } from "react";
import Image from "next/image";
import quetemotiva from "../../../assets/donaciones/quetemotiva.png";
import Link from "next/link";
import styles from  "./InformacionDeDonacion.module.scss";
import { Switch } from "antd";
import { Checkbox } from "antd";
import Botones from "../Botones/Botones";



export default function InformacionDeDonacion() {

const { formdonaciones, formdonaciones__infodonaciones, formdonaciones__img, formdonaciones__input, formdonaciones__group, recurrencia, terminosyc, preguntasf } = styles;

const {toggle, seToggle} = useState(false);
const toggler =() => {
  toggle ? seToggle (false) : seToggle (true);
}

  return (
    <div className={formdonaciones}>
      <div className={formdonaciones__img}>
        <Image 
          src={quetemotiva}
          alt="Que te motiva"
          quality={100}
          className={formdonaciones__img}
        />
      </div>
      <h1 className={formdonaciones__infodonaciones}>Información de donación</h1>
      <form className={formdonaciones}>
        <div className={formdonaciones__group}>
          <label htmlFor="tipo-fondo">Fondo Donación</label>
          <select id="tipo-fondo" className={formdonaciones__input}>
            <option></option>
            <option>Cultura</option>
            <option>Deporte</option>
            <option>Fondo de becas</option>
            <option>Fondo de negocios internacionales</option>
            <option>Movilidad internacional</option>
          </select>
        </div>
        <div className={formdonaciones__group}>
          <label htmlFor="medio">Medio por el que se entero del centro de Filantropía
          </label>
          <select id="medio" className={formdonaciones__input}>
            <option></option>
            <option>Carta</option>
            <option>Correo electronico</option>
            <option>Evento egresado</option>
            <option>Evento general</option>
            <option>Ninguno</option>
            <option>Pagina web</option>
            <option>Redes sociales</option>
            <option>Referido</option>
            <option>Telefono</option>
            <option>Visita</option>
          </select>
        </div>

        <label htmlFor="valor-a-donar">
          Valor a donar (Pesos Colombianos COP)
        </label>
        <input
          id="valor-a-donar"
          type="text"
          placeholder="Valor a donar (Pesos Colombianos COP)" className={formdonaciones__input}/><br />

        <div className={recurrencia}>
            <p>Recurrecia</p>
            <Switch onClick={toggler}/>
            {toggle ?<span>Si!</span> : <span></span>}
        </div><br/> 

        <div className={formdonaciones__group}>
        <label htmlFor="periodicidad">Periodicidad</label>
        <select id="periodicidad" className={formdonaciones__input}>
          <option></option>
          <option>A - Semanal</option>
          <option>B - Quincenal</option>
          <option>C - Mensual</option>
          <option>D - Bimestral</option>
          <option>Diaria</option>
          <option>E - Trimestral</option>
          <option>F - Semestral</option>
          <option>G - Anual</option>
        </select>
      </div>
      </form>

      <div>
      <Botones />
      </div>
      <label>
        <Checkbox />
        <Link
          href="https://www.eafit.edu.co/institucional/centro-filantropia/Paginas/terminos-condiciones-uso-sitio-web-donaciones.aspx"  className={terminosyc} target="_blank">
          Aceptar términos y condiciones
        </Link> 
        </label> <br />
        <Link href="/" className={preguntasf}>
          Preguntas frecuentes
        </Link>
    </div>
  );
}
