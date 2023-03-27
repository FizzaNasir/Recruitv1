import {
  LikeOutlined,
  DislikeOutlined,
  UserOutlined,
  LaptopOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons'
import { Col, Row, Statistic, Card, Space, Typography, Button } from 'antd'
import { Link } from 'react-router-dom'
import Devsince from '../../assests/devsinc.png'
import styles from './DashBoard.module.css'

const { Meta } = Card
const HomePage = () => (
  <Space direction='vertical'>
    <Row gutter={16} className={styles.PageContent}>
      <Col>
        <Statistic
          className={styles.statCard}
          title='Feedback'
          value={120}
          prefix={<LikeOutlined />}
          style={{ cursor: 'pointer' }}
        />
      </Col>
      <Col>
        <Statistic
          className={styles.statCard}
          title='Applied At'
          prefix={<LaptopOutlined />}
          value={93}
        />
      </Col>
      <Col>
        <Statistic
          className={styles.statCard}
          title='Interviews'
          prefix={<UserOutlined />}
          value={93}
        />
      </Col>
      <Col>
        <Statistic
          className={styles.statCard}
          prefix={<UnorderedListOutlined />}
          title='ShortListed'
          value={93}
        />
      </Col>
      <Col>
        <Statistic
          className={styles.statCard}
          prefix={<DislikeOutlined />}
          title='Rejected'
          value={93}
        />
      </Col>
    </Row>

    <Space
      direction='vertical'
      style={{
        width: '100%',
        padding: '0 20px',
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      <Typography.Title level={3}>Recent Jobs</Typography.Title>
      <Row className={styles.jobsCards}>
        <Card title='Devsinc' className={styles.card}>
          <Typography.Title level={4}>Job Title</Typography.Title>
          <Typography.Text>Location</Typography.Text>
        </Card>
        <Card title='Devsinc' className={styles.card}>
          <Typography.Title level={4}>Job Title</Typography.Title>
          <Typography.Text>Location</Typography.Text>
        </Card>
        <Card title='Devsinc' className={styles.card}>
          <Typography.Title level={4}>Job Title</Typography.Title>
          <Typography.Text>Location</Typography.Text>
        </Card>
        <Card title='Devsinc' className={styles.card}>
          <Typography.Title level={4}>Job Title</Typography.Title>
          <Typography.Text>Location</Typography.Text>
        </Card>
        <Card title='Devsinc' className={styles.card}>
          <Typography.Title level={4}>Job Title</Typography.Title>
          <Typography.Text>Location</Typography.Text>
        </Card>
        <Link to='/user/dashboard/companies'>
          <Button type='primary' size='large' style={{ margin: '0 20px' }}>
            View All
          </Button>
        </Link>
      </Row>
    </Space>

    <Space direction='vertical' style={{ width: '100%', padding: '0 20px' }}>
      <Typography.Title level={3}>Companies You Follow</Typography.Title>
      <Space>
        <Card
          hoverable
          style={{ width: 240 }}
          className={styles.card}
          cover={
            <img alt='example' src={Devsince} style={{ height: '150px' }} />
          }
        >
          <Meta title='DevSinc' description='www.devsinc.com' />
        </Card>
        <Card
          className={styles.card}
          hoverable
          style={{ width: 240 }}
          cover={
            <img alt='example' src={Devsince} style={{ height: '150px' }} />
          }
        >
          <Meta title='DevSinc' description='www.devsinc.com' />
        </Card>
        <Card
          className={styles.card}
          hoverable
          style={{ width: 240 }}
          cover={
            <img alt='example' src={Devsince} style={{ height: '150px' }} />
          }
        >
          <Meta title='DevSinc' description='www.devsinc.com' />
        </Card>

        <Button type='primary' style={{ margin: '0 20px' }} size='large'>
          View All
        </Button>
      </Space>
    </Space>
  </Space>
)
export default HomePage
