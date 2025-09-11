import { Route , Routes} from 'react-router-dom'
import SignUp from './Pages/Signup/Signup.jsx'
import Signin from './Pages/Signin/Signin.jsx'
import Dashboard from './Pages/Dashboard/Dashboard.jsx'
import {ToastContainer} from 'react-toastify'

function App() {

  return (
    <>
      <ToastContainer/>
      <Routes>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path="/signin" element={<Signin/>} />
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </>
  )
}

export default App
