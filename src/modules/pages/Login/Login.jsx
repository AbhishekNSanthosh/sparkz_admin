import React from 'react'
import styles from './Login.module.css'

export default function Login() {
  return (
    <div className={styles.container}>
        <div className={styles.wrap}>
            <div className={styles.box}>
                <div className={styles.row}>
                    <span className={styles.title}>Admin Login</span>
                </div>
                <div className={styles.row}>
                    <input type="text" placeholder='Username' className={styles.inp} />
                    <input type="text" placeholder='password' className={styles.inp} />
                </div>
                <div className={styles.row}>
                    <button className={styles.button}>
                        Login
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
