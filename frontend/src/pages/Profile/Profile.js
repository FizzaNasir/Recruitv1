import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Profile.module.css'
import Header from '../../components/Header/Header'
import profileImg from '../../assests/profile.webp'
import editImg from '../../assests/edit.png'
//import Button from '../../components/Button/Button';

const Profile = () => {
  const [data, setData] = useState({
    profileImage: profileImg,
    name: 'Name',
    gender: 'Gender',
    age: 'Age',
    email: 'abc@xyz.com',
    availability: 0,
    address: {
      inner: 'here',
      city: 'City',
      country: 'Country',
    },
    description: 'Description here',
    education: 'Education here',
    skills: 'Skills here',
    workExperience: 'Work Experience',
  })
  const [error, setError] = useState('')
  const editHandler = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <Header />
      <div className={styles.main_container}>
        <div className={styles.left_container}>
          <img className={styles.image} src={data.profileImage} alt='Profile' />
          <h4>{data.name}</h4>
          <p>
            {data.gender}-{data.age}
          </p>
          <p>{data.email}</p>
          <p>
            <b>Availability:</b> {data.availability} hours
          </p>
          <p className={styles.address}>
            {data.address.inner},{data.address.city},{data.address.country}
          </p>
          <button onClick={editHandler}>
            Edit <img src={editImg} />
          </button>
        </div>
        <div className={styles.right_container}>
          <h4>Description</h4>
          <p className={styles.description}>{data.description}</p>
          <h4>Education</h4>
          <p className={styles.description}>{data.education}</p>
          <h4>Skills</h4>
          <p className={styles.description}>{data.skills}</p>
          <h4>Work Experience</h4>
          <p className={styles.description}>{data.workExperience}</p>
        </div>
      </div>
    </>
  )
}

export default Profile
