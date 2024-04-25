import React, { useEffect, useState } from 'react'
import styles from './Dashboard.module.css'
import { getEventList, getEventListByDep, getEventStats } from './services/api'
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const [eventList, setEventList] = useState([]);
    const [stats, setStats] = useState({})
    const dep = localStorage.getItem('dep');
    const navigate = useNavigate();
    useEffect(() => {
        if (!dep) {
            navigate('/login')
        } else {
            if (dep === "super") {
                getEventList(setEventList);
                getEventStats(setStats)
            } else {
                getEventListByDep(setEventList, dep);
            }
        }
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                {dep === "super" &&
                    <div className={styles.rowtop}>
                        <span className={styles.count}>Total Registrations:{stats?.total}</span>
                        <span className={styles.count}>CSE: {stats?.cse}</span>
                        <span className={styles.count}>EEE: {stats?.eee}</span>
                        <span className={styles.count}>MECH: {stats?.mech}</span>
                        <span className={styles.count}>CIVIL: {stats?.civil}</span>
                        <span className={styles.count}>Basic Science: {stats?.bsc}</span>
                    </div>
                }
                <div className={styles.row}>
                    <span className={styles.eventListBox}>Event List</span>
                </div>
                <div className={styles.box}>
                    {eventList?.map((event) => (
                        <div className={styles.eventList} onClick={() => {
                            navigate(`/event/${event?._id}`)
                        }}>
                            <span className={styles.title}>{event?.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
