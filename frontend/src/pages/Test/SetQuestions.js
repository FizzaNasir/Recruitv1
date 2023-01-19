import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import classes from './Test.module.css'

import {
  Card,
  CardContent,
  FormControl,
  MenuItem,
  TextField,
  Button,
  Grid,
  InputLabel,
  Select,
  Paper,
} from '@mui/material'

const SetQuestions = () => {
  const [question, setQuestions] = useState({
    question: '',
    optionA: '',
    optionB: '',
    optionC: '',
    optionD: '',
    correctAnswer: '',
  })

  const handleChange = (event) => {
    setQuestions({ ...question, [event.target.name]: event.target.value })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(question)
  }
  return (
    <>
      <Header />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <form onSubmit={handleSubmit}>
                <TextField
                  required
                  id='question'
                  name='question'
                  label='Question'
                  className={classes.textField}
                  value={question.question}
                  onChange={handleChange}
                  margin='normal'
                />
                <br />
                <br />
                <TextField
                  required
                  id='optionA'
                  name='optionA'
                  label='Option A'
                  className={classes.textField}
                  value={question.optionA}
                  onChange={handleChange}
                  margin='normal'
                />
                <br />
                <br />
                <TextField
                  required
                  id='optionB'
                  name='optionB'
                  label='Option B'
                  className={classes.textField}
                  value={question.optionB}
                  onChange={handleChange}
                  margin='normal'
                />
                <br />
                <br />
                <TextField
                  required
                  id='optionC'
                  name='optionC'
                  label='Option C'
                  className={classes.textField}
                  value={question.optionC}
                  onChange={handleChange}
                  margin='normal'
                />
                <br />
                <br />
                <TextField
                  required
                  id='optionD'
                  name='optionD'
                  label='Option D'
                  className={classes.textField}
                  value={question.optionD}
                  onChange={handleChange}
                  margin='normal'
                />
                <br />
                <br />
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor='correctOption'>
                    Correct Option
                  </InputLabel>
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
                <br />
                <br />
                <Button
                  type='submit'
                  variant='contained'
                  color='primary'
                  className={classes.button}
                >
                  Add Question
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default SetQuestions
