import styles from "./HistorialDonaciones.module.scss";

export default function Historialdonaciones() {
  
  const { donation, donation__history } = styles;

  return (
    <div className={donation}>
      <p className={donation__history}>Historial de donaciones</p> 
    </div>
  );
}
