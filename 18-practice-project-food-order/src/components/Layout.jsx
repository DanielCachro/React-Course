import {useState} from 'react'
import Header from './Header'
import Cart from './Cart'
import Checkout from './Checkout'
import Modal from './Modal'

export default function Layout() {
	const [modalOpenStates, setModalOpenStates] = useState({
		cart: false,
		checkout: false,
		success: false,
	})

	function handleChangeModalState(state, isOpen) {
		setModalOpenStates(prevStates => ({
			...Object.fromEntries(Object.keys(prevStates).map(key => [key, false])),
			[state]: isOpen,
		}))
	}

	return (
		<>
			<Header
				onOpenCart={() => {
					handleChangeModalState('cart', true)
				}}
			/>
			{modalOpenStates.cart && (
				<Cart
					open={modalOpenStates.cart}
					onClose={() => {
						handleChangeModalState('cart', false)
					}}
					onSubmit={() => {
						handleChangeModalState('checkout', true)
					}}
				/>
			)}
			{modalOpenStates.checkout && (
				<Checkout
					open={modalOpenStates.checkout}
					onClose={() => {
						handleChangeModalState('checkout', false)
					}}
					onSubmit={() => {
						handleChangeModalState('success', true)
					}}
				/>
			)}
			{modalOpenStates.success && (
				<Modal
					open={modalOpenStates.success}
					title='Success!'
					onClose={() => {
						handleChangeModalState('success', false)
					}}
					onSubmit={() => {
						handleChangeModalState('success', false)
					}}
					submitBtnText='Okay'>
					<p>Your order was submitted successfully.</p>
					<p>We will get back to you with more details via email within the next few minutes.</p>
				</Modal>
			)}
		</>
	)
}
