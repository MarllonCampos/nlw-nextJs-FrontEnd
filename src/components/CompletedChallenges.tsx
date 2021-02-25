import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/CompletedChallenges.module.css'

export function CompletedChallenges() {
    const {challengesCompleteted} = useContext(ChallengesContext)
    return (
        <div className={styles.completedChallengesContainer}>
            <span>Desafios Completos</span>
            <span>{challengesCompleteted}</span>
        </div>
    )
}