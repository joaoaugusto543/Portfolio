type Props = {
    onClose:() => void
}

function useCloseEscape({onClose}:Props){

    function closeEscape(){

        window.addEventListener('keydown',(e)=>{
            if(e.key === 'Escape'){
                onClose()
                return
            }
    
            return
        })

    }

    return closeEscape

} 

export default useCloseEscape