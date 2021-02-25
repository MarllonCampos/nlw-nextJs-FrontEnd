import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {


    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/marlloncampos.png" alt="Marllon campos" />
            <div>
                <strong>Marllon Campos</strong>
                <p>
                    <img src="icons/level.svg" alt="icon-level-up"/>    
                    Level 1</p>
            </div>
        </div>
    );
}