import { useState } from 'react'
import './Project.css'
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai'

function Project({project}) {

    const [showProject,setShowProject]=useState(false)

  return (
    <>
        {showProject &&
            <div className='backGround'>
                <div className='projectCard'>
                    <button className='close' onClick={()=>setShowProject(false)}>X</button>
                    <img src={project.img} alt={project.name} />
                    <div className='informationsProjectCard'>
                        <h1>{project.name}</h1>
                        <p className='textCard'>{project.text}</p>
                        <div className='links'>
                            <a className='gitHub' href={project.repository}><AiFillGithub/>GitHub</a>
                            <a className='site' href={project.site}><AiOutlineLink/>Site</a>
                        </div>
                    </div>
                </div>
            </div> 
        }
        {!showProject && <div className='project' onClick={()=>setShowProject(true)}>
            <img src={project.img} alt={project.name} />
            <div className='hover'>
                <p>{project.name}</p>
            </div>
        </div>}
    </>
  )
}

export default Project