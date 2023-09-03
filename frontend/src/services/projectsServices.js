import api from "../api/api"

async function show(){
    try {

        const response=await api.get('/projects')
        const data=response.data
        return data

    } catch (error) {
        console.log(error)
        return error.response.data
    }
}

const projectsServices={
    show
}

export default projectsServices