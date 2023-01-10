import React from 'react'
import './ContactPage.css'

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
          <input type='text' id='name' name='name' required />

          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' name='email' required />

          <label htmlFor='message'>Message:</label>
          <textarea id='message' name='message' required></textarea>

          <button className='submit-button' type='submit'>
            Submit
          </button>
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
