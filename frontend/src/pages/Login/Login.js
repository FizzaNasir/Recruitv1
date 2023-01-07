import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Login.module.css'
import Header from '../../components/Header/Header'

const Login = () => {
  const [data, setData] = useState({ email: '', password: '' })
  const [error, setError] = useState('')

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
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
              <h1>Login to Your Account</h1>
              <input
                type='email'
                placeholder='Email'
                name='email'
                onChange={handleChange}
                value={data.email}
                required
                className={styles.input}
              />
              <input
                type='password'
                placeholder='Password'
                name='password'
                onChange={handleChange}
                value={data.password}
                required
                className={styles.input}
              />
              {error && <div className={styles.error_msg}>{error}</div>}
              <button type='submit' className={styles.green_btn}>
                Sign In
              </button>
            </form>
            <Link to='/resetPwd'>
              <button type='button' className={styles.white_btn}>
                Forget password?
              </button>
            </Link>
          </div>
          <div className={styles.right}>
            <h1>New Here ?</h1>
            <Link to='/signup'>
              <button type='button' className={styles.white_btn}>
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
