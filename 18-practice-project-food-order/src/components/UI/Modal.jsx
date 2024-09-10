import {useEffect, useRef} from 'react'
import {createPortal} from 'react-dom'
import Button from './Button'

export default function Modal({
	open,
	title,
	showCloseBtn,
	onClose,
	onSubmit,
	submitBtnDisabled,
	submitBtnText,
	children,
}) {
	const dialog = useRef()

	useEffect(() => {
		if (open) {
			dialog.current.showModal()
		} else {
			dialog.current.close()
		}
	}, [open])

	function handleClose() {
		dialog.current.close()
	}

	return createPortal(
		<dialog className='modal' ref={dialog} onClose={onClose}>
			<h2>{title}</h2>
			{children}

			<p className='modal-actions'>
				{showCloseBtn && (
					<Button type='button' onClick={handleClose} textOnly>
						Close
					</Button>
				)}
				<Button type='button' onClick={onSubmit} disabled={submitBtnDisabled}>
					{submitBtnText ? submitBtnText : 'Submit'}
				</Button>
			</p>
		</dialog>,
		document.getElementById('modal')
	)
}
