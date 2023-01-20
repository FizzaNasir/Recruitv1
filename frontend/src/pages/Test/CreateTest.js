import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Card, CardContent, TextField, Button } from '@mui/material'
import Header from '../../components/Header/Header'
import styles from './Test.module.css'

import { Link } from 'react-router-dom'
import { Grid, Typography } from '@mui/material'

const CreateTest = () => {
  const navigate = useNavigate()
  const [options, setOptions] = useState({
    NoOfQuestions: 0,
    time: 0,
    testTitle: '',
    testDescription: '',
  })

  const [error, setError] = useState(false)

  const changeHandler = (event) => {
    setOptions({ ...options, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // validate the question data
    console.log(options)
    if (
      options.NoOfQuestions === '' ||
      options.time === '' ||
      options.testTitle === '' ||
      options.testDescription === ''
    ) {
      setError(true)
      return
    }
    localStorage.setItem('testOptions', JSON.stringify(options))
    navigate('/test/set-questions')
  }

  return (
    <>
      <Header />
      <Typography
        variant='h4'
        style={{ textAlign: 'center', marginTop: '40px' }}
      >
        Create Test
      </Typography>
      <Card className={styles.card}>
        <CardContent>
          <Typography
            variant='h5'
            style={{ marginBottom: '40px', textAlign: 'center' }}
          >
            Choose your Options
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label='Number of Questions'
                type='number'
                name='NoOfQuestions'
                onChange={changeHandler}
              />
              <br />
              <br />
              <TextField
                label='Time (minutes)'
                type='number'
                name='time'
                onChange={changeHandler}
              />
              <br />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label='Test Title'
                type='text'
                name='testTitle'
                onChange={changeHandler}
              />
              <br />
              <br />
              <TextField
                label='Test Description'
                type='text'
                name='testDescription'
                onChange={changeHandler}
              />
              <br />
            </Grid>
          </Grid>
          <br />
        </CardContent>

        <Button
          variant='contained'
          color='primary'
          className={styles.button}
          onClick={handleSubmit}
        >
          Next
        </Button>
        {error && (
          <Typography
            variant='h6'
            color='sucess'
            style={{
              marginTop: '20px',
              width: '100%',
              padding: '5px',
              backgroundColor: '#f34646',
              color: 'white',
              borderRadius: '5px',
              fontSize: '16px',
              transition: 'all 2s ease',
              textAlign: 'center',
            }}
          >
            Please fill all the fields
          </Typography>
        )}
      </Card>
    </>
  )
}

export default CreateTest
