import React, { useState, useEffect } from 'react'

import Header from '../../components/Header/Header'
import classes from './Test.module.css'
import EachQuestion from './EachQuestion'

import {
  Card,
  CardContent,
  FormControl,
  MenuItem,
  TextField,
  Button,
  Typography,
  Grid,
  InputLabel,
  Select,
  Paper,
} from '@mui/material'

import { createTest } from '../../util/api-call'

const SetQuestions = () => {
  const [totalQuestions, setTotalQuestions] = useState(0)
  useEffect(() => {
    const options = JSON.parse(localStorage.getItem('testOptions'))
    console.log(options)
    setTotalQuestions(+options.NoOfQuestions)
  }, [])

  const [questions, setQuestions] = useState([])
  const options = JSON.parse(localStorage.getItem('testOptions'))

  const handleChange = (event) => {
    // setQuestions({ ...question, [event.target.name]: event.target.value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    // save the test to the database
    const test = {
      title: options.testTitle,
      description: options.testDescription,
      time: options.time,
      noOfQuestions: options.NoOfQuestions,
      questions,
    }

    const response = await createTest(test)
    console.log(response)
    if (response.status === 201) {
      localStorage.removeItem('testOptions')
    } else {
      console.log(response)
    }
  }
  console.log(totalQuestions)
  const addQuestion = (question) => {
    setQuestions([...questions, question])
    setTotalQuestions(totalQuestions - 1)
  }

  return (
    <>
      <Header />
      <Card className={classes.card}>
        {totalQuestions > 0 ? (
          <Typography
            variant='h4'
            style={{ textAlign: 'center', marginTop: '40px' }}
          >
            Question {questions.length + 1} of{' '}
            {totalQuestions + questions.length}
            <EachQuestion addQuestion={addQuestion} />
          </Typography>
        ) : (
          <>
            <Typography
              variant='h6'
              style={{ textAlign: 'center', marginTop: '40px' }}
            >
              Your Test has been created successfully Please click on the button
              below to save your test
            </Typography>

            <Button
              variant='contained'
              color='primary'
              style={{ marginTop: '40px' }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </>
        )}
      </Card>
    </>
  )
}

export default SetQuestions
