import React from 'react'
import Header from '../../components/Header/Header'
import { useNavigate } from 'react-router-dom'
import styles from './DashBoard.module.css'

const DashBoard = () => {
  const navigate = useNavigate()
  return (
    <>
      <Header />

      <div style={{ textAlign: 'center' }}></div>
      <div className={styles.container}>
        <button className={styles.button} onClick={() => navigate('/register')}>
          Make CV
        </button>
        <button className={styles.button} onClick={() => navigate('/postJob')}>
          Post Job
        </button>
        <button
          className={styles.button}
          onClick={() => navigate('/test/createTest')}
        >
          Create Test
        </button>
      </div>
    </>
  )
}

export default DashBoard
