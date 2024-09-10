import Modal from './UI/Modal'
import CartItem from './CartItem'
import {useContext} from 'react'
import {CartContext} from '../store/cart-context'

export default function Cart({open, onClose, onSubmit}) {
	const {items, setItemQty, calculateCartPrice} = useContext(CartContext)
	const isSubmitBtnDisabled = !items.length
	const price = calculateCartPrice()

	function CartContent() {
		if (items.length !== 0) {
			return (
				<>
					<ul>
						{items.map(item => (
							<CartItem
								key={item.id}
								name={item.name}
								price={item.price}
								qty={item.qty}
								onSetQty={qty => {
									setItemQty(item.id, qty)
								}}
							/>
						))}
					</ul>
					<p className='cart-total'>{`$${price}`}</p>
				</>
			)
		} else {
			return <p>Your cart is empty.</p>
		}
	}

	return (
		<Modal
			open={open}
			title='Your Cart'
			showCloseBtn={true}
			onClose={onClose}
			onSubmit={() => {
				items.length !== 0 ? onSubmit() : null
			}}
			submitBtnText='Go to Checkout'
			submitBtnDisabled={isSubmitBtnDisabled}>
			<div className='cart'>
				<CartContent />
			</div>
		</Modal>
	)
}
