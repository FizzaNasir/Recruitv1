import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Text } from '@chakra-ui/react'
import StatsCard from '../../components/CompanyDashboard/Card/StatsCard'
import Header from '../../components/UserDashBoard/Header'
import CompanyDescription from '../../components/CompanyDashboard/Card/CompanyDescriptionCard'

const CompanyDashBoard = () => {
  return (

    <>
      <Header drawer={true}/>
      <div style={{ display: 'flex', flexDirection: 'column' , backgroundColor: '#E6F0F1',  height: '100vh'}}>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' , marginTop: '20px'}}>
        <StatsCard text="Followers" stats={24}/>
        <StatsCard text="Page Visitors" stats={24}/>
        <StatsCard text="Rating" stats={24}/>
        <StatsCard text="Jobs posted" stats={24}/>
        <StatsCard text="No of clicks" stats={24}/>
        <StatsCard text="Active Users" stats={24}/>
      </div>

        <div style={{  maxWidth: '50%', outerHeight:'1000', marginLeft: '10px', marginTop: '30px' }}>
        <CompanyDescription/>
        </div>

        </div>
    </> 
  )
}

export default CompanyDashBoard
