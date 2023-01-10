import InputField from '../../components/OTPInputField'
import styles from './OtpScreen.module.css'
import { useState } from 'react'
import {useEffect} from 'react'

const OtpScreen = () => {

  const[otpDigits, setotpDigits]=useState({
    Digit_1: "",
    Digit_2: "",
    Digit_3: "",
    Digit_4: "",
  })
  const {Digit_1, Digit_2, Digit_3, Digit_4} = otpDigits

  function handleChange(e){
    const {name, value}= e.target

    console.log(value);
    console.log(name);

    setotpDigits((prevdata)=>({
       ...prevdata, [name]: value 
     }))
      //splitting name with its sequence number to obtain the number
      const [inputFieldName, inputFieldIndex] = name.split("_");

      let inputFieldIntIndex = parseInt(inputFieldIndex, 10)

      //if its not the last field
      if(inputFieldIntIndex < 4){
        const nextfield = document.querySelector(`input[name=Digit_${inputFieldIntIndex+1}]`)

        //automatically focus on next field when done with prev one
        nextfield.focus();
      }
     console.log(otpDigits);

    }
      // just to check if state is updating correctly
  // useEffect(() => {
  //   console.log(otpDigits);
  // }, [otpDigits]);
  
  return (
<>  
<div>
<div className={styles.main_container}>
        <div className={styles.navbar}>
          <h1>Recruuit</h1>
        </div>
      </div>
      </div>
<div className={styles.centered}>
<div className={styles.prompt}>
<h2>Enter The Code Generated On Your Mobile Device Below To Log In!</h2>
</div>
<form method="Get" className={styles.digitgroup} data-group-name="Digits" data-autosubmit="False" autoComplete="Off">
  <div>
<InputField Value={Digit_1} Id="Digit-1" Name="Digit_1" DataNext="Digit-2" handleChangestate={handleChange} />
<InputField Value={Digit_2} Id="Digit-2" Name="Digit_2" DataNext="Digit-3" DataPrevious="Digit-1" handleChangestate={handleChange}/>
<InputField Value={Digit_3} Id="Digit-3" Name="Digit_3" DataNext="Digit-4" DataPrevious="Digit-2" handleChangestate={handleChange}/>
<InputField Value={Digit_4} Id="Digit-4" Name="Digit_4" DataNext="Digit-5" DataPrevious="Digit-3" handleChangestate={handleChange}/>
</div>
<button type='submit' className={styles.send_btn}>Send</button>
</form>
</div>
</>  
  )}


export default OtpScreen
