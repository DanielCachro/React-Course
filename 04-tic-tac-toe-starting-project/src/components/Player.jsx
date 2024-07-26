import {useState} from 'react'

export default function Player({initialName, symbol, isActive, onChangeName}) {
	const [playerName, setPlayerName] = useState(initialName)
	const [isEditing, setIsEditing] = useState(false)

	function handleEditClick() {
		setIsEditing(editing => !editing)

		if (isEditing) {
			onChangeName(symbol, playerName)
		}
	}

	function handleChange(e) {
		setPlayerName(e.target.value)
	}

	let editablePlayerName = <span className='player-name'>{playerName}</span>

	if (isEditing) {
		editablePlayerName = <input type='text' value={playerName} onChange={handleChange} required />
	}

	return (
		<li className={isActive ? 'active' : undefined}>
			<span className='player'>
				{editablePlayerName}
				<span className='player-symbol'>{symbol}</span>
			</span>
			<button onClick={handleEditClick}>{!isEditing ? 'Edit' : 'Save'}</button>
		</li>
	)
}
