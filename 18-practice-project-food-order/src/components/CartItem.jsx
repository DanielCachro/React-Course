export default function CartItem({name, price, qty, onSetQty}) {
	return (
		<li className='cart-item'>
			<p>{`${name} - ${qty}x $${price}`}</p>
			<div className='cart-item-actions'>
				<button
					onClick={() => {
						onSetQty(qty - 1)
					}}>
					-
				</button>
				<p>{qty}</p>
				<button
					onClick={() => {
						onSetQty(qty + 1)
					}}>
					+
				</button>
			</div>
		</li>
	)
}
