// import styles from './OtpScreen.module.css'
export default function InputField(props){
  
    return(
    
    <input 
    type="text"
    required 
    maxLength="1"
    value={props.Value} 
    id={props.Id} 
    name={props.Name} 
    data-next={props.DataNext} 
    data-previous={props.DataPrevious} 
    onChange={props.handleChangestate}
    />
)
    }