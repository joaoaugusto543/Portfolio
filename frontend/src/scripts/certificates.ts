export default function observeAbout(){
    const certificates = document.querySelector('.certificates_content') as HTMLElement
    
    const myObserver = new IntersectionObserver((entries)=>{

        if(entries[0].isIntersecting){
            certificates.classList.add('toLeft')
            certificates.classList.add('container')
        }
    })
    
    myObserver.observe(certificates)

}