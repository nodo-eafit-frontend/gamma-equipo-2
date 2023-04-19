
import Form from "@/components/certificados/Form/Form";
import Historialdonaciones from "@/components/certificados/HistorialDonaciones/HistorialDonaciones";
import Titulo from "@/components/certificados/Titulo/Titulo";
import { ButtonDonar } from "@/components/paginaInicial/Button";

const Certificados = () => {
  return (
    <div>
      <Titulo />
      <ButtonDonar />
      <Form />
      <Historialdonaciones />
    </div>
  );
};

export default Certificados;
