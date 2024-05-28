import styles from './SubscribeForm.module.scss'

const SubscribeForm = () => {
    return (
    <form className={`${styles.footer__subscribe_form} ${styles.subscribe_form}`}>
        <h2 className={`visually_hidden`}>Subscription</h2>
        <div className={`${styles.subscribe_form__field} ${styles.field} ${styles['field--big-height']} ${styles['field--dark-bg']}`}>
            <label className={`${styles.field__label} visually_hidden`} htmlFor="subscribe-email">Email</label>
            <input type="email" className={styles.field__input} id='subscribe-email' name='email' placeholder='Email' required/>
        </div>
        <button className={`${styles.subscribe_form__button} button button--accent`} type='submit'>Subscribe to news</button>
    </form>
    )
}

export default SubscribeForm
