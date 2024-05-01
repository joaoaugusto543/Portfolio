import api from '../api/api'

async function getCertificates(){
    try {

        const response=await api.get('/certificate/')
        const data=response.data

        return data

    } catch (error:any) {
        console.log(error)
        return error.response.data
    }
}

const certificateServices={
    getCertificates
}

export default certificateServices