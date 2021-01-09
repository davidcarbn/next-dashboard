import React,{ useMemo, useEffect, useState, useRef } from 'react'
import {useRouter} from 'next/router'
import styles from './DashboardLayout.module.css'
import Link from 'next/link'
const DashboardLayout = ({ children }) => {
    console.log("layout rerender")
    const pages = useMemo(() => {
        return [{
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
      })

      const router = useRouter()
    console.log(router.pathname)
    const [activePage,setActivePage] = useState(router.pathname || "/")
    const menuInputRef = useRef(null)     
    const handleMenuState = (e,page) => {
        setActivePage(page)
        menuInputRef.current.checked = false
    }
    return (
        <>
            <div className={styles.container}>
                <div id="dashboard-layout-header" className={styles.header}>
                    <div className={styles.headerItems}>
                        <label htmlFor="dashboard-layout-toggle" className={styles.btnMenu}></label>
                    </div>
                    <div className={styles.headerItems}>
                        <div>lang</div>
                        <div>profil</div>
                    </div>
                </div>
                <div className={styles.menuContentWrapper}>
                    <input ref={menuInputRef} id="dashboard-layout-toggle" type="checkbox" />
                    <div id="dashboard-layout-menu" className={styles.menu}>
                        
                            <ul className={styles.menuList}>{
                            pages && pages.map((page) => (
                                <li key={page.name}>
                                    <Link href={page.path}>
                                        <a
                                            onClick={e => handleMenuState(e,page.path)}
                                            className={activePage == page.path || (activePage.includes(page.path) && page.path.length > 1) ? styles.active : null}
                                        >{page.name}</a>
                                    </Link>
                                    {page.subPages && page.subPages.length ? (<ul>
                                        {page.subPages.map((subPage) => (
                                            <li key={page.name +"-"+ subPage.name}>
                                                <Link href={subPage.path}>
                                                    <a
                                                        onClick={e => handleMenuState(e,subPage.path)}
                                                        className={activePage == subPage.path ? styles.active : null}
                                                    >{subPage.name}</a>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>) : null}
                                </li>
                            ))
                        }</ul>
                        
                        
                    </div>
                    <div id="dashboard-layout-content" className={styles.content}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}
DashboardLayout.defaultProps = {
    children: () => (<div>Loading...</div>),
    pages: []
}
export default DashboardLayout