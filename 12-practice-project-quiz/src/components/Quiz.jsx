import {useState, useCallback} from 'react'

import QUESTIONS from '../questions'
import quizCompleteImg from '../assets/quiz-complete.png'
import QuesionTimer from './QuestionTimer'

export default function Quiz() {
	const [userAnswers, setUserAnswers] = useState([])

	const activeQuestionIndex = userAnswers.length
	const quizIsComplete = activeQuestionIndex === QUESTIONS.length

	const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
		setUserAnswers(prevUserAnswers => [...prevUserAnswers, selectedAnswer])
	}, [])

	const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])

	if (quizIsComplete) {
		return (
			<div id='summary'>
				<img src={quizCompleteImg} alt='trophy icon' />
				<h2>Quiz Completed!</h2>
			</div>
		)
	}

	const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers]
	shuffledAnswers.sort((a, b) => Math.random() - 0.5)

	return (
		<div id='quiz'>
			<div id='question'>
				<QuesionTimer key={activeQuestionIndex} timeout={10000} onTimeout={handleSkipAnswer}></QuesionTimer>
				<h2>{QUESTIONS[activeQuestionIndex].text}</h2>
				<ul id='answers'>
					{shuffledAnswers.map(answer => (
						<li key={answer} className='answer'>
							<button
								onClick={() => {
									handleSelectAnswer(answer)
								}}>
								{answer}
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
