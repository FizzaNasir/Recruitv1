import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './SignUp.module.css'
import Header from '../../components/Header/Header'
import { signUp } from '../../util/api-call'

const Signup = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
  })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value })
  }

  const handleSubmit = async (e) => {
    // Make a post request to the server
    // If the user is successfully created, redirect to the login page
    // If the user is not created, display the error message

    e.preventDefault()
    const { email, password, passwordConfirm } = data
    if (password !== passwordConfirm) {
      setError('Passwords do not match')
      return
    }
    const res = await signUp({ email, password, passwordConfirm })
    if (res) {
      navigate('/login')
    }
    setError('Email already exists or server error')
  }

  return (
    <div>
      <div className={styles.main_container}>
        <Header />
      </div>
      <div className={styles.signup_container}>
        <div className={styles.signup_form_container}>
          <div className={styles.left}>
            <h1>Welcome Back</h1>
            <Link to='/login'>
              <button type='button' className={styles.white_btn}>
                Sign in
              </button>
            </Link>
          </div>
          <div className={styles.right}>
            <form className={styles.form_container} onSubmit={handleSubmit}>
              <h1>Create Account</h1>

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
              <input
                type='password'
                placeholder='Confirm Password'
                name='passwordConfirm'
                onChange={handleChange}
                value={data.passwordConfirm}
                required
                className={styles.input}
              />
              {error && <div className={styles.error_msg}>{error}</div>}
              <button type='submit' className={styles.green_btn}>
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
