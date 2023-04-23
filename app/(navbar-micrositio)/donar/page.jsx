import React from "react";

import { InputText } from "@/components/paginaDonaciones1/InputText";
import { ButtonSiguiente } from "@/components/paginaDonaciones1/ButtonSiguiente";
import { InputDate } from "@/components/paginaDonaciones1/InputDate";
import { SelectList } from "@/components/paginaDonaciones1/SelectList";
import { InputNumber } from "@/components/paginaDonaciones1/InputNumber";
import { InputEmail } from "@/components/paginaDonaciones1/InputEmail";

const Donar = () => {
  return (
    <div className="contentDonacion">
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "2.0rem",
          fontWeight: "700",
          fontFamily: "sans-serif",
          padding: '2rem',
        }}
      >
        Documento de Identificación
      </h2>
      <div className="contentDonacion__row">
        <div className="contentDonacion__row--1">
        <InputText type='text' id='paisDocumento' label='País' placeholder='País de documento'/>
        </div>
        <div className="contentDonacion__row--2">
        <SelectList label='Tipo de documento' id='tipoDocumento' />
        </div>
        
      </div>
      <InputNumber  type='tel' id='numeroTelefono' label='Número de documento' placeholder='Documento'/>
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "2.0rem",
          fontWeight: "700",
          fontFamily: "sans-serif",
          padding: '2rem'
        }}
      >
        Datos personales
      </h2>
      <div className="contentDonacion__column">
        <div className="contentDonacion__column--1">
          <InputText type='text' id='primerNombre' label='Primer nombre' placeholder='Su nombre'/>
          <InputText type='text' id='SegundoNombre' label='Segundo nombre' placeholder='Su nombre'/>
          <InputText type='text' id='primerApellido' label='Primer apellido' placeholder='Su apellido'/>
          <InputText type='text' id='SegundoApellido' label='Segundo Apellido' placeholder='Su apellido'/>
        </div>
        <div className="contentDonacion__column--2">
          <SelectList label='Género'/>
          <SelectList label='Estado civil'/>
          <InputNumber type='tel' id='numeroTelefono' label='Teléfono' placeholder='Númerotel'/>
          <InputEmail type='email' id='direccionEmail' label='Correo electrónico' placeholder='Email'/>
        </div>
      </div>
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "2.0rem",
          fontWeight: "700",
          fontFamily: "sans-serif",
          padding: '2rem'
        }}
      >
        Nacimiento
      </h2>
      <div className="contentDonacion__column2">
        <div className="contentDonacion__column2--1">
          <InputDate type='date' id='fechaNacimiento' label='Fecha de nacimiento'/>
          <InputText type='text' id='paisNacimiento' label='País de nacimiento' placeholder='Nacimiento'/>
        </div>
        <div className="contentDonacion__column2--2">
          <InputText type='text' id='departamentoNacimiento' label='Departamento de nacimiento' placeholder='Departamento'/>
          <InputText type='text' id='ciudadNacimiento' label='Ciudad de nacimiento' placeholder='Ciudad'/>
        </div>
      </div>
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "2.0rem",
          fontWeight: "700",
          fontFamily: "sans-serif",
          padding: '2rem'
        }}
      >
        Residencia
      </h2>
      <div className="contentDonacion__column3">
        <div className="contentDonacion__column3--1">
          <InputText type='text' id='direccionResidencia' label='Dirección residencia' placeholder='Direccion'/>
          <InputText type='text' id='paisResidencia' label='País de residencia' placeholder='País' />
        </div>
        <div className="contentDonacion__column3--2">
          <InputText type='text' id='departamentoResidencia' label='Departamento de residencia' placeholder='Departamento'/>
          <InputText type='text' id='ciudadResidencia' label='Ciudad de residencia' placeholder='Ciudad'/>
        </div>
      </div>

      <ButtonSiguiente />
    </div>
  );
};

export default Donar;
