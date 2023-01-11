import { Route, Routes, Navigate } from 'react-router-dom'
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
  PhoneOtp,
} from './exports'
function App() {
  return (
    <Routes>
      <Route path='/signup' exact element={<Signup />} />
      <Route path='/login' exact element={<Login />} />
      <Route path='/resetPwd' exact element={<ResetPwd />} />
      <Route path='/dashboard' exact element={<DashBoard />} />
      <Route path='/resetPassword/:token' exact element={<SetPwd />} />
      <Route path='/verifyYourEmail' exact element={<EmailOtp />} />
      <Route
        path='/enterYourPhoneNbr'
        exact
        element={<PhoneNbrVerify state />}
      />
      <Route path='/verifyYourPhoneNbr' exact element={<PhoneOtp />} />
      <Route path='/contactUs' exact element={<ContactUs />} />

      {/* for page after skiping */}
      {/* <Route path='/PhoneNbrVerify' exact element={<PhoneNbrVerify />} /> */}
      <Route path='/profile' exact element={<Profile />} />
      <Route path='/' exact element={<Navigate replace to='/login' />} />
      <Route path='*' exact element={<ErrorPage />} />
    </Routes>
  )
}

export default App
