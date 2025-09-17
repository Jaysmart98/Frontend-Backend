import { Route , Routes} from 'react-router-dom'
import SignUp from './Pages/Signup/Signup.jsx'
import Signin from './Pages/Signin/Signin.jsx'
import Dashboard from './Pages/Dashboard/Dashboard.jsx'
import Form from './Pages/Form/Form.jsx'
import {ToastContainer} from 'react-toastify'

function App() {

  return (
    <>
      <ToastContainer/>
      <Routes>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path="/signin" element={<Signin/>} />
        <Route path="/dashboard" element={<Dashboard/>}/>
         <Route path="/form" element={<Form/>}/>
      </Routes>
    </>
  )
}

export default App
