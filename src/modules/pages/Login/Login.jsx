import React, { useEffect, useState } from 'react'
import styles from './Login.module.css'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('dep')) {
            navigate('/dashboard')
        }
    }, [])

    const users = ["cseadmin", "civiladmin", "eeeadmin", "mechadmin", "bscadmin", "superadmin"];
    const handleSubmit = () => {
        if (users.includes(username)) {
            if (username === "cseadmin") {
                if (password === "cseadmin") {
                    localStorage.setItem("dep", "cse");
                    toast.success("Login successful");
                    setTimeout(() => {
                        toast.success("Welcome to Sparkz'24 Admin Dashboard")
                        navigate('/dashboard');
                    }, 500);
                } else {
                    toast.error("Invalid credentials")
                }
            } else if (username === "civiladmin") {
                if (password === "civiladmin") {
                    localStorage.setItem("dep", "civil");
                    toast.success("Login successful");
                    setTimeout(() => {
                        toast.success("Welcome to Sparkz'24 Admin Dashboard")
                        navigate('/dashboard');
                    }, 500);
                } else {
                    toast.error("Invalid credentials")
                }
            } if (username === "eeeadmin") {
                if (password === "eeeadmin") {
                    localStorage.setItem("dep", "eee");
                    toast.success("Login successful");
                    setTimeout(() => {
                        toast.success("Welcome to Sparkz'24 Admin Dashboard")
                        navigate('/dashboard');
                    }, 500);
                } else {
                    toast.error("Invalid credentials")
                }
            } if (username === "mechadmin") {
                if (password === "mechadmin") {
                    localStorage.setItem("dep", "mech");
                    toast.success("Login successful");
                    setTimeout(() => {
                        toast.success("Welcome to Sparkz'24 Admin Dashboard")
                        navigate('/dashboard');
                    }, 500);
                } else {
                    toast.error("Invalid credentials")
                }
            } if (username === "bscadmin") {
                if (password === "bscadmin") {
                    localStorage.setItem("dep", "bsc");
                    toast.success("Login successful");
                    setTimeout(() => {
                        toast.success("Welcome to Sparkz'24 Admin Dashboard")
                        navigate('/dashboard');
                    }, 500);
                } else {
                    toast.error("Invalid credentials")
                }
            } if (username === "superadmin") {
                if (password === "superadmin") {
                    localStorage.setItem("dep", "super");
                    toast.success("Login successful");
                    setTimeout(() => {
                        toast.success("Welcome to Sparkz'24 Admin Dashboard")
                        navigate('/dashboard');
                    }, 500);
                } else {
                    toast.error("Invalid credentials")
                }
            }
        } else {
            toast.error("Invalid username")
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                <div className={styles.box}>
                    <div className={styles.row}>
                        <span className={styles.title}>Admin Login</span>
                    </div>
                    <div className={styles.row}>
                        <input type="text" onChange={(e) => {
                            setUsername(e.target.value)
                        }} placeholder='Username' className={styles.inp} />
                        <input onChange={(e) => {
                            setPassword(e.target.value)
                        }} type="text" placeholder='password' className={styles.inp} />
                    </div>
                    <div className={styles.row}>
                        <button onClick={() => {
                            handleSubmit()
                        }} className={styles.button}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
