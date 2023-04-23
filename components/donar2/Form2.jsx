'use client';

import React, { useState } from "react";
import Image from "next/image";
import quetemotiva from "../../assets/donaciones/Quetemotiva.png";
import Link from "next/link";
import styles from  "./FormD.module.scss";
import { Switch } from "antd";
import { Checkbox } from "antd";



export default function InformacionDeDonacion() {

const { formdonaciones, infodonaciones, image, formdonaciones__input, formdonaciones__group, recurrencia } = styles;

const {toggle, seToggle} = useState(false);
const toggler =() => {
  toggle ? seToggle (false) : seToggle (true);
}

  return (
    <div className={formdonaciones}>
      <div className={image}>
        <Image
          src={quetemotiva}
          alt="Que te motiva"
          quality={100}
        />
      </div>
      <h1 className={infodonaciones}>Informacion de Donación</h1>
      <form className= {formdonaciones}>
        <div className= {formdonaciones__group}>
          <label htmlFor="tipo-fondo">Fondo Donacion</label>
          <select id="tipo-fondo" className={formdonaciones__input}>
            <option></option>
            <option>CULTURA</option>
            <option>DEPORTE</option>
            <option>FONDO DE BECAS</option>
            <option>FONDO DE NEGOCIOS INTERNACIONALES</option>
            <option>MOVILIDAD INTERNACIONAL</option>
          </select>
        </div>
        <div>
          <label htmlFor="medio">
            Medio por el que se entero del centro de filantropía
          </label>
          <select id="medio">
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
          placeholder="Valor a donar (Pesos Colombianos COP)"
        />
        
        
        <div className={recurrencia}>
            <p>Recurrecia</p>
            <Switch onClick={toggler}/>
            {toggle ?<span>Si!</span> : <span></span>}
        </div>

        <div className={formdonaciones__input}>
          <label htmlFor="periodicidad">Periodicidad</label>
          <select id="periodicidad">
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
        <label>
        <Checkbox />
        <Link
          href="https://www.eafit.edu.co/institucional/centro-filantropia/Paginas/terminos-condiciones-uso-sitio-web-donaciones.aspx" target="_blank">
          Aceptar términos y condiciones
        </Link> 
        </label>
        <Link href="/" target="_blank">
          Preguntas frecuentes
        </Link>
      </form>
    </div>
  );
}
