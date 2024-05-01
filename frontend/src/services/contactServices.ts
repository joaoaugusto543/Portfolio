import api from '../api/api'
import contactInterface from '../interfaces/contactInterface'

async function contact(contact:contactInterface){
    try {

        const response=await api.post('/contact/',contact)
        const data=response.data
        return data

    } catch (error:any) {
        console.log(error)
        return error.response.data
    }
}

const contactServices={
    contact
}

export default contactServices