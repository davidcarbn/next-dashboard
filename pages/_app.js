import DashboardLayout from '../components/DashboardLayout.js'
import '../styles/globals.css'

const pages = [{
  name: "Dashboard",
  path: "/",
  subPages: []
},{
  name: "About",
  path: "/about",
  subPages: []
},{
  name: "Settings",
  path: "/settings",
  subPages: [{
    name: "Domain Settings",
    path: "/settings/domain"
  },{
    name: "Subscription Plans",
    path: "/settings/subscription"
  }]
}]

function MyApp({ Component, pageProps }) {
  return (
    <DashboardLayout pages={pages}>
      <Component {...pageProps} />
    </DashboardLayout>
  )
}

export default MyApp
