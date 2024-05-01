import { useState } from 'react'
import projectInterface from '../../interfaces/projectInterface'
import styles from './Project.module.css'
import ProjectCard from '../ProjectCard/ProjectCard'

type Props={
    project:projectInterface
}

function Project({project}:Props) {

  const [showProject,setShowProject]=useState<boolean>(false)

  return (
    <>
        {showProject && <ProjectCard project={project} setShowProject={setShowProject}/>}
        {!showProject && 
            <div className={styles.project} onClick={()=>setShowProject(true)}>
                <img src={project.img} alt={project.name} />
                <div className={styles.overlay}>
                    <p>{project.name}</p>
                </div>
            </div>
        }
    </>
  )
}

export default Project