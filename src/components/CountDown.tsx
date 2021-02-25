import { useEffect, useState } from 'react'
import styles from '../styles/components/CountDown.module.css'

export function CountDown() {
    const [time, setTime] = useState(23 * 60);
    const [active, setActive] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = minutes.toString().padStart(2, '0').split('')
    const [secondLeft, secondRight] = seconds.toString().padStart(2, '0').split('')


    const startCountDown = () => {
        setActive(true)
    }

    useEffect(() => {
        if (active && time > 0) {
            setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        }
    }, [active, time])

    return (

        <div>

            <div className={styles.countDownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>
            <button
                type="button"
                onClick={startCountDown}
                className={styles.countDownButton}>
                Inicar Ciclo
            </button>
        </div>
    )
}