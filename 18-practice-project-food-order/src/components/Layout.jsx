import {useState} from 'react'
import Header from './Header'
import Cart from './Cart'
import Checkout from './Checkout'
import Modal from './UI/Modal'

export default function Layout() {
	const [userProgress, setUserProgress] = useState('')
	const resetUserProgress = () => setUserProgress('')

	function OpenedModal() {
		switch (userProgress) {
			case 'cart':
				return (
					<Cart
						open={true}
						onClose={resetUserProgress}
						onSubmit={() => {
							setUserProgress('checkout')
						}}
					/>
				)
			case 'checkout':
				return (
					<Checkout
						open={true}
						onClose={resetUserProgress}
						onSubmit={() => {
							setUserProgress('success')
						}}
					/>
				)
			case 'success':
				return (
					<Modal
						open={true}
						title='Success!'
						onClose={resetUserProgress}
						onSubmit={resetUserProgress}
						submitBtnText='Okay'>
						<p>Your order was submitted successfully.</p>
						<p>We will get back to you with more details via email within the next few minutes.</p>
					</Modal>
				)
			default:
				return null
		}
	}

	return (
		<>
			<Header
				onOpenCart={() => {
					setUserProgress('cart')
				}}
			/>
			<OpenedModal />
		</>
	)
}
