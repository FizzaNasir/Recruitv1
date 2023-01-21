import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Login.module.css'
import { login } from '../../util/api-call'
import Header from '../../components/Header/Header'
import InputField from '../../components/InputField/InputField'
import Button from '../../components/Button/Button'

const Login = () => {
  const [data, setData] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { email, password } = data
    const res = await login({ email, password })
    if (res) {
      localStorage.setItem('token', res.token)
      navigate('/dashboard')
    }
    setError('Invalid email or password')
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
              <InputField
                Type='email'
                Placeholder='Email'
                Name='email'
                handleChangestate={handleChange}
                Value={data.email}
                // className={styles.input}
              />
              <InputField
                Type='password'
                Placeholder='Password'
                Name='password'
                handleChangestate={handleChange}
                Value={data.password}
                // className={styles.input}
              />
              {error && <div className={styles.error_msg}>{error}</div>}
              <Button Type='submit' Title="Sign In" Variant="variantTwo"/>
           
            </form>
            <Link to='/resetPwd'>
              <Button Type='button' Title="Forget password?" Variant="variantOne"/>
         
            </Link>
          </div>
          <div className={styles.right}>
            <h1>New Here ?</h1>
            <Link to='/signup'>
              <Button Type='button' Title="Sign Up" Variant="variantOne"/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
