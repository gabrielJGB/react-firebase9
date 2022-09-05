import { createContext, useState } from 'react'

export const UserContext = createContext()

const userProvider = (props) => {
    const [user, setUser] = useState(false)

    return (
        <div>
            <UserContext.Provider value={{user,setUser}}>
                {props.children}
            </UserContext.Provider>
        </div>
    )
}

export default userProvider