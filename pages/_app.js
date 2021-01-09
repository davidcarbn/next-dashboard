import { useMemo } from 'react'
import DashboardLayout from '../components/DashboardLayout/index.js'
import '../styles/globals.css'



function MyApp({ Component, pageProps }) {
  
  console.log("App rerender")
  return (
    <DashboardLayout>
      <Component {...pageProps} />
    </DashboardLayout>
  )
}

export default MyApp
