import './App.css';
import {AiOutlineGithub,AiFillLinkedin,AiOutlineInstagram} from 'react-icons/ai'
import Perfil from './image/perfil.jpg'
import Curriculum from './pdf/curriculum.pdf'

function App() {

  return (
    <>
      <section className="banner"> 
          <div className="photo"></div>
          <div className="introducao">
              <h1>Portfolio</h1>
              <h2>João Augusto</h2>
              <h3>Desenvolvedor fullstack</h3>
              <a href="https://github.com/joaoaugusto543/Portfolio"><button className='repositorio'>Repositório</button></a>
              <ul className='socialMedia'>
                <li><a href="https://github.com/joaoaugusto543"><AiOutlineGithub/></a></li>
                <li><a href="https://www.linkedin.com/in/joao-augusto-correia-lopes-6bb08b239/"><AiFillLinkedin/></a></li>
                <li><a href="https://www.instagram.com/joao_correia_lopes/"><AiOutlineInstagram/></a></li>
              </ul>
          </div>
      </section>
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
    </>
  );
}

export default App;
