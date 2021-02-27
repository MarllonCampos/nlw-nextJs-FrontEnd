import { useContext, useEffect } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const {level} = useContext(ChallengesContext)
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/marlloncampos.png" alt="Marllon campos" />
            <div>
                <strong>Marllon Campos</strong>
                <p>
                    <img src="icons/level.svg" alt="icon-level-up"/>    
                    Level {level}</p>
            </div>
        </div>
    );
}