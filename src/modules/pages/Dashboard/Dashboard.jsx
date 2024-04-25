import React, { useEffect, useState } from 'react'
import styles from './Dashboard.module.css'
import { getEventList } from './services/api'

export default function Dashboard() {
    const [eventList, setEventList] = useState([]);
    useEffect(() => {
        getEventList(setEventList)
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                <div className={styles.row}>
                    <span className={styles.eventListBox}>Event List</span>
                </div>
                <div className={styles.box}>
                    {eventList?.map((event) => (
                        <div className={styles.eventList}>
                            <span className={styles.title}>{event?.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
