import './Banner.css'
import { AiFillLinkedin, AiOutlineGithub, AiOutlineInstagram } from 'react-icons/ai'

function Banner() {
  return (
    <section className='banner'>
        <div className='introduction'>
              <h1>Portfolio</h1>
              <h2>João Augusto</h2>
              <h3>Desenvolvedor fullstack</h3>
              <ul className='socialMedia'>
                <li><a href='https://github.com/joaoaugusto543'><AiOutlineGithub/></a></li>
                <li><a href='https://www.linkedin.com/in/joao-augusto-correia-lopes-6bb08b239/'><AiFillLinkedin/></a></li>
                <li><a href='https://www.instagram.com/joao_correia_lopes/'><AiOutlineInstagram/></a></li>
              </ul>
          </div>
    </section>
  )
}

export default Banner