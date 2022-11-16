import { useSelector } from "react-redux"
import "./ErrorMessage.css"

export default function ErrorMessage() {
    const isErrorMessage = useSelector(state => state.auth.errorMessage);

    if(isErrorMessage){
    document.querySelectorAll('.input-wrapper input').forEach((el)=>{
        el.classList.add('outlineError');
    })    
    }
  
    return (
        <>
        {isErrorMessage && <div className="errorMessage">{isErrorMessage}</div>}
        </>
    )
}