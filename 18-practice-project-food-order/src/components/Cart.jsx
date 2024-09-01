import Modal from './Modal'
import CartItem from './CartItem'
import {useContext} from 'react'
import {CartContext} from '../store/cart-context'

export default function Cart({open, onClose}) {
	const {items, setItemQty, calculatePrice} = useContext(CartContext)
	const price = calculatePrice()

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
		<>
			{open && (
				<Modal open={open} showCloseBtn={true} onClose={onClose} title='Your Cart' submitBtnText='Go to Checkout'>
					<div className='cart'>
						<CartContent />
					</div>
				</Modal>
			)}
		</>
	)
}
