import { Route, Routes, Navigate } from 'react-router-dom'
import Signup from './pages/Signup/SignUp'
import Login from './pages/Login/Login'
import ResetPwd from './pages/ResetPwd/reset'
import SetPwd from './pages/ResetPwd/SetPwd'
import Profile from './pages/Profile/Profile'
import ErrorPage from './ErrorPage/ErrorPage'
import DashBoard from './pages/DashBoard/DashBoard'
function App() {
  return (
    <Routes>
      <Route path='/signup' exact element={<Signup />} />
      <Route path='/login' exact element={<Login />} />
      <Route path='/resetPwd' exact element={<ResetPwd />} />
      <Route path='/dashboard' exact element={<DashBoard />} />
      <Route path='/SetPwd' exact element={<SetPwd />} />
      <Route path='/profile' exact element={<Profile />} />
      <Route path='/' exact element={<Navigate replace to='/login' />} />
      <Route path='*' exact element={<ErrorPage />} />
    </Routes>
  )
}

export default App
