export default function observeAbout(){
    const technologies = document.querySelector('.technologies') as HTMLElement
    
    const myObserver = new IntersectionObserver((entries)=>{

        if(entries[0].isIntersecting){
            technologies.classList.add('toApper')
            technologies.classList.add('container')
        }
    })
    
    myObserver.observe(technologies)

}