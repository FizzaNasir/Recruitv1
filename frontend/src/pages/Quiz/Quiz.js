import React from 'react';
import Header from '../../components/Header/Header'
import { useNavigate } from 'react-router-dom'
import { Stack, Box, Typography, Grid, FormControl } from '@mui/material';
import { useState, useEffect } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';


const questions = [
    {
        statement: "Which of these features of OOP would indicate code reusability?",
        A: "Polymorphism",
        B: " Abstraction",
        C: "Inheritance",
        D: "Encapsulation",
        correct: 'C'
    },
    {
        statement: "What is your name?",
        A: "Abdullah",
        B: "Talha",
        C: "Fizza",
        D: "Abid",
        correct: 'A'
    },
    {
        statement: "Where are you from?",
        A: "Lahore",
        B: "Burewala",
        C: "Mandi",
        D: "Dubai",
        correct: 'B'
    },
    {
        statement: "How are you?",
        A: "Fine",
        B: "Good",
        C: "Alhamdullilah",
        D: "Not Good",
        correct: 'C'
    }
];

function Quiz() {

    const [questionNo, SetQuestionNo] = useState(0);
    const [question, SetQuestion] = useState(questions[questionNo]);
    const [optionValue, setOptionValue] = useState();
    console.log(optionValue);

    useEffect(() => {
        SetQuestion(questions[questionNo]);
    }, [questionNo])

    return (
        <Stack direction="column">
            <Header />
            <Typography variant='h6' align='center' mt="10px">Read the Question carefully and Choose the Correct Answer</Typography>

            <Box sx={{ display: "flex", flexDirection: 'column', boxShadow: "1px 1px 5px grey", margin: "20px 30px", borderRadius: '10px', border: "1px blue solid", }}>
                <Typography variant='h6' align='center' padding={1} >Question {questionNo + 1}</Typography>

                <Typography variant='h6' align='center'>{question.statement}</Typography>
                <Box
                    sx={{
                        margin: '10px auto',
                        width: "90%",
                        border: "1px grey solid",
                        padding: "20px",
                        borderRadius: "10px"
                    }}
                >
                    <FormControl>
                        <Grid paddingLeft={2} container rowSpacing={1} columnSpacing={1}>
                            <RadioGroup
                                row
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                            >
                                <Grid item xs={12} md={6} width="50vw">
                                    <FormControlLabel value={question.A} control={<Radio />} label={question.A} />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FormControlLabel value={question.B} control={<Radio />} label={question.B} />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FormControlLabel value={question.C} control={<Radio />} label={question.C} />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FormControlLabel value={question.D} control={<Radio />} label={question.D} />
                                </Grid>
                            </RadioGroup>
                        </Grid>
                    </FormControl>
                </Box>

                <Stack justifyContent='space-between' alignItems='center' margin='10px 20px' padding="5px" direction={{ xs: 'column', sm: 'row' }}>
                    <Button sx={{ marginTop: "10px" }} variant="contained" size="medium" disabled={questionNo == 0 ? true : false} onClick={() => { SetQuestionNo(questionNo - 1) }} >
                        Previous
                    </Button>
                    <Button sx={{ marginTop: "10px" }} variant="contained" size="medium" onClick={() => { SetQuestionNo(questionNo + 1) }}>
                        {questionNo != (questions.length - 1) ? "Next" : "Submit"}
                    </Button>
                </Stack>
            </Box >
        </Stack >
    )
}

export default Quiz