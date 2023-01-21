import React from 'react'
import './ContactPage.css'
import Button from '../../components/Button/Button'
import InputField from '../../components/InputField/InputField'

function ContactUs() {
  return (
    <div className='contact-page-container'>
      <header className='contact-page-header'>
        <h1>Contact Us</h1>
        <p>Have a question or concern? Get in touch with our team.</p>
      </header>
      <main className='contact-page-main'>
        <form className='contact-form'>
          <label htmlFor='name'>Name:</label>
          <InputField Type='text' Id='name' Name='name'/>
          {/* <input type='text' id='name' name='name' required /> */}

          <label htmlFor='email'>Email:</label>
          <InputField Type='email' Id='email' Name='email' />
          {/* <InputField type='email' id='email' name='email' required /> */}

          <label htmlFor='message'>Message:</label>
          <textarea id='message' name='message' required></textarea>

          <Button Type='submit' Title="Submit"/>
          {/* <Button className='submit-button' Type='submit' Title="Submit"/> */}
        </form>
        <section className='contact-info'>
          <h2>Recruuit Team</h2>
          <p>Email: contact@recruuit.com</p>
          <p>Phone: +123-456-7890</p>
          <p>Address: 123 Main St, Anytown USA</p>
        </section>
      </main>
    </div>
  )
}

export default ContactUs
