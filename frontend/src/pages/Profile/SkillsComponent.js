import React from 'react'
import { Space, Tag } from 'antd'
const SkillsComponent = ({ skills }) => {
  return (
    <Space style={{ padding: '0 20px' }}>
      <Tag style={{ fontSize: 20, padding: '10px' }}>Tag 1</Tag>
      <Tag style={{ fontSize: 20, padding: '10px' }}>Tag 1</Tag>
      <Tag style={{ fontSize: 20, padding: '10px' }}>Tag 1</Tag>
      <Tag style={{ fontSize: 20, padding: '10px' }}>Tag 1</Tag>
    </Space>
  )
}
export default SkillsComponent
