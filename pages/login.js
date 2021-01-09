import { useAuth } from "../context/AuthContext"

const authenticateToServer = () => {
    return new Promise((res,rej) => {
        setTimeout(() => res({
            name: "David",
            email: "david@example.com"
        }),5000)
        
    })
}

const Login = () => {
const { setUser } = useAuth()
    const login = async () => {
        const user = await authenticateToServer()
        setUser(user)
    }
    return (
        <>
            <h1>Login</h1>
            <input onClick={login} type="submit" value="Click to Login"/>
        </>
    )
}
export default Login