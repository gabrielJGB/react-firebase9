import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../context/userProvider'


const Navbar = () => {
    const {user} = useContext(UserContext)

    return (
        <div>
            <h1>Mi pagina -
                {user?(<span>Conectado</span>):(<span>Desconectado</span> )}
            </h1>
        </div>
    )
}

export default Navbar