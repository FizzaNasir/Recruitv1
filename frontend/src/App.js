import { Route, Routes, Navigate } from 'react-router-dom'
import { CssBaseline, Grid, StyledEngineProvider } from '@mui/material'
import {
  Signup,
  Login,
  ResetPwd,
  SetPwd,
  Profile,
  ErrorPage,
  DashBoard,
  EmailOtp,
  PhoneNbrVerify,
  ContactUs,
  AboutUs,
  PhoneOtp,
  CompanyRegistration,
  CreateTest,
  SetQuestions,
  PostJob,
  Home,
  Registration,
  JobListing,
  JobDescription,
  Quiz,
} from './exports'

function App() {
  return (
    <>
      <CssBaseline />
      <StyledEngineProvider>
        <Routes>
          <Route path='/signup' exact element={<Signup />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/resetPwd' exact element={<ResetPwd />} />
          <Route path='user/dashboard/*' exact element={<DashBoard />} />
          <Route path='/resetPassword/:token' exact element={<SetPwd />} />
          <Route path='/verifyYourEmail' exact element={<EmailOtp />} />
          <Route
            path='/enterYourPhoneNbr'
            exact
            element={<PhoneNbrVerify state />}
          />
          <Route path='/verifyYourPhoneNbr' exact element={<PhoneOtp />} />
          <Route path='/register' exact element={<Registration />} />
          <Route path='/contactUs' exact element={<ContactUs />} />
          <Route path='/aboutUs' exact element={<AboutUs />} />

          <Route path='/test/createTest' exact element={<CreateTest />} />
          <Route path='/test/set-questions' exact element={<SetQuestions />} />
          <Route path='/postJob' exact element={<PostJob />} />
          <Route path='/JobListing' exact element={<JobListing />} />
          <Route path='/takeTest' exact element={<Quiz />} />
          <Route path='/jobDescription' exact element={<JobDescription />} />

          {/* for page after skiping */}
          {/* <Route path='/PhoneNbrVerify' exact element={<PhoneNbrVerify />} /> */}
          <Route path='/user/12343' exact element={<Profile />} />
          <Route path='/home' exact element={<Home />} />
          <Route path='/' exact element={<Navigate replace to='/login' />} />
          <Route path='*' exact element={<ErrorPage />} />
          <Route
            path='/register_company'
            exact
            element={<CompanyRegistration state />}
          />
        </Routes>
      </StyledEngineProvider>
    </>
  )
}

export default App
