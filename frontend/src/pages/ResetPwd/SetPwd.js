import { useState } from 'react'
// import { Link } from 'react-router-dom'
import styles from './Login.module.css'
import Header from '../../components/Header/Header'

const SetPwd = () => {
  const [Password, setPassword] = useState({ password: '' })
  const [error, setError] = useState('')

  const handleChange = ({ currentTarget: input }) => {
    setPassword({ ...Password, [input.name]: input.value })
  }

  function handleSubmit(event) {
    event.preventDefault()
    const pwd = Password.password
    console.log(pwd)
    fetch('http://localhost:3000/forgot-password-api', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, 'password changed')
      })
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
              <h1>Change Password</h1>
              <input
                type='password'
                placeholder='Password'
                name='password'
                onChange={handleChange}
                value={Password.password}
                required
                className={styles.input}
              />
              {error && <div className={styles.error_msg}>{error}</div>}
              <button type='submit' className={styles.green_btn}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SetPwd
