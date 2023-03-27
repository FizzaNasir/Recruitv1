import { Space, Row, Col, Image, Typography, Button, Rate, Divider } from 'antd'

const ReviewComponent = ({ review }) => {
  return (
    <Col>
      <Row
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography.Title level={3} style={{ margin: 0, color: 'blue' }}>
          Review Title
        </Typography.Title>
        <Rate value={4.5} />
      </Row>
      <Typography style={{ fontSize: '19px' }}>Date - User Name</Typography>
      <Typography style={{ fontSize: '16px' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptas, quod, quia, voluptates quae voluptatibus quibusdam lorem ipsum
        dolor sit amet consectetur adipisicing elit. Quisquam voluptas, quod,
        quia, voluptates quae
      </Typography>
    </Col>
  )
}

export default ReviewComponent
