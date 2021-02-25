import { createContext, useState, ReactNode } from 'react';
import challenges from '../../challenges.json';

interface Challenge {
    type:'body'| 'eye';
    description: string;
    amount: number;
}

interface ChallengesContextData {
    level: number;
    levelUp: () => void;
    currentExperience: number;
    challengesCompleteted: number;
    startNewChallenge: () => void;
    activeChallenge: Challenge;
    resetChallenge: () => void;
    experienceToNextLevel: number;
    challengeUp: () => void;
    
}

interface ChallengesProviderProps {
    children: ReactNode;
}


export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children, ...props }: ChallengesProviderProps) {
    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleteted, setChallengesCompleteted] = useState(0);

    const [activeChallenge,setActiveChallenge] = useState(null)
    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)
    function levelUp() {
        setLevel(level + 1)
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]

        setActiveChallenge(challenge)
    }

    function resetChallenge(){
        setActiveChallenge(null)
    }
    function challengeUp(){
        setChallengesCompleteted(challengesCompleteted + 1)
        resetChallenge();
    }

    return (
        <ChallengesContext.Provider
            value={{
                level,
                levelUp,
                currentExperience,
                challengesCompleteted,
                startNewChallenge,
                activeChallenge,
                resetChallenge,
                experienceToNextLevel,
                challengeUp
                
            }}>
            {children}
        </ChallengesContext.Provider>
    )
}



