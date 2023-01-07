import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import styles from './Login.module.css'
import Header from '../../components/Header/Header'
import { forgotPassword } from '../../util/api-call'

const Reset = () => {
  const [email, setemail] = useState({ email: '' })
  const [message, setMessage] = useState('')
  const handleChange = ({ currentTarget: input }) => {
    setemail({ ...email, [input.name]: input.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    // let displaySetting = (document.getElementById('display_msg').innerHTML =
    //   'We have sent a verification link to this email. Kindly check your inbox')

    const response = await forgotPassword(email)
    if (response === 200) {
      setMessage(
        'We have sent a verification link to this email. Kindly check your inbox'
      )
    } else {
      setMessage(response)
    }
  }

  return (
    <div>
      <div className={styles.main_container}>
        <Header />
      </div>
      <div className={styles.login_container}>
        <div className={styles.login_form_container}>
          <div className={styles.left}>
            <form className={styles.form_container} onSubmit={handleSubmit}>
              <h1>Forget Password</h1>
              <input
                type='email'
                placeholder='Email'
                name='email'
                onChange={handleChange}
                value={email.email}
                required
                className={styles.input}
              />
              <button type='submit' className={styles.green_btn}>
                Submit
              </button>
            </form>
            {message && <div className={styles.error_msg}>{message}</div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reset
