import { Col, Row, Space, Typography } from 'antd'
import React from 'react'
const WorkExperienceComponent = ({ workExperience }) => {
  return (
    <Space
      style={{
        width: '70vw',
        margin: '0 0 0 0',
        padding: '0 20px',
      }}
    >
      <Col>
        <Row
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignContent: 'center',
            alignItems: 'center',
            width: '70vw',
            margin: '0 0 0 0',
          }}
        >
          <Typography.Title level={4} style={{ marginBottom: 0 }}>
            Software Engineer, Arbisoft
          </Typography.Title>
          <Typography.Title style={{ marginBottom: 0 }} level={4}>
            Jul 2019 - Jan 2023
          </Typography.Title>
        </Row>
        <Typography.Title level={5} style={{ marginBottom: 0 }}>
          Islamabad, Pakistan
        </Typography.Title>
        <Typography.Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptatibus quae voluptatum quibusdam,
          voluptas quidem quas quos nemo. Quisquam voluptates, quod, quia,
        </Typography.Paragraph>
      </Col>
    </Space>
  )
}

export default WorkExperienceComponent
