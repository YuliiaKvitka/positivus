import styles from './Banner.module.scss'

const Banner = () => {
  return (
     <div className={`services__banner ${styles.banner}`}>
                    <div className={styles.banner__inner}>
                        <div className={styles.banner__body}>
                            <h3 className={styles.banner__title}>Let’s make things happen</h3>
                            <div className={styles.banner__description}>
                                <p>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
                            </div>
                            <button className={`banner__button button`} type='button'>Get your free proposal</button>
                        </div>
                      
                        <img src="/assets/services/banner_img.svg" alt="" className={`${styles.banner__image} hidden_mobile`} width={494} height={394} loading='lazy'/>
                    </div>
                </div>
  )
}

export default Banner
