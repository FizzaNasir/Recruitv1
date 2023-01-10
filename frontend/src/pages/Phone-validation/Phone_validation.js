import { Link } from 'react-router-dom'
import styles from './Phone_Validation.module.css'
import { useState } from 'react'
import Navbar from '../../components/Navbar'
import {useEffect} from 'react'
export default function Phone_validation() {
  const[phone, setphone]=useState({
    CountryCode:"+92",
    SimCode:"",
    number:""
  })
  function handleChange(e){
    const {name, value}= e.target
    setphone(prevdata=>({...prevdata, [name]:value}))
  }
  //just to check if state is updating correctly
  // useEffect(() => {
  //   console.log(phone);
  // }, [phone]);
  return (
    <>
    <Navbar/>
    <h1>Phone verification</h1>
    <div className={styles.gridContainer}>
      <h3>Enter your phone number</h3>
        <div className={styles.phone}>
          <input type="text" id="Ccode" className={styles.input} name="CountryCode" value={phone.CountryCode} maxLength="10"/> 
          <input type="text" className={styles.input} name="SimCode" data-next="number" value={phone.SimCode} onChange={handleChange} maxLength="3"/>-
          <input type="text" className={styles.input} name="number" value={phone.number} onChange={handleChange} maxLength="7"/> 
        </div>
    </div>
    </>
  )
  }
