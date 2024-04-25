import React from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                <div className={styles.left}>
                    <span className={styles.logo}>
                        Sparkz Admin Panel
                    </span>
                </div>
                <div className={styles.right}>
                    <button className={styles.logout}>Logout</button>
                </div>
            </div>
        </div>
    )
}
