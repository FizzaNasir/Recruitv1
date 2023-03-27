import { useState } from 'react'
import {
  Row,
  Col,
  Select,
  Typography,
  Space,
  Divider,
  Image,
  Button,
  Alert,
} from 'antd'
import styles from './DashBoard.module.css'
import Devsince from '../../assests/devsinc.png'
const { Option } = Select

const CompanyRow = ({ fieldName, fieldValue }) => {
  console.log(fieldName, fieldValue)
  return (
    <Row span={8} style={{ display: 'flex', alignItems: 'center' }}>
      <Col span={12}>
        <Typography style={{ fontSize: '16px', fontWeight: 'bold' }}>
          {fieldName}
        </Typography>
      </Col>
      <Col span={8}>
        <Typography style={{ fontSize: '18px' }}>{fieldValue}</Typography>
      </Col>
    </Row>
  )
}
const companies = [
  {
    id: 1,
    name: 'Company A',
    revenue: 100000,
    employees: 50,
    headquarters: 'New York',
  },
  {
    id: 2,
    name: 'Company B',
    revenue: 50000,
    employees: 25,
    headquarters: 'Los Angeles',
  },
  {
    id: 3,
    name: 'Company C',
    revenue: 25000,
    employees: 15,
    headquarters: 'Chicago',
  },
]

const CompanyComparisonPage = () => {
  const [firstCompany, setFirstCompany] = useState(null)
  const [secondCompany, setSecondCompany] = useState(null)
  const [showAlert, setShowAlert] = useState(false)

  const handleFirstCompanyChange = (value) => {
    setFirstCompany(companies.find((c) => c.id === value))
  }
  const handleSecondCompanyChange = (value) => {
    setSecondCompany(companies.find((c) => c.id === value))
  }

  const compareCompanies = () => {
    // first check if companies are selected
    if (!firstCompany || !secondCompany) {
      // show alert
      setShowAlert(true)
    }
  }
  return (
    <Col direction='verticle' style={{ padding: '40px' }}>
      {showAlert && (
        <Alert
          message='Please select two companies to compare'
          type='error'
          closable
          onClose={() => setShowAlert(false)}
        />
      )}
      <Typography.Title level={2} style={{ textAlign: 'center' }}>
        Compare Your Favourite Companies
      </Typography.Title>
      <Divider />
      <Row className={styles.compareContainer}>
        <Col className={styles.compareContainerLeft}>
          <Select
            showSearch
            style={{ width: 300 }}
            placeholder='Select a company'
            optionFilterProp='children'
            onChange={handleFirstCompanyChange}
          >
            {companies.map((c) => (
              <Option key={c.id} value={c.id}>
                {c.name}
              </Option>
            ))}
          </Select>
        </Col>
        <Typography.Title level={1}>vs</Typography.Title>
        <Col className={styles.compareContainerLeft}>
          <Select
            showSearch
            style={{ width: 300 }}
            placeholder='Select a company'
            optionFilterProp='children'
            onChange={handleSecondCompanyChange}
          >
            {companies.map((c) => (
              <Option key={c.id} value={c.id}>
                {c.name}
              </Option>
            ))}
          </Select>
        </Col>
      </Row>
      <Row style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          type='primary'
          style={{ margin: '20px' }}
          size='large'
          onClick={compareCompanies}
        >
          Compare
        </Button>
      </Row>

      <Row className={styles.compareContainer}>
        <Col className={styles.compareContainerLeft}>
          <Typography.Title level={3}>Company 1</Typography.Title>
          <Image src={Devsince} />
          <Divider />
          <CompanyRow fieldName={'Name'} fieldValue={'Devsinc'} />
          <CompanyRow fieldName={'CEO'} fieldValue={'Abbas'} />
          <CompanyRow fieldName={'Size'} fieldValue={'1000'} />
          <CompanyRow fieldName={'Since'} fieldValue={'2000'} />
          <CompanyRow fieldName={'Type'} fieldValue={'Public'} />
          <CompanyRow fieldName={'Rating'} fieldValue={'4.5'} />
          <Divider />
        </Col>
        <Col className={styles.compareContainerRight}>
          <Typography.Title level={3}>Company 2</Typography.Title>
          <Image src={Devsince} />
          <Divider />
          <CompanyRow fieldName={'Name'} fieldValue={'Devsinc'} />
          <CompanyRow fieldName={'CEO'} fieldValue={'Abbas'} />
          <CompanyRow fieldName={'Size'} fieldValue={'1000'} />
          <CompanyRow fieldName={'Since'} fieldValue={'2000'} />
          <CompanyRow fieldName={'Type'} fieldValue={'Public'} />
          <CompanyRow fieldName={'Rating'} fieldValue={'4.5'} />
          <Divider />
        </Col>
      </Row>
    </Col>
  )
}

export default CompanyComparisonPage
