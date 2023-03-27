import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import { Space, Col } from 'antd'

import styles from './DashBoard.module.css'
import SideBar from '../../components/UserDashBoard/SideBar'
import Header from '../../components/UserDashBoard/Header'
import HomePage from '../../components/UserDashBoard/HomePage'
import GiveReview from '../../components/UserDashBoard/GiveReview'
import CompanyList from '../../components/UserDashBoard/CompaniesPage'
import CompanyComparisonPage from '../../components/UserDashBoard/CompareCompanies'

const DashBoard = () => {
  return (
    <div>
      <Header />
      <Space className={styles.Layout}>
        <Col className={styles.SideBar}>
          <SideBar />
        </Col>

        <Col className={styles.PageContent}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/review' element={<GiveReview />} />
            <Route path='/companies' element={<CompanyList />} />
            <Route path='/compare' element={<CompanyComparisonPage />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </Col>
      </Space>
    </div>
  )
}

export default DashBoard
