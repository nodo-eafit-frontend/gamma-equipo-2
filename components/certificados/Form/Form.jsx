import styles from './Form.module.scss'

export default function Form() {
    const { form, form__group, form__input, form__button } = styles

    return (
        <form className={form}>
            <div className={form__group}>
                <label htmlFor="tipo-documento">Tipo de documento</label>
                <select id="tipo-documento" className={form__input}>
                    <option value="">Seleccione</option>
                    <option value="test">test</option>
                </select>
            </div>
            <div className={form__group}>
                <label htmlFor="numero-documento">Número de documento</label>
                <input className={form__input} id="numero-documento" type="text" />
            </div>
            <div className={styles['form__group--buttons']}>
                <button className={`${form__button} ${styles['form__button--primary']}`}>Consultar Certificados</button>
                <button className={`${form__button} ${styles['form__button--secondary']}`}>Regresar</button>
            </div>
        </form>
    )
}
