import { useMemo } from 'react'
import DashboardLayout from '../components/DashboardLayout/index.js'
import AuthProvider from '../context/AuthContext.js'
import '../styles/globals.css'



function MyApp({ Component, pageProps, router }) {

  console.log("App rerender")
  
  if (router.pathname === '/login') {
    return (<AuthProvider><Component/>
      </AuthProvider>)
  }
  
  return (
    <AuthProvider>
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
    </AuthProvider>

  )
}

export default MyApp
