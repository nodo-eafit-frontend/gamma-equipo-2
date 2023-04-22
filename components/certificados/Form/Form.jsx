import styles from "./Form.module.scss";

export default function Form() {
  const { form, form__group, form__input, form__button } = styles;

  return (
    <form className={form}>
      <div className={form__group}>
        <label htmlFor="tipo-documento">Tipo de documento</label>
        <select id="tipo-documento" className={form__input}>
          <option>Seleccione su tipo de documento</option>
          <option>Documento de identidad país de origen</option>
          <option>Documento naconional identidad</option>
          <option>Identificación nacional</option>
          <option>NIT</option>
          <option>Pasaporte</option>
          <option>Cédula de ciudadanía</option>
          <option>Cédula de extranjería</option>
        </select>
      </div>
      <div className={form__group}>
        <label htmlFor="numero-documento">Número de documento</label>
        <input className={form__input} id="numero-documento" type="text" />
      </div>
      <div className={styles["form__group--buttons"]}>
        <button
          className={`${form__button} ${styles["form__button--primary"]}`}>
          Consultar Certificados
        </button>
        <button
          className={`${form__button} ${styles["form__button--secondary"]}`}>
          Regresar
        </button>
      </div>
    </form>
  );
}