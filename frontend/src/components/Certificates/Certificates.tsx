import { useEffect, useState } from 'react'
import styles from './Certificates.module.css'
import certificateInterface from '../../interfaces/certificateInterface'
import certificateServices from '../../services/certificateServices'

function Certificates() {

  const [certificates,setCertificates] = useState<certificateInterface[]>([])

  async function loadData(){

    const data = await certificateServices.getCertificates()

    setCertificates(data)
  }

  useEffect(()=>{
    loadData()
  },[])

  return (
    <section className={`${styles.certificates} certificates`}>
        <div className={`${styles.certificates_content} certificates_content`}>
          <h1>Certificados</h1>
          <ul className={styles.listCertificates}>
            {certificates.length !== 0 && certificates.map((certificate)=><li key={certificate.id}><img  src={certificate.img}/></li>)}      
          </ul>
        </div>
    </section>
  )
}

export default Certificates
