import { useContext, useEffect, useState } from 'react'
import { CountDownContext } from '../contexts/CountDownContext'
import styles from '../styles/components/CountDown.module.css'



export function CountDown() {
    const { 
        minutes,
        seconds,
        hasFinished,
        isActive,
        resetCountDown,
        startCountDown 
    } = useContext(CountDownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).toString().padStart(2, '0').split('')



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
                    Ciclo Encerrado <img style={{ marginLeft: '0.4rem' }} src="icons/check_circle.svg" alt="confimando ciclo" />
                </button>) : (
                    <>
                        {isActive ?
                            (<button
                                type="button"
                                onClick={resetCountDown}
                                className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
                            >
                                Abandonar Ciclo <img style={{ marginLeft: '0.4rem' }} src="icons/close_black.svg" alt="icon iniciar ciclo" />
                            </button>
                            ) : (<button
                                type="button"
                                onClick={startCountDown}
                                className={styles.countDownButton}
                            >
                                Inicar Ciclo <img style={{ marginLeft: '0.4rem' }} src="icons/play_arrow.svg" alt="icon iniciar ciclo" />
                            </button>)}
                    </>)}



        </div>
    )
}