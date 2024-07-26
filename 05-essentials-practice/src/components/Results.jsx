import {calculateInvestmentResults, formatter} from '../util/investment'

export default function Results({userInputs}) {
	const investmentResults = calculateInvestmentResults({...userInputs})
	let totalInterest = 0

	return (
		<table id='result'>
			{userInputs.duration <= 0 ? (
				<p>Please insert duration longer than 0.</p>
			) : (
				<>
					<thead>
						<tr>
							<th>Year</th>
							<th>Investment Value</th>
							<th>Interest (Year)</th>
							<th>Total Interest</th>
							<th>Invested Capital</th>
						</tr>
					</thead>
					<tbody>
						{investmentResults.map(result => {
							totalInterest += result.interest
							const investedCapital = userInputs.initialInvestment + result.annualInvestment * result.year

							return (
								<tr key={result.year}>
									<td>{result.year}</td>
									<td>{formatter.format(result.valueEndOfYear)}</td>
									<td>{formatter.format(result.interest)}</td>
									<td>{formatter.format(totalInterest)}</td>
									<td>{formatter.format(investedCapital)}</td>
								</tr>
							)
						})}
					</tbody>
				</>
			)}
		</table>
	)
}
