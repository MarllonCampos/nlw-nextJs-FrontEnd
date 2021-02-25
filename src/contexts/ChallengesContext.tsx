import { createContext, useState, ReactNode } from 'react';


interface ChallengesContextData {
    level: number;
    levelUp: () => void;
    currentExperience: number;
    challengesCompleteted: number;
    startNewChallenge: () => void;
    
}

interface ChallengesProviderProps {
    children: ReactNode;
}


export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children, ...props }: ChallengesProviderProps) {
    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleteted, setChallengesCompleteted] = useState(0);

    function levelUp() {
        setLevel(level + 1)
    }

    function startNewChallenge() {
        console.log('New Challenge')
    }

    return (
        <ChallengesContext.Provider
            value={{
                level,
                levelUp,
                currentExperience,
                challengesCompleteted,
                startNewChallenge
            }}>
            {children}
        </ChallengesContext.Provider>
    )
}



