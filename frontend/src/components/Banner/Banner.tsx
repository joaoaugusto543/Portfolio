import { AiFillLinkedin, AiOutlineGithub, AiOutlineInstagram } from 'react-icons/ai'
import styles from './Banner.module.css'

function Banner() {
  return (
    <section className={styles.banner}>
        <div className={`${styles.banner_content} container`}>
            <div className={styles.banner_text}>
                <div className={styles.height}>
                    <h1>João Augusto</h1>
                </div>
                <h2>Desenvolvedor fullstack</h2>
                <ul className={styles.socialMedia}>
                    <li><a href='https://github.com/joaoaugusto543'><AiOutlineGithub/></a></li>
                    <li><a href='https://www.linkedin.com/in/joao-augusto-correia-lopes-6bb08b239/'><AiFillLinkedin/></a></li>
                    <li><a href='https://www.instagram.com/joao_augusto_dev/'><AiOutlineInstagram/></a></li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Banner
