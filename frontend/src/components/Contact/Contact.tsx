import { useEffect, useState } from 'react'
import styles from './Contact.module.css'
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

  async function handleSubmit(e:React.BaseSyntheticEvent){

    setLoader(true)

    e.preventDefault()

    const contact={
        name,
        email,
        message
    }

    const res=await contactServices.contact(contact)

    if(res.error){
        setLoader(false)
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
    <section className={`${styles.contact} container`}>
        <div className={styles.boxForm}>
          <h1>Contato</h1>
          {showMessageError && <p className={styles.error}>Falha no envio</p>}
          {showMessageSucess && <p className={styles.success}>Enviado com sucesso</p>}
          <form>
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
            {!loader ? <input type='submit' onClick={handleSubmit} value='Enviar' /> : <input type='submit' onClick={()=>{}} value='Aguarde...' />}
          </form>
        </div>
      </section>
  )
}

export default Contact