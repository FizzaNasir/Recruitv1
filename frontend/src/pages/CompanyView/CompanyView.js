import { Space, Row, Col, Image, Typography, Button, Rate, Divider } from 'antd'
import Header from '../../components/UserDashBoard/Header'
import companyImg from '../../assests/devsinc.png'
import { StarOutlined, CheckOutlined } from '@ant-design/icons'
import ReviewComponent from './ReviewComponent'
import { Link } from 'react-router-dom'

const CompanyView = ({ company }) => {
  return (
    <div>
      <Header />

      <Space
        direction='vertical'
        style={{ padding: 20, width: '100vw', padding: '10px 50px' }}
      >
        <Col>
          <Row
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Row
              span={12}
              style={{
                display: 'flex',
                flex: '1',
                gap: 16,
                alignItems: 'center',
              }}
            >
              <Image src={companyImg} alt='Image' width={150} height={150} />
              <Typography.Title level={2}>DevSinc</Typography.Title>
            </Row>
            <Row
              span={12}
              style={{
                display: 'flex',
                justifyContent: 'center',
                flex: '1',
                gap: 16,
                alignItems: 'center',
              }}
            >
              <Button type='primary' icon={<CheckOutlined />} size='large'>
                Follow
              </Button>
              <Link to='/user/dashboard/review'>
                <Button type='primary' icon={<StarOutlined />} size='large'>
                  Add a Review
                </Button>
              </Link>
            </Row>
          </Row>
        </Col>
        <Col>
          <Typography.Title level={3}>Overview</Typography.Title>
          <Col>
            <Space
              direction='vertical'
              style={{
                padding: 20,
                width: '100vw',
                border: '1px solid #d9d9d9',
                borderRadius: 4,
              }}
            >
              <Row span={8} style={{ display: 'flex', alignItems: 'center' }}>
                <Col span={12}>
                  <Typography style={{ fontSize: '16px' }}>
                    <strong>Company Type</strong>: Private
                  </Typography>
                </Col>
                <Col span={12}>
                  <Typography style={{ fontSize: '16px' }}>
                    <strong>Company Size:</strong> 100
                  </Typography>
                </Col>
              </Row>
              <Row span={8} style={{ display: 'flex', alignItems: 'center' }}>
                <Col span={12}>
                  <Typography style={{ fontSize: '16px' }}>
                    <strong>Founded:</strong> 2019
                  </Typography>
                </Col>
                <Col span={12}>
                  <Typography style={{ fontSize: '16px' }}>
                    <strong>CEO:</strong> Usman Khan
                  </Typography>
                </Col>
              </Row>
              <Row span={8} style={{ display: 'flex', alignItems: 'center' }}>
                <Col span={12}>
                  <Typography style={{ fontSize: '16px' }}>
                    <strong>Email:</strong> devsinc@example.com
                  </Typography>
                </Col>
                <Col span={12}>
                  <Typography style={{ fontSize: '16px' }}>
                    <strong>website:</strong>{' '}
                    <a href='www.devsinc.com' target='_blank'>
                      www.devsinc.com
                    </a>
                  </Typography>
                </Col>
              </Row>
              <Typography.Title level={3}>Description</Typography.Title>
              <Typography style={{ fontSize: '16px' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptas, quod, quia, voluptates quae voluptatibus
                quibusdam lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quisquam voluptas, quod, quia, voluptates quae
                voluptatibus quibusdam lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam voluptas, quod, quia, voluptates quae
                voluptatibus quibusdam lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam voluptas, quod, quia, voluptates quae
                voluptatibus quibusdam lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam voluptas, quod, quia, voluptates quae
                voluptatibus quibusdam lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam
              </Typography>
            </Space>
          </Col>
          <Typography.Title style={{ marginTop: 10 }} level={3}>
            Reviews
          </Typography.Title>
          <Space
            direction='vertical'
            style={{
              padding: 20,
              width: '100vw',
              border: '1px solid #d9d9d9',
              borderRadius: 4,
            }}
          >
            <Typography.Title level={5} style={{ margin: 0 }}>
              Over All Rating <Rate value={4.5} />
            </Typography.Title>
            <ReviewComponent />
            <Divider />
            <ReviewComponent />
            <Divider />
            <ReviewComponent />
            <Divider />
            <ReviewComponent />
            <Divider />
          </Space>
        </Col>
      </Space>
    </div>
  )
}

export default CompanyView
