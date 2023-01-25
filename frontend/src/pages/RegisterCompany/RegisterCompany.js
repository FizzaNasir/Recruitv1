import { useState } from 'react'
import InputField from '../../components/InputField/InputField'
import data from './data'
import Header from '../../components/Header/Header'
import styles from './RegisterCompany.module.css'
import {MdAddLink} from "react-icons/md" 
import {MdRemoveCircleOutline} from "react-icons/md"

const RegisterCompany=()=>{
    let iconStyles = { color: "black", fontSize: "1.7em" };
   const [inputs, setInputs] = useState([ ]);

   let items=data.map(item=>{
   return( 
    <div>
    <label className={styles.labels} htmlfor={item.ID}>{item.Title}: </label>
    <InputField
    {...item}
     />
   </div>
)})
function deleteInput(index){
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
}

function handleClick(){
   setInputs([...inputs, <input key={inputs.length+1} required type="text" placeholder="Enter url"/>])
    
}
const renderedInputs = inputs.map((input, index) => (
    <div key={index}>
      {input}
      <MdRemoveCircleOutline onClick={() => deleteInput(index)}/>
    </div>
  ));
return(
    <>
    <Header/>
    <div className={styles.FlexContainer}>
    <div className={styles.GridContainer}>
        <div className={styles.FlexContainer}>
      {items}
      <label className={styles.labels} htmlFor='desc'>Description: </label>
      <textarea id="desc" name="description" rows="4" cols="50">
      </textarea>
      <label htmlFor='url'>URLs: </label>
      <button id={styles.url} type="button" onClick={handleClick}>Add Url <MdAddLink style={iconStyles} /></button>
      {renderedInputs}
      </div>
    </div> 
    </div> 
    </>
   )
}
export default RegisterCompany