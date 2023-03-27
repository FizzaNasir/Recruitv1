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
  return (
    <Col
      className={styles.companyView}
      onClick={() => {
        console.log('clicked')
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
const CompanyBanner = () => {
  return (
    <Space
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'cenrer',
        marginBottom: 16,
        width: '100%',
        height: '40vh',
        border: '1px solid black',
        borderRadius: '5',
        background: 'biege',
        padding: '150px 20px',
      }}
    >
      <Row>
        <Image
          style={{ width: '400px', height: '40vh', flex: '1' }}
          src={CompanyImage}
          alt='image'
        />
      </Row>
      <Col style={{ width: '80%' }}>
        <Typography.Title level={3}>
          Find a workplace that works for you
        </Typography.Title>
        <Typography.Paragraph>
          Discover what an employer is really like before you make your next
          move. Search reviews and ratings, and filter companies based on the
          qualities that matter most to your job search.
        </Typography.Paragraph>
      </Col>
    </Space>
  )
}

const CompanyList = () => {
  const [searchText, setSearchText] = useState('')
  const [locationFilter, setLocationFilter] = useState(null)
  const [ratingFilter, setRatingFilter] = useState(null)

  const handleSearch = (e) => {
    setSearchText(e.target.value)
  }

  const handleLocationFilter = (value) => {
    setLocationFilter(value)
  }

  const handleRatingFilter = (value) => {
    setRatingFilter(value)
  }

  const filteredData = data.filter((company) => {
    const matchSearch = company.name
      .toLowerCase()
      .includes(searchText.toLowerCase())
    const matchLocation = !locationFilter || company.location === locationFilter
    const matchRating = !ratingFilter || company.rating >= ratingFilter
    return matchSearch && matchLocation && matchRating
  })

  return (
    <div style={{ width: '100%', padding: 24 }}>
      <CompanyBanner />
      <div style={{ marginBottom: 16 }}>
        <Input.Search
          placeholder='Search companies'
          onChange={handleSearch}
          style={{ width: 500 }}
        />

        <Select
          placeholder='Location'
          style={{ margin: '0 16px', width: 130 }}
          onChange={handleLocationFilter}
        >
          <Option value='New York'>New York</Option>
          <Option value='Los Angeles'>Los Angeles</Option>
          <Option value='Chicago'>Chicago</Option>
          <Option value='Houston'>Houston</Option>
          <Option value='Miami'>Miami</Option>
        </Select>
        <Select
          placeholder='Rating'
          style={{ marginRight: 16, width: 150 }}
          onChange={handleRatingFilter}
        >
          <Option value={1}>1 star or above</Option>
          <Option value={2}>2 stars or above</Option>
          <Option value={3}>3 stars or above</Option>
          <Option value={4}>4 stars or above</Option>
          <Option value={5}>5 stars</Option>
        </Select>
        <Button type='primary' size='large'>
          Filter
        </Button>
      </div>
      <Typography.Title level={3}>Registered Companies</Typography.Title>
      <Space direction='vertical' style={{ width: '100%' }}>
        <ComapnyCard />
        <ComapnyCard />
        <ComapnyCard />
      </Space>
    </div>
  )
}

export default CompanyList
