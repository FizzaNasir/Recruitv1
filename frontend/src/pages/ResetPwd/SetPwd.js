import { useState } from 'react'
// import { Link } from 'react-router-dom'
import styles from './Login.module.css'
import Header from '../../components/Header/Header'
import { useParams, useNavigate } from 'react-router-dom'
import { resetPassword } from '../../util/api-call'
const SetPwd = () => {
  const [Password, setPassword] = useState({ password: '' })
  const [confirmPassword, setConfirmPassword] = useState({
    confirmPassword: '',
  })
  const navigate = useNavigate()
  const [error, setError] = useState('')
  let { token } = useParams()

  const handleChange = ({ currentTarget: input }) => {
    setPassword({ ...Password, [input.name]: input.value })
    setConfirmPassword({ ...confirmPassword, [input.name]: input.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (Password.password !== confirmPassword.confirmPassword) {
      setError('Passwords do not match')
    } else {
      setError('')
      const data = {
        password: Password.password,
        passwordConfirm: confirmPassword.confirmPassword,
      }
      console.log(token)
      const res = await resetPassword(token, data)
      console.log(res)
      if (res === 200) {
        alert('Password changed successfully, please login')
        navigate('/login')
      } else {
        setError(res)
      }
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
              <input
                type='password'
                placeholder='Confirm Password'
                name='confirmPassword'
                onChange={handleChange}
                value={confirmPassword.confirmPassword}
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
