import {useEffect, useRef} from 'react'
import {createPortal} from 'react-dom'

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
					<button type='button' className='text-button' onClick={handleClose}>
						Close
					</button>
				)}
				<button type='button' className='button' onClick={onSubmit} disabled={submitBtnDisabled}>
					{submitBtnText ? submitBtnText : 'Submit'}
				</button>
			</p>
		</dialog>,
		document.getElementById('modal')
	)
}
