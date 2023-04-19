import React from 'react'
import StatsCard from '../../components/CompanyDashboard/Card/StatsCard'
import Header from '../../components/UserDashBoard/Header'
import CompanyDescription from '../../components/CompanyDashboard/Card/CompanyDescriptionCard'
import PageVisitorsGraph from '../../components/CompanyDashboard/Graph/PageVisitorsGraph'
import JobPost from '../../components/JobPostCard/JobPost'
import styles from './Companydashboard.module.css'
import { TeamOutlined } from '@ant-design/icons'
import StarIcon from '@mui/icons-material/Star';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';
const CompanyDashBoard = () => {

  return (
    <>
      <Header drawer={true}/>
      <div style={{ display: 'flex', flexDirection: 'column' , backgroundColor: '#E6F0F1',  height: '100vh'}}>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' , marginTop: '20px'}}>
        <StatsCard text="Followers" stats={24} icon={<PeopleAltSharpIcon/>}/>
        <StatsCard text="Page Visitors" stats={24} icon={<PeopleAltSharpIcon/>}/>
        <StatsCard text="Rating" stats={24} icon={<StarIcon/>}/>
        <StatsCard text="Jobs posted" stats={24} icon={<BusinessCenterIcon/>}/>
        <StatsCard text="No of clicks" stats={24} icon={<RocketLaunchIcon/>}/>
        <StatsCard text="Active Users" stats={24} icon={<VisibilityIcon/>}/>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row',  justifyContent: 'space-around'}}>

        <div style={{  width: '45%', outerHeight:'1000', marginLeft: '50px', marginTop: '30px' }}>
        <CompanyDescription/>
        </div>

        <div style={{  width: '55%', maxHeight: '500px', outerHeight:'1000', marginLeft: '60px', marginTop: '30px' }}>
        <PageVisitorsGraph/>
        </div>
        </div>

<div className={styles.JobCardContainer} >
  <h2  style={{  marginLeft: '60px'}}>Jobs Posted</h2>
  <div style={{  marginLeft: '60px'}}>
  <JobPost
  jobTitle="Junior developer"
  location="Lahore"
  jobType="Remote"
  jobMode="Hybrid"
  salary="90000"
  postTime="12 aug 12:30am"
  />
  <JobPost
  jobTitle="Junior developer"
  location="Lahore"
  jobType="Remote"
  jobMode="Hybrid"
  salary="90000"
  postTime="12 aug 12:30am"
  />
  </div>
</div>
</div>
    </> 
  )
}

export default CompanyDashBoard
