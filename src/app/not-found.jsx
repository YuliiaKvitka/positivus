import styles from './NotFound.module.scss'

const NotFound = () => {
  return (
    <div className={`${styles.wrapper} container`}>
    
      <div className={styles.container} data-text="404">
        <div className={`${styles.title} ${styles.glitch}`} data-text="404">
            404
        </div>
        <div className={`${styles.description} ${styles.glitch}`} data-text="PAGE NOT FOUND">
            PAGE NOT FOUND
        </div>
    </div>
  
</div>
  )
}

export default NotFound
