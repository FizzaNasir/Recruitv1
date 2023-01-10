import { useState } from 'react'
import Navbar from '../../components/Navbar'
import styles from './styles.module.css'
import { useEffect } from 'react'
export default function Phone_validation() {
  // State for Phone Number
  const [phone, setphone] = useState({
    CountryCode: '+92',
    SimCode: '',
    number: '',
  })

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

  // function for handling the button click
  function handleClick() {
    // pending
  }
  return (
    <>
      <Navbar />
      <div className={styles.centered}>
        <h1 className={styles.prompt}>Two Way Authentication</h1>
        <div className={styles.gridContainer}>
          <p className={styles.prompt}>
            Enter your Phone Number for verification
          </p>
          <div>
            <input
              type='text'
              id='Ccode'
              className={styles.input}
              name='CountryCode'
              value={phone.CountryCode}
              maxLength='10'
              data-next='SimCode'
            />
            <input
              type='number'
              className={styles.simCode}
              name='SimCode'
              data-next='number'
              value={phone.SimCode}
              onChange={handleChange}
              maxLength='3'
            />

            <input
              type='number'
              className={styles.number}
              name='number'
              value={phone.number}
              onChange={handleChange}
              maxLength='7'
            />
            <button className={styles.send_btn} onClick={handleClick}>
              Send Code
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
