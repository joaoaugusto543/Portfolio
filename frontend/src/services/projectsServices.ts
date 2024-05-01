import api from '../api/api'

async function getProjects(){
    try {

        const response=await api.get('/projects/')
        const data=response.data
        return data

    } catch (error:any) {
        console.log(error)
        return error.response.data
    }
}

const projectsServices={
    getProjects
}

export default projectsServices