import { Col, Row, Space, Typography, Button } from 'antd'
import React from 'react'
const ProjectsComponent = ({ projects }) => {
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
            margin: '0 0 0 0',
          }}
        >
          <Typography.Title level={3}>Project Title</Typography.Title>
          <div>
            <Button type='primary' style={{ marginLeft: 10 }}>
              <a
                href='https://www.example.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                Live link
              </a>
            </Button>
            <Button type='primary' style={{ marginLeft: 10 }}>
              <a
                href='https://github.com/example'
                target='_blank'
                rel='noopener noreferrer'
              >
                GitHub
              </a>
            </Button>
          </div>
        </Row>
        <Typography.Paragraph>
          Project summary goes here. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Proin ac faucibus odio. Sed eget nisl vel ipsum
          aliquam semper. Donec aliquam lorem vel enim volutpat, nec consectetur
          risus accumsan.
        </Typography.Paragraph>
      </Col>
    </Space>
  )
}

export default ProjectsComponent
