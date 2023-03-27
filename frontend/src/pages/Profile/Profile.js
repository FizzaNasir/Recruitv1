import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Profile.module.css'
import Header from '../../components/Header/Header'
import profileImg from '../../assests/talha_tariq.jpg'
import { Typography, Image, Col, Space, Row, Divider, Button, Tag } from 'antd'
import editImg from '../../assests/edit.png'
import EducationComponent from './EducationComponent'
import WorkExperienceComponent from './WorkExperienceComponent'
import ProjectsComponent from './ProjectsComponent'
import SkillsComponent from './SkillsComponent'
import AchievementComponent from './AchievementComponent'

const Profile = () => {
  const [data, setData] = useState({
    profileImage: profileImg,
    name: 'Talha Tariq',
    gender: 'Gender',
    title: 'Full Stack Developer',
    age: '12',
    email: 'abc@xyz.com',
    phonNo: 'Phone No',
    address: {
      city: 'Lahore',
      country: 'Pakistan',
    },
    description:
      'I am a web developer, and I love to code. I have strong knowledge of React, Node, Express, MongoDB, and I am also familiar with Redux, Next.js, and Material UI. I have also worked on some projects using React Native and Flutter. I am also familiar with Git and GitHub. I am a fast learner and I love to learn new things. I am also a good team player and I love to work with others. I am also a good problem solver and I love to solve problems.',
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
          <Image
            style={{ width: 200, height: 200, borderRadius: 100 }}
            src={data.profileImage}
            alt='Profile'
          />
          <Typography.Title level={2}>{data.name}</Typography.Title>

          <Typography>{data.age} years Old</Typography>
          <Typography>{data.email}</Typography>
          <Typography>
            {data.address.city},{data.address.country}
          </Typography>
        </div>
        <div className={styles.right_container}>
          <Typography.Title level={1}>{data.title}</Typography.Title>
          <Col>
            <Typography.Title
              level={2}
              style={{
                color: 'blue',
              }}
            >
              About Me
            </Typography.Title>
            <Typography>{data.description}</Typography>
          </Col>
          <Col>
            <Typography.Title
              style={{
                color: 'blue',
                borderBottom: '1px double blue',
                borderTop: '2px double blue',
                padding: '5px 0px',
              }}
              level={2}
            >
              Education
            </Typography.Title>
            <EducationComponent education={data.education} />
            <Divider />
            <EducationComponent education={data.education} />
          </Col>
          <Col>
            <Typography.Title
              style={{
                color: 'blue',
                borderBottom: '1px double blue',
                borderTop: '2px double blue',
                padding: '5px 0px',
              }}
              level={2}
            >
              Work Experience
            </Typography.Title>
            <WorkExperienceComponent education={data.education} />
            <Divider />
            <WorkExperienceComponent education={data.education} />
          </Col>
          <Col>
            <Typography.Title
              style={{
                color: 'blue',
                borderBottom: '1px double blue',
                borderTop: '2px double blue',
                padding: '5px 0px',
              }}
              level={2}
            >
              Projects
            </Typography.Title>
            <ProjectsComponent education={data.education} />
            <Divider />
            <ProjectsComponent education={data.education} />
          </Col>
          <Col>
            <Typography.Title
              style={{
                color: 'blue',
                borderBottom: '1px double blue',
                borderTop: '2px double blue',
                padding: '5px 0px',
              }}
              level={2}
            >
              Skills
            </Typography.Title>
            <SkillsComponent education={data.education} />

            <Divider />
          </Col>
          <Col>
            <Typography.Title
              style={{
                color: 'blue',
                borderBottom: '1px double blue',
                borderTop: '2px double blue',
                padding: '5px 0px',
              }}
              level={2}
            >
              Achievement
            </Typography.Title>
            <AchievementComponent education={data.education} />
            <Divider />
            <AchievementComponent education={data.education} />
          </Col>
        </div>
      </div>
    </>
  )
}

export default Profile
