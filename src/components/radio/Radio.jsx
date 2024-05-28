import styles from './Radio.module.scss'

const Radio = ({title, requestType, handleRadioChange}) => {
  return (
    <label className={`${styles.radios__item} ${styles.radio}`}>
                            <input className={`${styles.radio__input} visually_hidden`} type="radio" name='request-type' value={title}
                                checked={requestType === title}
                                onChange={handleRadioChange} />
                            <span className={styles.radio__emulator}></span>
                            <span className={styles.radio__label}>{title}</span>
                        </label>
  )
}

export default Radio
