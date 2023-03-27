import { Col, Row, Space, Typography } from 'antd'
import React from 'react'
const EducationComponent = ({ education }) => {
  return (
    <Space style={{ padding: '0 20px' }}>
      <Col>
        <Row
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignContent: 'center',
            alignItems: 'center',
            width: '70vw',
          }}
        >
          <Typography.Title level={4}>Degree</Typography.Title>
          <Typography.Title level={4}>Jul 2019 - Jan 2023</Typography.Title>
        </Row>
        <Typography>Institue Name</Typography>
      </Col>
    </Space>
  )
}
export default EducationComponent
