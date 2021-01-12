import Head from 'next/head'
import { useAuth } from '../context/AuthContext'
import { checkUserAuthServerSide } from '../helpers/checkUserAuthServerSide'
import styles from '../styles/Home.module.css'

const Dashboard = () => {
  return (
    <>
      <h1>Dashboard</h1>
      
    </>
  )
}
export const getServerSideProps = checkUserAuthServerSide
export default Dashboard
