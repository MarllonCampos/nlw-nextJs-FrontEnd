import { useEffect, useState } from 'react'
import styles from '../styles/components/CountDown.module.css'


let countdownTimeout: NodeJS.Timeout;

export function CountDown() {
    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = minutes.toString().padStart(2, '0').split('')
    const [secondLeft, secondRight] = seconds.toString().padStart(2, '0').split('')


    const startCountDown = () => {
        setIsActive(true);
    };

    const resetCountDown = () => {
        clearTimeout(countdownTimeout)
        setIsActive(false);
        setTime(0.1 * 60)
    };

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        } else if (isActive && time == 0) {
            setHasFinished(true)
            setIsActive(false)
        }
    }, [isActive, time]);

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


            {hasFinished ?
                (<button
                    disabled
                    className={styles.countDownButton}
                >
                    Ciclo Encerrado <img style={{marginLeft:'0.4rem'}}src="icons/check_circle.svg" alt="confimando ciclo"/>
                </button>) :(
                <>
                {isActive ?
                    (<button
                        type="button"
                        onClick={resetCountDown}
                        className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
                    >
                        Abandonar Ciclo <img style={{marginLeft:'0.4rem'}}src="icons/close_black.svg" alt="icon iniciar ciclo"/>
                    </button>
                    ) : (<button
                        type="button"
                        onClick={startCountDown}
                        className={styles.countDownButton}
                    >
                        Inicar Ciclo <img style={{marginLeft:'0.4rem'}}src="icons/play_arrow.svg" alt="icon iniciar ciclo"/>
                    </button>)}
                </>)}



        </div>
    )
}