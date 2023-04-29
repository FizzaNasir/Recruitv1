import axios from 'axios'

const url = 'http://127.0.0.1:3000/recruuit/v1/'
const Header = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
}
const config = {
  headers: Header,
}
const newHeader = {
  'Content-Type': 'multipart/form-data',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
}
const ImageConfig = {
  headers: newHeader,
}

/*
  User Authentication & Authorization
*/
export const signUp = async (data) => {
  console.log(data)
  try {
    const res = await axios.post(`${url}users/signup`, data, config)
    return res.data
  } catch (err) {
    console.log(err + 'here')
    return err.response.data
  }
}

export const login = async (data) => {
  try {
    const res = await axios.post(`${url}users/login`, data, config)
    return res.data
  } catch (err) {
    return err.response.data
  }
}

export const verifyEmail = async (data) => {
  try {
    const res = await axios.post(`${url}users/verifyEmail`, data, config)
    return res.data
  } catch (err) {
    console.log(err)
    return err.response.data
  }
}

export const forgotPassword = async (data) => {
  let res
  try {
    res = await axios.post(`${url}users/forgotPassword`, data, config)
    return res.data
  } catch (err) {
    return err.response.data
  }
}

export const resetPassword = async (token, data) => {
  try {
    const res = await axios.patch(
      `${url}users/resetPassword/${token}`,
      data,
      config
    )
    return res.data
  } catch (err) {
    console.log(err)

    return err.response.data
  }
}

export const postJob = async (data) => {
  try {
    const res = await axios.post(`${url}jobs/createJob`, data, config)
    return res.data
  } catch (err) {
    console.log(err)
    return err.response.data
  }
}

//MINEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
export const companyRegistration = async (data) => {
  try {
    const res = await axios.post(`${url}company/register`, data, ImageConfig)
    return res.data
  } catch (err) {
    console.log(err)
    return err.response.data
  }
}

export const getCompanyInfo = async (data) => {
  try {
    const res = await axios.get(`${url}company/company_dashboard`)
    return res.data
  } catch (error) {
    console.log(error)
    return error.response.data.message
  }
}

export const createTest = async (data) => {
  try {
    const res = await axios.post(`${url}tests/createTest`, data, config)
    return res.data
  } catch (err) {
    console.log(err)
    return err.response.data
  }
}
// register a new user
export const register = async (data) => {
  const config = {
    headers: Header,
  }
  try {
    console.log(data)
    const res = await axios.post(`${url}users/register`, data, config)
    return res.data
  } catch (err) {
    console.log(err)
    return err.response.data
  }
}

export const getAllJobs = () => {
  return axios.get(`${url}jobs/getAllJobs`, config)
}
