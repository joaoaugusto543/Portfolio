import { FaDatabase, FaGit, FaJava, FaNodeJs, FaReact } from 'react-icons/fa'
import { SiCypress, SiJavascript, SiJest, SiTestinglibrary, SiTypescript } from 'react-icons/si'
import styles from './Technologies.module.css'

function Technologies() {
  return (
    <ul className={`${styles.technologies} technologies`}>
        <li>
            <SiJavascript />
            <span>JavaScript</span>
        </li>
        <li>
            <SiTypescript />
            <span>TypeScript</span>
        </li>
        <li>
            <FaJava />
            <span>Java</span>
        </li>
        <li>
            <FaReact />
            <span>React</span>
        </li>
        <li>
            <FaNodeJs />
            <span>NodeJs</span>
        </li>
        <li>
            <FaDatabase />
            <span>Banco de dados</span>
        </li>
        <li>
            <SiCypress />
            <span>Cypress</span>
        </li>
        <li>
            <SiTestinglibrary />
            <span>Testing-library</span>
        </li>
        <li>
            <SiJest />
            <span>Jest</span>
        </li>
        <li>
            <FaGit />
            <span>Git</span>
        </li>
    </ul>
  )
}

export default Technologies
