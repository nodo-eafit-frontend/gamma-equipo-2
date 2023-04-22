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
          padding: '2rem'
        }}
      >
        Documento de Identificación
      </h2>
      <div className="contentDonacion__row">
        <div className="contentDonacion__row--1">
        <SelectList />
        </div>
        <div className="contentDonacion__row--2">
        <SelectList />
        </div>
        
      </div>
      <InputNumber />
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
          <InputText />
          <InputText />
          <InputText />
          <InputText />
        </div>
        <div className="contentDonacion__column--2">
          <SelectList />
          <SelectList />
          <InputNumber />
          <InputEmail />
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
          <InputDate />
          <SelectList />
        </div>
        <div className="contentDonacion__column2--2">
          <InputText />
          <InputText />
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
          <InputText />
          <SelectList />
        </div>
        <div className="contentDonacion__column3--2">
          <InputText />
          <InputText />
        </div>
      </div>

      <ButtonSiguiente />
    </div>
  );
};

export default Donar;
