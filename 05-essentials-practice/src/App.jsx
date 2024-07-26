import {useState} from 'react'
import Header from './components/Header'
import UserInput from './components/UserInput'
import Results from './components/Results'

const INITIAL_INPUTS = {
	initialInvestment: 15000,
	annualInvestment: 900,
	expectedReturn: 5.5,
	duration: 8,
}

function App() {
	const [userInputs, setUserInputs] = useState(INITIAL_INPUTS)
	function handleInputChange(inputIdentifier, inputValue) {
		setUserInputs(prevInputs => {
			const updatedInputs = {...prevInputs, [inputIdentifier]: +inputValue} //+ to convert string into number 

			return updatedInputs
		})
	}

	return (
		<>
			<Header />
			<main>
				<UserInput onChange={handleInputChange} userInputs={userInputs} />
				<Results userInputs={userInputs} />
			</main>
		</>
	)
}

export default App
