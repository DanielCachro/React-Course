import {useEffect, useRef} from 'react'

export default function Modal({open, children, onClose, onSubmit, showCloseBtn}) {
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

	return (
		<dialog className='modal' ref={dialog} onClose={onClose}>
			{children}

			<p className='modal-actions'>
				{showCloseBtn && (
					<button className='text-button' onClick={handleClose}>
						Close
					</button>
				)}
				<button className='button' onClick={onSubmit}>
					Submit
				</button>
			</p>
		</dialog>
	)
}
