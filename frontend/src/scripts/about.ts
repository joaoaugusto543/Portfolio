export default function observeAbout(){

    const about = document.querySelector('.about') as HTMLElement
    const description = document.querySelector('.description') as HTMLElement
    const image = document.querySelector('.image') as HTMLElement
    
    const myObserver = new IntersectionObserver((entries)=>{
        if(entries[0].isIntersecting){
            description.classList.add('toLeft')
            image.classList.add('toRight')
        }
    })
    
    myObserver.observe(about)
}