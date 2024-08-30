import Modal from './Modal'
import CartItem from './CartItem'
import {useContext} from 'react'
import {CartContext} from '../store/cart-context'

export default function Cart({open, onClose}) {
	const {items, removeItemFromCart} = useContext(CartContext)
	const price = items.map(item => +item.price).reduce((acc, currentValue) => acc + currentValue)
	console.log(items)

	return (
		<Modal open={open} showCloseBtn={true} onClose={onClose}>
			<div className='cart'>
				<h2>Your Cart</h2>
				<ul>
					{items.map(item => (
						<CartItem
							key={item.id}
							name={item.name}
							price={item.price}
							qty={item.qty}
							onRemoveItem={() => {
								removeItemFromCart(item.id)
							}}
						/>
					))}
				</ul>
				<p className='cart-total'>{`$${price}`}</p>
			</div>
		</Modal>
	)
}
