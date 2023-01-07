import { useState } from 'react'
// import { Link } from 'react-router-dom'
import styles from './Login.module.css'


const Reset = () => {
  const [email, setemail] = useState({ email: '' })
  const [error, setError] = useState('')
  const handleChange = ({ currentTarget: input }) => {
    setemail({ ...email, [input.name]: input.value })
  }

  function handleSubmit(event) {
    event.preventDefault()
    var displaySetting = document.getElementById('display_msg').innerHTML = 'We have sent a verification link to this email. Kindly check your inbox'

    fetch("http://localhost:3000/forgot-password-api" , {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
      }),
    }).then((res)=>res.json())
    .then((data)=>{
      console.log(data, "userregister");
  })
}

  return (
    <div>
      <div className={styles.main_container}>
        <div className={styles.navbar}>
          <h1>Recruuit</h1>
        </div>
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
              {error && <div className={styles.error_msg}>{error}</div>}
              <button type='submit' className={styles.green_btn}>
                Submit
              </button>
            </form>    
            <p id='display_msg'></p>       
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reset
