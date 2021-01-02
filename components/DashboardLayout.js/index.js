import { useEffect } from 'react'
import styles from './DashboardLayout.module.css'
const DashboardLayout = ({ children }) => {
    useEffect(() => {
        const btn = document.querySelector('#dashboard-layout-toggle')
        
        btn.checked = true;
    },[])
    return (
        <>
            <div id="dashboard-layout" className={styles.container}>
                <div id="dashboard-layout-header">
                    <label htmlFor="dashboard-layout-toggle">Toogle</label>
                </div>
                <input id="dashboard-layout-toggle" type="checkbox" />
                <div id="dashboard-layout-menu">
                    <div>Menu</div>
                    <div>testtsdaasdlakjlkadljaslkjl</div></div>
                <div id="dashboard-layout-content">{children}</div>

            </div>
        </>
    )
}

export default DashboardLayout