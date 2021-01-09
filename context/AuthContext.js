import { createContext, useContext,useState } from "react";

const AuthContext = createContext({
    user: {},
    setUser: () => {},
    isAuth: () => {}
})

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const isAuth = () => {
        return !!user
    }
    console.log("AuthProvider rerender")
    return (
        <AuthContext.Provider value={{user,setUser,isAuth}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider
export const useAuth = () => useContext(AuthContext)