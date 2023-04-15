import { ButtonConsultar } from "@/components/certificados/ButtonConsultar";
import { ButtonRegresar } from "@/components/certificados/ButtonRegresar";
import Historialdonaciones from "@/components/certificados/HistorialDonaciones";
import NumeroDoc from "@/components/certificados/NumeroDoc";
import SeleccionarTipoDoc from "@/components/certificados/SeleccionarTipoDoc";
import TipoDoc from "@/components/certificados/TipoDoc";
import TituloCertificados from "@/components/certificados/Titulo";
import React from "react";

const FormCertificados = () => {
  return (
    <div className="page">
      <TituloCertificados />
      <TipoDoc />
      <SeleccionarTipoDoc />
      <NumeroDoc />
      <ButtonRegresar />
      <ButtonConsultar />
      <Historialdonaciones />

    </div>
  );
};

export default FormCertificados;
