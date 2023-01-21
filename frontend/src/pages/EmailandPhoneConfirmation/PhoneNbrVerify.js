import { useState } from 'react'
import styles from './styles.module.css'
import { storeObject } from '../../store/actions'
import { useDispatch } from 'react-redux'
import Header from '../../components/Header/Header'
import { useNavigate } from 'react-router'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { auth } from '../../util/firebase'
import Button from '../../components/Button/Button'
import InputField from '../../components/InputField/InputField'

import { objActions } from '../../store/reduxStore'
export default function Phone_validation() {
  // State for Phone Number
  const [phone, setphone] = useState({
    CountryCode: '+92',
    SimCode: '',
    number: '',
  })
  const navigate = useNavigate()

  // Function for handling the Change of State
  function handleChange(e) {
    const { name, value } = e.target
    if (name === 'number' && value.length === 8) {
      return
    }

    setphone((prevdata) => ({ ...prevdata, [name]: value }))

    // move to next input
    if (name === 'SimCode' && value.length === 3) {
      document.querySelector('[name="number"]').focus()
    }
  }

  // function for showing the recaptcha before sending otp code
  const configureCaptcha = (phoneNbr) => {
    console.log(auth)
    // set new recaptcha verifier window property
    const recaptchaVerifier = new RecaptchaVerifier(
      'recaptcha-container',
      {},
      auth
    )
    recaptchaVerifier.render()

    return signInWithPhoneNumber(auth, phoneNbr, recaptchaVerifier)
  }

  // function for sending the otp code to phone Number
  async function sendOtp() {
    // if all the fields are filled then sum up the Number
    const { CountryCode, SimCode, number } = phone
    const PhoneNumber = CountryCode + SimCode + number

    try {
      const res = await configureCaptcha(PhoneNumber)
      console.log(res)
      objActions.save(res)
      navigate('/verifyYourPhoneNbr')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Header />
      <div className={styles.centered}>
        <h1 className={styles.prompt}>Two Way Authentication</h1>
        <div className={styles.gridContainer}>
          <p className={styles.prompt}>
            Enter your Phone Number for verification
          </p>
          <div>
            <InputField
              Type='text'
              Id='Ccode'
              ClassName={styles.input}
              Name='CountryCode'
              Value={phone.CountryCode}
              MaxLength='10'
              DataNext='SimCode'
            />
            <InputField
              Type='number'
              ClassName={styles.simCode}
              Name='SimCode'
              DataNext='number'
              Value={phone.SimCode}
              handleChangestate={handleChange}
              MaxLength='3'
            />

            <InputField
              Type='number'
              ClassName={styles.number}
              Name='number'
              Value={phone.number}
              handleChangestate={handleChange}
              MaxLength='7'
            />
            <div id='recaptcha-container' className={styles.recaptcha}></div>
            <Button
              Id='sign-in-button'
              Variant="variantTwo"
              HandleClick={sendOtp}
              Title="Send Code"
            />
            
          </div>
        </div>
      </div>
    </>
  )
}
