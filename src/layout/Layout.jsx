import React, { Suspense, useEffect } from 'react'
import styles from './Layout.module.css'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Navbar from '../modules/Widgets/Navbar/Navbar'
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
    const token = localStorage.getItem('accessToken');
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (!token) {
    //         navigate('/');
    //     }
    // }, []);

    return (
        <div className={styles.fullPage}>
                <Navbar />
                <div className={styles.mainContent}>
                    <Suspense>
                        <Outlet />
                    </Suspense>
            </div>
        </div>
    )
}

export default Layout