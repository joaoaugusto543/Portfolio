export default function observeAbout(){
    const projects = document.querySelector('.sectionProjects') as HTMLElement
    
    const myObserver = new IntersectionObserver((entries)=>{

        if(entries[0].isIntersecting){
            projects.classList.add('toRight')
            projects.classList.add('container')
        }
    })
    
    myObserver.observe(projects)

}