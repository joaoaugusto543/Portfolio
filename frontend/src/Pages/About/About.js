import './About.css'
import Perfil from '../../image/perfil.jpg'
import Curriculum from '../../docs/curriculum.pdf'

function About() {
  return (
    <section className='sectionAbout'>
        <h1>Sobre</h1>
        <div className='about'>
          <img src={Perfil} alt="foto de perfil" />
          <div className='description'>
              <h2>Sou João Augusto, desenvolvedor fullstack.</h2>
              <p>Eu me interesso muito pelo que eu faço, 
                busco me aperfeiçoar mais a cada dia e uso críticas como oportunidade para melhorar. 
                Faço sites usando React no front-end, NodeJs ou PHP no back-end e de banco de dados eu uso MySQL, PostgreSQL ou Mongodb </p>
              <a href={Curriculum} download={Curriculum}><button>Dowload cv</button></a> 
          </div>
        </div>  
      </section>
  )
}

export default About
