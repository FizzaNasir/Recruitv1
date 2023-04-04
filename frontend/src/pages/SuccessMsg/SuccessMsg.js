import style from "./SuccessMsg.module.css"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
const SuccessMsg=()=>{
    return(
    <div className={style.flexContainer}>
            <p className={style.text}>
             Application submitted successfully
             <br/>
             <CheckCircleOutlineIcon className={style.tickMark}/>
            </p>
         </div>)

}
export default SuccessMsg