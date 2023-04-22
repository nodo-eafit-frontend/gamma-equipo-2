import React from "react";
import Image from "next/image";
import Quetemotiva from "../../assets/donaciones/Quetemotiva.png";
import Link from "next/link";
import styles from  "./FormDonaciones2.module.scss";

export default function InformacionDeDonacion() {

const { formdonaciones } = styles;

  return (
    <div>
      <div>
        <Image
          src={Quetemotiva}
          alt="Que te motiva"
          quality={100}
        />
      </div>
      <h1>Informacion de Donación</h1>
      <form>
        <div>
          <label htmlFor="tipo-fondo">Fondo Donacion</label>
          <select id="tipo-fondo">
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

        <div>
          <label htmlFor="recurrencia">
            Recurrecia
            <span>Sí</span>
            <span>No</span>
          </label>
        </div>

        <div>
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

        <input type="checkbox" />
        <Link
          href="https://www.eafit.edu.co/institucional/centro-filantropia/Paginas/terminos-condiciones-uso-sitio-web-donaciones.aspx"
          target="blank"
        >
          Aceptar términos y condiciones
        </Link>

        <Link href="/" target="blank">
          Preguntas frecuentes
        </Link>
      </form>
    </div>
  );
}
