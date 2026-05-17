
import { Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import CreateTask from '../pages/CreateTask'
import FreelancerDashboard from '../pages/FreelancerDashboard'
import Ratings from '../pages/Ratings'
import Payments from '../pages/Payments'

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/create-task' element={<CreateTask />} />
      <Route path='/dashboard' element={<FreelancerDashboard />} />
      <Route path='/ratings' element={<Ratings />} />
      <Route path='/payments' element={<Payments />} />
    </Routes>
  )
}

export default AppRoutes
