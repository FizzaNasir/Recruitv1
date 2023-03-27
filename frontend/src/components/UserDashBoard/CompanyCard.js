import React, { useState } from 'react'
import {
  Card,
  Input,
  Select,
  Row,
  Image,
  Space,
  Typography,
  Rate,
  Button,
  Col,
} from 'antd'
import styles from './DashBoard.module.css'
import CompanyImage from '../../assests/company.jpg'
import companyLogo from '../../assests/devsinc.png'
import { width } from '@mui/system'
import { useNavigate } from 'react-router-dom'

const { Option } = Select

const data = [
  { name: 'Company A', location: 'New York', rating: 4 },
  { name: 'Company B', location: 'Los Angeles', rating: 3 },
  { name: 'Company C', location: 'Chicago', rating: 5 },
  { name: 'Company D', location: 'Houston', rating: 4 },
  { name: 'Company E', location: 'Miami', rating: 2 },
]
const { Meta } = Card

const ComapnyCard = () => {
  const navigate = useNavigate()
  return (
    <Col
      className={styles.companyView}
      onClick={() => {
        navigate('/company/123')
      }}
    >
      <Row
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Row
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <Image
            style={{ width: '100px', height: '100px' }}
            src={companyLogo}
            alt='image'
          />
          <Typography.Title level={2}>Devsinc</Typography.Title>
        </Row>
        <Rate value={4} disabled style={{ fontSize: 30 }} />
      </Row>
      <Row
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Col>
          <Typography.Title level={4}>Location</Typography.Title>
          <Typography.Title level={5}>New York</Typography.Title>
        </Col>
        <Col>
          <Typography.Title level={4}>Size</Typography.Title>
          <Typography.Title level={5}>100</Typography.Title>
        </Col>
        <Col>
          <Typography.Title level={4}>Since</Typography.Title>
          <Typography.Title level={5}>2019</Typography.Title>
        </Col>
      </Row>
    </Col>
  )
}

export default ComapnyCard
