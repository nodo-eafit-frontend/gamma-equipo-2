import Form from "@/components/certificados/Form/Form";
import Historialdonaciones from "@/components/certificados/HistorialDonaciones/HistorialDonaciones";
import Titulo from "@/components/certificados/Titulo/Titulo";

const Certificados = () => {
  return (
    <div className="page">
      <Titulo />
      <Form />
      <Historialdonaciones />
    </div>
  );
};

export default Certificados;
