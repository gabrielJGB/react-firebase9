import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/userProvider'

const Login = () => {
    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate()

    const handleLogin = ()=>{
        setUser(true)
        navigate("/")
    }

    return (
        <>
            <h2>Login Page</h2>
            {
                user ? "Conectado" : "Desconectado"
            }
            <button onClick={handleLogin}>Acceder</button>
        </>
    )
}

export default Login