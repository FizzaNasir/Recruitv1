import styles from './Test.module.css'
import TextareaAutosize from '@mui/base/TextareaAutosize'

import React, { useState } from 'react'
import {
  Card,
  CardContent,
  FormControl,
  MenuItem,
  TextField,
  Button,
  Grid,
  Typography,
  InputLabel,
  Select,
  Paper,
} from '@mui/material'

const EachQuestion = (props) => {
  const [question, setQuestion] = useState({
    question: '',
    optionA: '',
    optionB: '',
    optionC: '',
    optionD: '',
    correctOption: '',
  })

  const [error, setError] = useState(false)
  const handleChange = (event) => {
    setQuestion({ ...question, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // validate the question data
    if (
      question.question === '' ||
      question.optionA === '' ||
      question.optionB === '' ||
      question.optionC === '' ||
      question.optionD === '' ||
      question.correctOption === ''
    ) {
      setError(true)
      return
    }

    props.addQuestion(question)
    setQuestion({
      question: '',
      optionA: '',
      optionB: '',
      optionC: '',
      optionD: '',
      correctOption: '',
    })
  }

  return (
    <div>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <TextareaAutosize
              aria-label='Your Question'
              placeholder='Your Question'
              value={question.question}
              minRows={3}
              rowsMin={3}
              name='question'
              onChange={handleChange}
              style={{
                width: '85%',
                marginTop: '20px',
                fontSize: '20px',
                maxHeight: '80px',
                maxWidth: '700px',
                border: '1px solid black',
              }}
            />
            <br />
          </Grid>

          <Grid item xs={12} sm={6} style={{ gap: '20px' }}>
            <TextField
              value={question.optionA}
              label='Option A'
              type='text'
              name='optionA'
              onChange={handleChange}
              className={styles.option}
            />

            <TextField
              value={question.optionB}
              style={{ marginTop: '20px' }}
              label='Option B'
              type='text'
              name='optionB'
              className={styles.option}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              value={question.optionC}
              label='Option C'
              type='text'
              name='optionC'
              className={styles.option}
              onChange={handleChange}
            />

            <TextField
              value={question.optionD}
              label='Option D'
              style={{ marginTop: '20px' }}
              type='text'
              name='optionD'
              className={styles.option}
              onChange={handleChange}
            />
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12}>
          <FormControl
            className={styles.formControl}
            style={{ marginTop: '20px', width: '50%' }}
          >
            <InputLabel htmlFor='correctOption'>Correct Option</InputLabel>
            <Select
              value={question.correctOption}
              onChange={handleChange}
              inputProps={{
                name: 'correctOption',
                id: 'correctOption',
              }}
            >
              <MenuItem value='A'>A</MenuItem>
              <MenuItem value='B'>B</MenuItem>
              <MenuItem value='C'>C</MenuItem>
              <MenuItem value='D'>D</MenuItem>
            </Select>
          </FormControl>
        </Grid>
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
          }}
        >
          Please fill all the fields
        </Typography>
      )}
    </div>
  )
}

export default EachQuestion
