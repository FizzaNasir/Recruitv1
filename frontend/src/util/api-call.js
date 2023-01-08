import axios from 'axios'

const url = 'http://127.0.0.1:3000/recruuit/v1/'
const Header = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
}

// Sign up
export const signUp = async (data) => {
  const config = {
    headers: Header,
  }
  console.log(data)
  try {
    const res = await axios.post(`${url}users/signup`, data, config)
    return 200
  } catch (err) {
    console.log(err)
    return err.response.data.message
  }
}

export const login = async (data) => {
  const config = {
    headers: Header,
  }
  try {
    const res = await axios.post(`${url}users/login`, data, config)
    return res.data
  } catch (err) {
    console.log(err)
    return false
  }
}

export const forgotPassword = async (data) => {
  const config = {
    headers: Header,
  }
  let res
  try {
    res = await axios.post(`${url}users/forgotPassword`, data, config)
    return 200
  } catch (err) {
    console.log(err.response.data.message)
    return err.response.data.message
  }
}

export const resetPassword = async (token, data) => {
  const config = {
    headers: Header,
  }
  try {
    const res = await axios.patch(
      `${url}users/resetPassword/${token}`,
      data,
      config
    )
    return 200
  } catch (err) {
    console.log(err)
    return err.response.data.message
  }
}
