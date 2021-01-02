import DashboardLayout from '../components/DashboardLayout.js'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <DashboardLayout>
      <Component {...pageProps} />
    </DashboardLayout>
  )
}

export default MyApp
