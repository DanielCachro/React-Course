export default function UserInput({onChange, userInputs}) {
	return (
		<section id='user-input'>
			<div className='input-group'>
				<p>
					<label>Initial Investment</label>
					<input
						type='number'
						value={userInputs.initialInvestment}
						onChange={e => {
							onChange('initialInvestment', e.target.value)
						}}
					/>
				</p>
				<p>
					<label>Annual Investment</label>
					<input
						type='number'
						value={userInputs.annualInvestment}
						onChange={e => {
							onChange('annualInvestment', e.target.value)
						}}
					/>
				</p>
			</div>
			<div className='input-group'>
				<p>
					<label>Expected Return</label>
					<input
						type='number'
						value={userInputs.expectedReturn}
						onChange={e => {
							onChange('expectedReturn', e.target.value)
						}}
					/>
				</p>
				<p>
					<label>Duration</label>
					<input
						type='number'
						value={userInputs.duration}
						onChange={e => {
							onChange('duration', e.target.value)
						}}
					/>
				</p>
			</div>
		</section>
	)
}
