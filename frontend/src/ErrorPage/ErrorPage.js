import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../components/Header/Header'
import styles from './ErrorPage.module.css'

const ErrorPage = () => {
  return (
    <>
      <Header />
      <div className={styles.errorPage}>
        <h1>Oops! Page Not Found</h1>
        <p>Sorry, but the page you were trying to view does not exist.</p>
        <Link to='/home'>Go back to the home page</Link>
      </div>
    </>
  )
}

export default ErrorPage
