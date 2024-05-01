import Perfil from '../../../image/perfil.jpg'
import Curriculum from '../../../docs/curriculum.pdf'
import styles from './About.module.css'

function About() {
  return (
    <section className={`${styles.sectionAbout} container about`}>
        <div className={styles.about}>
          <img className='image' src={Perfil} alt='foto de perfil' />
          <div className={`${styles.description} description`}>
              <p>Busco oportunidades desafiadoras que me permitam aplicar minha paixão pelo desenvolvimento web e móvel,
                 aprimorando minhas habilidades no front-end e back-end, enquanto trabalho em projetos inovadores que explorem novas
                  tecnologias e soluções. Estou ansioso para enfrentar desafios complexos que me permitam expandir meu conhecimento 
                  e crescer profissionalmente, contribuindo para o sucesso da equipe e da empresa.
              </p>
              <a href={Curriculum} download={Curriculum}><button>Dowload cv</button></a> 
          </div>
        </div>  
      </section>
  )
}

export default About
