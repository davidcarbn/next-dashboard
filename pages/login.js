import { useRouter } from "next/router"
import { useAuth } from "../context/AuthContext"

const Login = () => {
const { setUser } = useAuth()
const router = useRouter()
const login = async () => {
        try {
            const res = await fetch('/api/login')
            const obj = await res.json()
            if (obj.error) {
                console.log("login failed")
                return;
            }
            setUser(obj.user)
            router.replace(router.query.prev || "/")
            

        } catch (error) {
            console.log(error)
        }
        
    }
    return (
        <>
            <h1>Login</h1>
            <input onClick={login} type="submit" value="Click to Login"/>
        </>
    )
}

export const getServerSideProps = (ctx) => {
    if (ctx.req.headers.cookie?.includes('token')) {
        return {
          redirect: {
            destination: '/',
            permanent: false
          }
        }
      }
      return {
        props: {}
      }
}
export default Login