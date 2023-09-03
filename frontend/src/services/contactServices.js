import api from "../api/api"

async function contact(contact){
    try {

        const response=await api.post('/send',contact)
        const data=response.data
        return data

    } catch (error) {
        console.log(error)
        return error.response.data
    }
}

const contactServices={
    contact
}

export default contactServices