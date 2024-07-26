export default function Log({turns}) {
	return (
		<ol id='log'>
			{turns.map(({player, square: {row, col}}) => {
				return <li key={`${row}${col}`}>{`${player} was placed at ${row} ${col}`}</li>
			})}
		</ol>
	)
}
