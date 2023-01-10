import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './SignUp.module.css'
import Header from '../../components/Header/Header'
import { signUp } from '../../util/api-call'
import { EmailOtp } from '../EmailandPhoneConfirmation/EmailOtp'

const Signup = () => {
  const [data, setData] = useState({
    name: '',
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
    const { name, email, password, passwordConfirm } = data
    // check if email provided is valid
    if (
      !email ||
      !name ||
      !password ||
      !passwordConfirm ||
      !email.includes('@')
    ) {
      setError('Please fill all fields with valid email')
      return
    }

    if (password !== passwordConfirm) {
      setError('Password  s do not match')
      return
    }
    const res = await signUp({ name, email, password, passwordConfirm })
    if (res?.status === 201) {
      const otp = res.data.data.otp
      localStorage.setItem('otp', otp)
      localStorage.setItem('email', email)
      navigate('/verifyYourEmail')
    }
    setError('Email already exists or Server error')
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
                type='name'
                placeholder='Name'
                name='name'
                onChange={handleChange}
                value={data.name}
                required
                className={styles.input}
              />
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
