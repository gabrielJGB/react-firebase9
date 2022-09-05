import React, { useContext } from 'react'
import { UserContext } from '../context/userProvider'


const Home = () => {
  const { user, setUser } = useContext(UserContext)

  const logout = () => {
    setUser(false)
  }

  return (
    <>
      <h2>Home Page</h2>
      <button onClick={logout}>Salir</button>
    </>
  )
}

export default Home