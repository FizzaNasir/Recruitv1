import { Route, Routes, Navigate } from 'react-router-dom'
import {
  Signup,
  Login,
  ResetPwd,
  SetPwd,
  Profile,
  ErrorPage,
  DashBoard,
} from './exports'
function App() {
  return (
    <Routes>
      <Route path='/signup' exact element={<Signup />} />
      <Route path='/login' exact element={<Login />} />
      <Route path='/resetPwd' exact element={<ResetPwd />} />
      <Route path='/dashboard' exact element={<DashBoard />} />
      <Route path='/resetPassword/:token' exact element={<SetPwd />} />
      <Route path='/OtpScreen' exact element={<OtpScreen />} />
      <Route path='/phoneValidation' exact element={<PhoneValidation />} />

      {/* for page after skiping */}
      {/* <Route path='/phoneValidation' exact element={<PhoneValidation />} /> */}
      <Route path='/profile' exact element={<Profile />} />
      <Route path='/' exact element={<Navigate replace to='/login' />} />
      <Route path='*' exact element={<ErrorPage />} />
    </Routes>
  )
}

export default App
