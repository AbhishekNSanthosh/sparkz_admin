import React from 'react'
import styles from './Navbar.module.css'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

export default function Navbar() {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                <div className={styles.left}>
                    <span className={styles.logo}>
                        Sparkz Admin Panel
                    </span>
                </div>
                <div className={styles.right}>
                    <button className={styles.logout} onClick={() => {
                        localStorage.clear();
                        toast.success("Logout successful. Redirecting to login page")
                        setTimeout(() => {
                            navigate('/login')
                        }, 500);
                    }}>Logout</button>
                </div>
            </div>
        </div>
    )
}
