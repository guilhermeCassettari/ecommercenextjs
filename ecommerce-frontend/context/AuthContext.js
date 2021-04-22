import { createContext, useState} from 'react'
import {useRouter} from 'next/router'
import { route } from 'next/dist/next-server/server/router'

const AuthContext = createContext()

export const AuthProvier = (props) =>{

    const [user, setUser] = useState(null)
    const router = useRouter()

    /**
     * Adds email to User
     * @param {string} email 
     */
    const logginUser = async(email) =>{
        setUser({ email })
        route.push('/')
    }


    /**
     * Log User out
     */
    const loggoutUser = () =>{
        setUser(null)
        route.push('/')
    }

    return(        
        <AuthContext.Provider calue={{ user, logginUser, loggoutUser}}>
            {props.children}
        </AuthContext.Provider>
    )
}


export default AuthContext