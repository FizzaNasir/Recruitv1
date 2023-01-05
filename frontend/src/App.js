import { Route, Routes, Navigate } from 'react-router-dom'
import Signup from './pages/Signup/SignUp'
import Login from './pages/Login/Login'
import Profile from './pages/Profile/Profile'
function App() {
  return (
    <Routes>
      <Route path='/signup' exact element={<Signup />} />
      <Route path='/login' exact element={<Login />} />
      <Route path='/profile' exact element={<Profile />} />
      <Route path='/' exact element={<Navigate replace to='/login' />} />
    </Routes>
  )
}

export default App
