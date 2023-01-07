import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './SignUp.module.css'
import Header from '../../components/Header/Header'
import axios from 'axios'

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
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
      }

      const url = 'http://127.0.0.1:3020/recruuit/v1/users/signup'
      const { data: res } = await axios.post(url, data, config)
      navigate('/login')
      console.log(res.data)
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError('Invalid email or Password not match')
      }
    }
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
