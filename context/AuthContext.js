import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
    user: {
        name: undefined
    },
    setUser: () => { },
    isAuth: () => { }
})

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const isAuth = () => {
        return !!user
    }
    useEffect(() => {
        console.log("user fetch")
        const getUser = async () => {
            try {
                const res = await fetch('/api/me')
                const obj = await res.json()
                setUser(obj.user)
            } catch (error) {
                console.log(error)
            }
        }
        getUser()
    },[])
    console.log("AuthProvider rerender")
    return (
        <AuthContext.Provider value={{ user, setUser, isAuth }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider
export const useAuth = () => useContext(AuthContext)