import { useEffect, useState } from 'react'
import './Projects.css'
import Warning from '../../image/warning.png'
import projectsServices from '../../services/projectsServices'
import Project from '../../components/Project/Project'

function Projects() {

  const [projects,setProjects]=useState([])

  useEffect(()=>{
    (async ()=>{
      const res=await projectsServices.show()

      console.log(res)
    
      if(res.error){
        return
      }

      setProjects(res)
      }
    )()
  },[])


  return (
    <section className='sectionProjects'>
      <h1>Projetos</h1>
      {projects.length===0 && 
        <div  className='loading'>
          <img src={Warning} alt='warning'/>
          <p >Aguarde...</p>
        </div>
      }
      <div className='projects'>
        {projects.length !==0 && projects.map((project)=><Project key={project.id} project={project}/>)}
      </div>
      
    </section>
  )
}

export default Projects