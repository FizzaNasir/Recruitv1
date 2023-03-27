import React, { useState } from 'react'
import {
  Rate,
  Select,
  Form,
  Input,
  Button,
  message,
  Typography,
  Space,
  Row,
  Col,
} from 'antd'
import styles from './DashBoard.module.css'

const { Option } = Select

const companyList = ['Company A', 'Company B', 'Company C']

const ReviewPage = () => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  const handleSubmit = (values) => {
    setLoading(true)
    console.log(values)
    // Send review data to server
    setTimeout(() => {
      setLoading(false)
      message.success('Review submitted successfully')
    }, 2000)
  }

  return (
    <div style={{ padding: '24px', width: '80%' }}>
      <h1>Write a Review</h1>
      <Typography.Paragraph>
        Please rate the company and write a review
      </Typography.Paragraph>

      <Form form={form} onFinish={handleSubmit}>
        <Col>
          <Typography.Title level={5}>Company</Typography.Title>
          <Form.Item
            name='company'
            rules={[{ required: true, message: 'Please Choose Company' }]}
          >
            <Select placeholder='Select a company'>
              {companyList.map((company) => (
                <Option key={company} value={company}>
                  {company}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col>
          <Typography.Title level={5}>Review</Typography.Title>
          <Form.Item
            name='rating'
            rules={[{ required: true, message: 'Please rate the company' }]}
          >
            <Rate
              allowHalf
              defaultValue={4.5}
              style={{ fontSize: 30, marginBottom: '-10px' }}
            />
          </Form.Item>
        </Col>
        <Col>
          <Typography.Title level={5}>Review Type</Typography.Title>
          <Form.Item
            name='reviewType'
            rules={[{ required: true, message: 'Please select a review type' }]}
          >
            <Select placeholder='Select a review type'>
              <Option value='positive'>Positive</Option>
              <Option value='negative'>Negative</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col>
          <Typography.Title level={5}>Review Title</Typography.Title>
          <Form.Item
            name='reviewTitle'
            rules={[{ required: true, message: 'Please enter a review title' }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col>
          <Typography.Title level={5}>Review Description</Typography.Title>
          <Form.Item
            name='reviewDescription'
            rules={[
              { required: true, message: 'Please enter a review description' },
              {
                max: 200,
                message: 'Review description cannot exceed 200 characters',
              },
            ]}
          >
            <Input.TextArea rows={4} maxLength={200} />
          </Form.Item>
        </Col>
        <Form.Item>
          <Button type='primary' htmlType='submit' loading={loading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default ReviewPage
