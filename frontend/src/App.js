import { Route, Routes, Navigate } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

import { CssBaseline, StyledEngineProvider } from '@mui/material'
import { ChakraProvider } from '@chakra-ui/react'
import {
  Signup,
  Login,
  ForgotPassword,
  ResetPassword,
  Profile,
  PageNotFound,
  DashBoard,
  EmailOtp,
  PhoneNbrVerify,
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
  CompanyView,
  Preview,
  SuccessMsg,
  CompanyDashBoard,
  CompanyReviews,
  LandingPage,
} from './exports'
import ForgetPassword from './pages/ForgetPassword/ForgetPassword'

function App() {
  return (
    <>
      <CssBaseline />
      <ChakraProvider>
        <StyledEngineProvider>
          <Routes>
            {/* Authentication */}
            <Route path='/' exact element={<LandingPage />} />
            <Route path='/signup' exact element={<Signup />} />
            <Route path='/login' exact element={<Login />} />
            <Route path='/verifyYourEmail' exact element={<EmailOtp />} />
            <Route path='/forgetPassword' exact element={<ForgetPassword />} />
            <Route
              path='/resetPassword/:token'
              exact
              element={<ResetPassword />}
            />

            {/* User Routes */}
            <Route path='user/dashboard/*' exact element={<DashBoard />} />

            <Route path='/dashboard' exact element={<DashBoard />} />

            <Route
              path='/enterYourPhoneNbr'
              exact
              element={<PhoneNbrVerify state />}
            />
            <Route path='/user/:id' exact element={<Profile />} />

            <Route path='/verifyYourPhoneNbr' exact element={<PhoneOtp />} />

            {/* company dashboard */}
            <Route
              path='company/company_dashboard'
              exact
              element={<CompanyDashBoard />}
            />
            <Route
              path='company/company_dashboard/postJob'
              exact
              element={<PostJob />}
            />
            <Route
              path='company/company_dashboard/reviews'
              exact
              element={<CompanyReviews />}
            />

            <Route path='/register' exact element={<Registration />} />

            <Route path='/test/createTest' exact element={<CreateTest />} />
            <Route
              path='/test/set-questions'
              exact
              element={<SetQuestions />}
            />
            <Route path='/postJob' exact element={<PostJob />} />
            <Route path='/JobListing' exact element={<JobListing />} />
            <Route path='/takeTest' exact element={<Quiz />} />
            <Route
              path='/jobDescription/:id'
              exact
              element={<JobDescription />}
            />

            {/* for page after skiping */}
            {/* <Route path='/PhoneNbrVerify' exact element={<PhoneNbrVerify />} /> */}
            <Route path='/company/:id' exact element={<CompanyView />} />

            <Route path='/home' exact element={<Home />} />
            <Route path='/' exact element={<Navigate replace to='/login' />} />
            <Route path='*' exact element={<PageNotFound />} />
            <Route
              path='/register_company'
              exact
              element={<CompanyRegistration state />}
            />
            <Route
              path='/Successful_Submission'
              exact
              element={<SuccessMsg />}
            />
            <Route path='/Preview' exact element={<Preview />} />
          </Routes>
        </StyledEngineProvider>
      </ChakraProvider>
    </>
  )
}

export default App
