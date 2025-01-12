import {createContext, useState} from 'react'

export const ChallengesContext = createContext({
	challenges: [],
	addChallenge: () => {},
	updateChallengeStatus: () => {},
})

export default function ChallengesContextProvider({children}) {
	const [challenges, setChallenges] = useState([
		{
			title: 'Going Out',
			description: 'Super Hard to Do! :(',
			deadline: '2025-01-24',
			image: {
				src: '/src/assets/family-time.png',
				alt: 'Family spending time together.',
			},
			id: '0.5787051026588372',
			status: 'completed',
		},
		{
			title: 'Test',
			description: 'Test Description',
			deadline: '2025-01-15',
			image: {
				src: '/src/assets/cooking.png',
				alt: 'Person cooking a meal.',
			},
			id: '0.42385970047610333',
			status: 'completed',
		},
		{
			title: 'Challenge 1 ',
			description: 'Challenge 1 description',
			deadline: '2025-01-16',
			image: {
				src: '/src/assets/working-out.png',
				alt: 'Person working out.',
			},
			id: '0.45000832147527303',
			status: 'completed',
		},
	])

	function addChallenge(challenge) {
		setChallenges(prevChallenges => [{...challenge, id: Math.random().toString(), status: 'active'}, ...prevChallenges])
	}

	function deleteChallenge(challengeId) {
		setChallenges(prevChallenges => prevChallenges.filter(challenge => challenge.id !== challengeId))
	}

	function updateChallengeStatus(challengeId, newStatus) {
		setChallenges(prevChallenges =>
			prevChallenges.map(challenge => {
				if (challenge.id === challengeId) {
					return {...challenge, status: newStatus}
				}
				return challenge
			})
		)
	}

	const challengesContext = {
		challenges,
		addChallenge,
		deleteChallenge,
		updateChallengeStatus,
	}

	return <ChallengesContext.Provider value={challengesContext}>{children}</ChallengesContext.Provider>
}
