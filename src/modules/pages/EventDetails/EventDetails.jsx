import React, { useEffect, useState } from 'react'
import styles from './EventDetails.module.css'
import { useParams } from 'react-router-dom'
import { getEventDetials } from './services/api';

export default function EventDetails() {
    const [event, setEvent] = useState([]);

    const dep = localStorage.getItem('dep');
    const params = useParams();
    const name = event[0]?.event?.title
    console.log(params?.id);

    useEffect(() => {
        getEventDetials(params?.id, setEvent)
    }, [])
    console.log(event?.team)
    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                <div className={styles.row}>
                    <span className={styles.etitle}>{name}</span>
                </div>
                {event?.length !== 0 &&
                    <div className={styles.row}>
                        <span className={styles.title}>No. of Registrations : {event?.length}</span>
                    </div>
                }
                {event?.length === 0 ?
                    <div className={styles.box}>
                        <span className={styles.warn}>No registrations yet!!!</span>
                    </div>
                    :
                    <div className={styles.box}>
                        {event?.map((item, index) => (
                            <div className={styles.eventRow} key={index}>
                                <div className={styles.left}>
                                    <span className={styles.eventName}>{item?.event?.title}</span>
                                </div>
                                <div className={styles.left}>
                                    <span className={styles.eventName}>Name: {item?.registeredUser?.firstName}</span>
                                </div>
                                <div className={styles.left}>
                                    <span className={styles.eventName}>Class: {item?.registeredUser?.department}</span>
                                </div>
                                <div className={styles.left}>
                                    <span className={styles.eventName}>Mobile No: {item?.registeredUser?.mobileNo}</span>
                                </div>
                                <div className={styles.left}>
                                    <span className={styles.eventName}>Email: {item?.registeredUser?.email}</span>
                                </div>
                                {item?.event.isTeam &&
                                    <>
                                        <div className={styles.hr}></div>

                                        <div className={styles.team}>
                                            <span className={styles.eventName}>Team</span>
                                        </div>
                                        <div className={styles.hr}></div>
                                    </>
                                }
                                <div className={styles.teamList}>
                                    {item?.team?.map((team) => (
                                        <div className={styles.teamBox}>
                                            <span className={styles.eventName}>{team?.studentName}</span>
                                            {team?.class &&
                                                <span className={styles.eventName}>Class:{team?.class}</span>
                                            }
                                            {team?.dob &&
                                                <span className={styles.eventName}>Dob:{team?.dob}</span>
                                            }
                                            <span className={styles.eventName}>{team?.semester}</span>
                                            <span className={styles.eventName}>{team?.school}</span>
                                            <span className={styles.eventName}>{team?.schoolAddress}</span>

                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}
