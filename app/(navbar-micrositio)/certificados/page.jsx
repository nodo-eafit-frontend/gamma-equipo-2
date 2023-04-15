import Historialdonaciones from "@/components/certificados/HistorialDonaciones";
import MyApp from "@/components/certificados/MyButton";
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
      <MyApp />
      <Historialdonaciones />

    </div>
  );
};

export default FormCertificados;
