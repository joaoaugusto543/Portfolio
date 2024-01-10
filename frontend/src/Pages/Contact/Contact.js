import { useEffect, useState } from 'react'
import './Contact.css'
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'
import contactServices from '../../services/contactServices'

function Contact() {

  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [message,setMessage]=useState('')
  const [showMessageError,setShowMessageError]=useState(false)
  const [showMessageSucess,setShowMessageSucess]=useState(false)
  const [loader,setLoader]=useState(false)

  useEffect(()=>{
    if(showMessageError){
        setTimeout(()=>{
            setShowMessageError(false)
        },3000)
    }

    if(showMessageSucess){
        setTimeout(()=>{
            setShowMessageSucess(false)
        },3000)
    }
  },[showMessageError,showMessageSucess])

  async function handleSubmit(e){

    setLoader(true)

    e.preventDefault()

    const contact={
        name,
        email,
        message
    }

    const res=await contactServices.contact(contact)

    if(res.error){
        setShowMessageError(true)
        return
    }

    setLoader(false)

    setShowMessageSucess(true)
    setEmail('')
    setName('')
    setMessage('')
  }

  return (
    <section className='contact'>
        <div className='divImg'>
          <img src="https://images.unsplash.com/photo-1669287731413-bfd7ce1fcc9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="astronauta" />
          <div className='textContact'>
            <div className='informations'>
              <p><AiOutlineMail/> joaoaugustoclopes@gmail.com</p>
              <p><AiFillGithub/> joaoaugusto543</p>
              <p><AiFillLinkedin/> Joao Augusto Correia Lopes</p>
            </div>
          </div>
        </div>
        <div className='divForm'>
          <h1>Contato</h1>
          {showMessageError && <p className='error'>Falha no envio</p>}
          {showMessageSucess && <p className='success'>Enviado com sucesso</p>}
          <form onSubmit={handleSubmit}>
            <label>
              <span>Nome:</span>
              <input type='text' required placeholder='Digite seu nome' value={name} onChange={(e)=>setName(e.target.value)}/>
            </label>
            <label>
              <span>E-mail:</span>
              <input type='email' required placeholder='Digite seu nome' value={email} onChange={(e)=>setEmail(e.target.value)} />
            </label>
            <label>
              <span>Mensagem:</span>
              <textarea value={message} placeholder='Digite sua mensagem' onChange={(e)=>setMessage(e.target.value)}/>
            </label>
            <input type='submit' value='Enviar' />
          </form>
        </div>
      </section>
  )
}

export default Contact