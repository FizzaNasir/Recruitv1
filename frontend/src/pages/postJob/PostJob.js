import React from 'react'
import TextareaAutosize from '@mui/base/TextareaAutosize'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  Grid,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
} from '@mui/material'
import Header from '../../components/Header/Header'
import styles from './PostJob.module.css'
import { postJob } from '../../util/api-call'

const PostJob = () => {
  //const {title, description, location, salaryRange, mode, type, skills}
  const [job, setJob] = useState({
    title: '',
    description: '',
    location: '',
    salaryRange: '',
    mode: '',
    type: '',
    skills: '',
  })
  const [error, setError] = useState(false)
  const navigate = useNavigate()
  const changeHandler = (event) => {
    setJob({ ...job, [event.target.name]: event.target.value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(job)
    // validate the question data except salary range
    if (
      job.title === '' ||
      job.description === '' ||
      job.location === '' ||
      job.mode === '' ||
      job.type === '' ||
      job.skills === ''
    ) {
      setError(true)
      return
    }

    const data = {
      title: job.title,
      description: job.description,
      location: job.location,
      salaryRange: job.salaryRange,
      mode: job.mode,
      type: job.type,
      skills: job.skills,
    }

    const response = await postJob(data)
    if (response === 200) {
      navigate('/test/createTest')
    }
    console.log(response)
    //setError(true)
  }

  return (
    <>
      <Header />
      <Card className={styles.card}>
        <CardContent>
          <Typography
            variant='h4'
            className={styles.heading}
            style={{ marginBottom: '30px' }}
          >
            Post a Job
          </Typography>

          <form className={styles.form}>
            <TextField
              className={styles.input}
              label='Job Title'
              variant='outlined'
              name='title'
              onChange={changeHandler}
              size='small'
              fullWidth
            />
            <TextareaAutosize
              aria-label='Job Description'
              placeholder='Job Description'
              minRows={3}
              rowsMin={3}
              name='description'
              onChange={changeHandler}
              style={{
                width: '100%',
                marginTop: '20px',
                fontSize: '16px',
                maxHeight: '80px',
                maxWidth: '100%',
                padding: '10px',
                border: '1px solid #ccc',
              }}
            />
            <div className={styles.row}>
              <TextField
                className={styles.input}
                label='Location'
                name='location'
                onChange={changeHandler}
                variant='outlined'
                size='small'
                fullWidth
              />
              <TextField
                className={styles.input}
                label='Salary Range'
                name='salaryRange'
                onChange={changeHandler}
                variant='outlined'
                size='small'
                fullWidth
              />
            </div>
            <div className={styles.row}>
              <FormControl
                className={styles.formControl}
                style={{ width: '50%' }}
              >
                <InputLabel htmlFor='mode'>Mode</InputLabel>
                <Select
                  value={job.mode}
                  onChange={changeHandler}
                  name='mode'
                  inputProps={{
                    name: 'mode',
                    id: 'mode',
                  }}
                >
                  <MenuItem value='Onsite'>Onsite</MenuItem>
                  <MenuItem value='Remote'>Remote</MenuItem>
                  <MenuItem value='Hybrid'>Hybrid</MenuItem>
                </Select>
              </FormControl>
              <FormControl
                className={styles.formControl}
                style={{ width: '50%' }}
              >
                <InputLabel htmlFor='type'>Type</InputLabel>
                <Select
                  value={job.type}
                  onChange={changeHandler}
                  name='type'
                  inputProps={{
                    name: 'type',
                    id: 'type',
                  }}
                >
                  <MenuItem value='Full-Time'>Full-Time</MenuItem>
                  <MenuItem value='Part-time'>Part-Time</MenuItem>
                  <MenuItem value='Contract'>Contract</MenuItem>
                  <MenuItem value='Internship'>Internship</MenuItem>
                  <MenuItem value='Other'>Other</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className={styles.row}>
              <TextField
                className={styles.input}
                label='Skills'
                name='skills'
                onChange={changeHandler}
                variant='outlined'
                size='small'
                fullWidth
              />
              <Button
                className={styles.button}
                variant='contained'
                color='primary'
                onClick={handleSubmit}
              >
                Post Job
              </Button>
            </div>
          </form>
          {error && (
            <Typography
              variant='h6'
              style={{ color: 'red', marginTop: '20px', textAlign: 'center' }}
            >
              Please fill all the fields
            </Typography>
          )}
        </CardContent>
      </Card>
    </>
  )
}

export default PostJob
