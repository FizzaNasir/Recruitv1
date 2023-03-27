import React from 'react'
import { Col, Space, Typography } from 'antd'
const AchievementComponent = ({ achievementTitle, achievementDescription }) => {
  return (
    <Space style={{ padding: '0 20px' }}>
      <Col>
        <Typography.Title level={4}>Achievement Title</Typography.Title>
        <Typography.Paragraph>
          A brief description of the achievement goes here. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Proin ac faucibus odio. Sed
          eget nisl vel ipsum aliquam semper. Donec aliquam lorem vel enim
          volutpat, nec consectetur risus accumsan.
        </Typography.Paragraph>
      </Col>
    </Space>
  )
}
export default AchievementComponent
