import Header from './components/Header'
import Meals from './components/Meals'
import Cart from './components/Cart'
import CartContextProvider from './store/cart-context'
import {useState} from 'react'
import Checkout from './components/Checkout'
import Modal from './components/Modal'

function App() {
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
		<CartContextProvider>
			<Header
				onOpenCart={() => {
					handleChangeModalState('cart', true)
				}}
			/>
			<Cart
				open={modalOpenStates.cart}
				onClose={() => {
					handleChangeModalState('cart', false)
				}}
				onSubmit={() => {
					handleChangeModalState('checkout', true)
				}}
			/>
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

			<Meals />
		</CartContextProvider>
	)
}

export default App
