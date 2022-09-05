import { Routes, Route } from 'react-router-dom'
import Login from "./routes/Login";
import Home from "./routes/Home";
import Navbar from "./components/Navbar";
import RequireAuh from './components/RequireAuh';

const App = () => {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={
          <RequireAuh>
            <Home/>
          </RequireAuh>
        }/>
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
