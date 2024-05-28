import Services from '../services/Services'
import styles from './Section2.module.scss'

const Section2 = () => {
return (
    <section className={`section container`}>
        <header className={`section__header`}>
            <h2 className={`section__title puddle-bg`}>Services</h2>
            <div className={`section__description`}>
                <p>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
            </div>
        </header>
        <div className={`section__body`}>
          <Services/>
        </div>

    </section>
)
}

export default Section2
