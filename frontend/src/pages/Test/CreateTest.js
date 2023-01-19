import React from 'react'
import { useState } from 'react'

import { Card, CardContent, TextField, Button } from '@mui/material'
import Header from '../../components/Header/Header'
import styles from './Test.module.css'

import { Link } from 'react-router-dom'
import { Grid, Typography } from '@mui/material'

const CreateTest = () => {
  const [options, setOptions] = useState({
    NoOfQuestions: 0,
    time: 0,
    testTitle: '',
    testDescription: '',
  })

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
                onChange={(event) => {
                  setOptions({
                    ...options,
                    NoOfQuestions: event.target.value,
                  })
                }}
              />
              <br />
              <br />
              <TextField
                label='Time (minutes)'
                type='number'
                onChange={(event) => {
                  setOptions({
                    ...options,
                    time: event.target.value,
                  })
                }}
              />
              <br />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label='Test Title'
                type='text'
                onChange={(event) => {
                  setOptions({
                    ...options,
                    testTitle: event.target.value,
                  })
                }}
              />
              <br />
              <br />
              <TextField
                label='Test Description'
                type='text'
                onChange={(event) => {
                  setOptions({
                    ...options,
                    testDescription: event.target.value,
                  })
                }}
              />
              <br />
            </Grid>
          </Grid>
          <br />
        </CardContent>

        <Button variant='contained' color='primary' className={styles.button}>
          Next
        </Button>
      </Card>
    </>
  )
}

export default CreateTest
