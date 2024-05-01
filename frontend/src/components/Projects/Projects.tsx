import { useEffect, useState } from 'react'
import projectsServices from '../../services/projectsServices'
import Project from '../../components/Project/Project'
import projectInterface from '../../interfaces/projectInterface'
import styles from './Projects.module.css'

function Projects() {

  const [projects,setProjects]=useState<projectInterface[]>([])

  async function loadData(){

    const res=await projectsServices.getProjects()

    if(res.error){
      return
    }

    setProjects(res)
 
  }

  useEffect(()=>{
    loadData()
  },[])


  return (
    <section className={`${styles.sectionProjects} sectionProjects `}>
      <h1>Projetos</h1>
      <div className={styles.projects}>
        {projects.length !==0 && projects.map((project)=><Project key={project.id} project={project}/>)}
      </div>
      
    </section>
  )
}

export default Projects