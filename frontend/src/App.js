import { Route, Routes, Navigate } from 'react-router-dom'
import Signup from './pages/Signup/SignUp'
import Login from './pages/Login/Login'
import ResetPwd from './pages/ResetPwd/reset'
import SetPwd from './pages/ResetPwd/SetPwd'
import OtpScreen from './pages/OtpScreen/OtpScreen'
import PhoneValidation from './pages/Phone-validation/Phone_validation'
function App() {
  return (
    <Routes>
      <Route path='/signup' exact element={<Signup />} />
      <Route path='/login' exact element={<Login />} />
      <Route path='/login' exact element={<Login />} />
      <Route path='/resetPwd' exact element={<ResetPwd />} />
      <Route path='/SetPwd' exact element={<SetPwd />} />
      <Route path='/OtpScreen' exact element={<OtpScreen />} />
      <Route path='/phoneValidation' exact element={<PhoneValidation />} />
      
      {/* for page after skiping */}
      {/* <Route path='/phoneValidation' exact element={<PhoneValidation />} /> */}
      <Route path='/' exact element={<Navigate replace to='/login' />} />
    </Routes>
  )
}

export default App
