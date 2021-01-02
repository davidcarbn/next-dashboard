import { useEffect } from 'react'
import styles from './DashboardLayout.module.css'
import Link from 'next/link'
const DashboardLayout = ({ children, pages }) => {

    return (
        <>
            <div className={styles.container}>
                <div id="dashboard-layout-header" className={styles.header}>
                    <div className={styles.headerItems}>
                        <label htmlFor="dashboard-layout-toggle">Toggle</label>
                    </div>
                    <div className={styles.headerItems}>
                        <div>lang</div>
                        <div>profil</div>
                    </div>
                </div>
                <div className={styles.menuContentWrapper}>
                    <input id="dashboard-layout-toggle" type="checkbox" />
                    <div id="dashboard-layout-menu" className={styles.menu}>
                        <ul className={styles.menuList}>{
                            pages && pages.map((page) => (
                                <li>
                                    <Link href={page.path}>
                                        <a>{page.name}</a>
                                    </Link>
                                    {page.subPages ? (<ul>
                                        {page.subPages.map((subPage) => (
                                            <li>
                                                <Link href={subPage.path}>
                                                    <a>{subPage.name}</a>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>) : null}
                                </li>
                            ))
                        }</ul>
                    </div>
                    <div id="dashboard-layout-content" className={styles.content}>
                        <div className={styles.pageContainer}>
                            {children}
                        </div>
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