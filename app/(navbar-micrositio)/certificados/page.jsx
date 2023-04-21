'use client'

import Form from "@/components/certificados/Form/Form";
import Historialdonaciones from "@/components/certificados/HistorialDonaciones/HistorialDonaciones";
import Titulo from "@/components/certificados/Titulo/Titulo";
import { ButtonDonar } from "@/components/paginaInicial/Button";
import { useState } from "react";



const Certificados = () => {

  const [registro, useRegistro] = useState(false);
  return (
    <div>
      <Titulo />
      <ButtonDonar />
      <Form useRegistro={useRegistro}/>
      <Historialdonaciones registro={registro}/>
    </div>
  );
};

export default Certificados;
