import React from 'react'
import { Avatar, Badge, Row, Button, Image, Space, Typography } from 'antd'
import { MailOutlined, BellFilled, UserOutlined } from '@ant-design/icons'
import RecruuitLogo from '../../assests/recruuitLogo.png'
import styles from './DashBoard.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className={styles.AppHeader}>
      <Image width={140} src={RecruuitLogo} />
      <Typography.Title level={3}>Welcome, Talha Tariq!</Typography.Title>
      <Space
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          gap: 20,
        }}
      >
        <Row style={{ gap: 16, marginTop: 4 }}>
          <Badge
            count={5}
            style={{ backgroundColor: '#52c41a' }}
            className={styles.hover}
          >
            <MailOutlined style={{ fontSize: '20px', color: '#08c' }} />
          </Badge>
          <Badge
            count={1}
            style={{ backgroundColor: '#52c41a' }}
            className={styles.hover}
          >
            <BellFilled style={{ fontSize: '20px', color: '#08c' }} />
          </Badge>
        </Row>
        <Link to='/user/12343'>
          <Avatar
            style={{
              backgroundColor: '#87d068',
              fontSize: '16px',
              marginLeft: 8,
            }}
            className={styles.hover}
            icon={<UserOutlined />}
          />
        </Link>

        <Button type='primary' href='/companies'>
          Switch to Companies
        </Button>
      </Space>
    </div>
  )
}

export default Header
