import { FaGithub } from 'react-icons/fa'
import projectInterface from '../../interfaces/projectInterface'
import styles from './ProjectCard.module.css'
import { TbWorld } from 'react-icons/tb'
import { IoCloseCircle } from 'react-icons/io5'
import useCloseEscape from '../../hooks/useCloseEscape'
import { useEffect } from 'react'

type Props = {
    project:projectInterface,
    setShowProject:React.Dispatch<React.SetStateAction<boolean>>
}

function ProjectCard({project,setShowProject}:Props) {

  function closeProjectCard(){
    setShowProject(false)
  }

  const closeEscape = useCloseEscape({onClose:closeProjectCard})

  useEffect(()=>{
    closeEscape()
  },[])

  return (
    <div className={styles.project}>
        <IoCloseCircle onClick={closeProjectCard}/>
        <div className={styles.projectCard}>
            <img src={project.img} alt={project.name} />
            <div className={styles.projectCard_informations}>
                <p>{project.text}</p>
                <div className={styles.links}>
                    <a href={project.repository} target='_blank' className={styles.repository}><FaGithub />GitHub</a>
                    <a href={project.site} target='_blank' className={styles.site}><TbWorld />Website</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard
