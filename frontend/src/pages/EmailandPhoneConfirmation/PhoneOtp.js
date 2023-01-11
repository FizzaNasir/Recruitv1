import InputField from '../../components/OTPInputField'
import styles from './styles.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import Header from '../../components/Header/Header'
import { verifyEmail } from '../../util/api-call'
// State for storing the otp digits
const PhoneOtp = (props) => {
  const phoneNbr = localStorage.getItem('PhoneNumber')
  // take phone number from previous page

  const [otpDigits, setotpDigits] = useState({
    Digit_1: '',
    Digit_2: '',
    Digit_3: '',
    Digit_4: '',
    Digit_5: '',
    Digit_6: '',
  })

  const [error, setError] = useState('') // State for storing the error message
  const navigate = useNavigate()

  const { Digit_1, Digit_2, Digit_3, Digit_4, Digit_5, Digit_6 } = otpDigits // digits

  // Handle change function for the input fields
  function handleChange(e) {
    const { name, value } = e.target

    setotpDigits((prevdata) => ({
      ...prevdata,
      [name]: value,
    }))

    // move to next input field after checking condtions
    if (e.target.dataset.next && value.length === 1) {
      document.getElementById(e.target.dataset.next).focus()
    }
  }

  // function for handling the submit button
  async function handleSubmit(e) {
    e.preventDefault()
    // if all the fields are filled then take otp from local storage
    const otp = localStorage.getItem('otp')
    // construct the otp from the state
    const otpFromState =
      Digit_1 + Digit_2 + Digit_3 + Digit_4 + Digit_5 + Digit_6
    // check if the otp from state is equal to the otp from local storage
    try {
      const confirmationObj = JSON.parse(
        localStorage.getItem('confirmationResult')
      )
      console.log(confirmationObj)
      await confirmationObj.confirm(otp)
      navigate('/dashboard')

      // Need to Update Backend as well
      // const email = localStorage.getItem('email')
      // const data = { email, verifyEmail: true }
      // make a post request to the server
      // await verifyEmail(data)
    } catch (err) {
      setError('Incorrect OTP')
    }
  }

  return (
    <>
      <Header />
      <div className={styles.centered}>
        <div className={styles.prompt}>
          <>OTP has been sent to your Phone. Enter here for verification</>
        </div>
        <div className={styles.digitgroup}>
          <div>
            <InputField
              Value={Digit_1}
              Id='Digit-1'
              Name='Digit_1'
              DataNext='Digit-2'
              handleChangestate={handleChange}
            />
            <InputField
              Value={Digit_2}
              Id='Digit-2'
              Name='Digit_2'
              DataNext='Digit-3'
              DataPrevious='Digit-1'
              handleChangestate={handleChange}
            />
            <InputField
              Value={Digit_3}
              Id='Digit-3'
              Name='Digit_3'
              DataNext='Digit-4'
              DataPrevious='Digit-2'
              handleChangestate={handleChange}
            />
            <InputField
              Value={Digit_4}
              Id='Digit-4'
              Name='Digit_4'
              DataPrevious='Digit-3'
              DataNext='Digit-5'
              handleChangestate={handleChange}
            />
            <InputField
              Value={Digit_5}
              Id='Digit-5'
              Name='Digit_5'
              DataNext='Digit-6'
              handleChangestate={handleChange}
            />
            <InputField
              Value={Digit_6}
              Id='Digit-6'
              Name='Digit_6'
              DataPrevious='Digit-5'
              handleChangestate={handleChange}
            />
          </div>
          <button
            type='submit'
            className={styles.send_btn}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        {error && <div className={styles.error_msg}>{error}</div>}
      </div>
    </>
  )
}

export default PhoneOtp