import styles from './Partners.module.scss'

const Partners = () => {
  return (
    <div className={styles.partners}>
          <h2 className={`visually_hidden`}>Our partners</h2>
          
          <ul className={styles.partners_list}>
              
                <li className={styles.partners_item}>
                    <img src="/assets/partners/amazon.svg" alt="amazon" className={styles.partners_image} width={130} height={48} loading='lazy'/>
                </li>
                <li className={styles.partners_item}>
                  <img src="/assets/partners/dribbble.svg" alt="dribbble" className={styles.partners_image} width={130} height={48} loading='lazy'/>
                </li>
                        <li className={styles.partners_image}>
                  <img src="/assets/partners/hubspot.svg" alt="hubspot" className={styles.partners_image} width={130} height={48} loading='lazy'/>
                        </li>
                        <li className={styles.partners_image}>
                            <img src="/assets/partners/netflix.svg" alt="netflix" className={styles.partners_image} width={130} height={48} loading='lazy'/>
                        </li>
                        <li className={styles.partners_image}>
                            <img src="/assets/partners/notion.svg" alt="nnotion" className={styles.partners_image} width={130} height={48} loading='lazy'/>
                        </li>
                        <li className={styles.partners_image}>
                            <img src="/assets/partners/zoom.svg" alt="zoom" className={styles.partners_image} width={130} height={48} loading='lazy'/>
                        </li>
                    </ul>

                </div>
  )
}

export default Partners
