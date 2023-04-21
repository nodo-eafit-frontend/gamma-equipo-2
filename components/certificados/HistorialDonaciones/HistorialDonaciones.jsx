import NoTienesCertificados from "../NoTienesCertificados/NoTienesCertificados";
import TienesCertificados from "../TienesCertificados/TienesCertificados";
import styles from "./HistorialDonaciones.module.scss";

export default function Historialdonaciones({registro}) {
  
  const { donation, donation__history } = styles;

  return (
    <div className={donation}>
      <p className={donation__history}>Historial de donaciones</p>
      {registro === true ? <TienesCertificados /> : <NoTienesCertificados /> }
    </div>
  );
}
