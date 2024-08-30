export default function CartItem({name, price, qty, onRemoveItem}) {
	function incrementItemQty() {
		// setItemQty(itemQty => itemQty + 1)
	}

	function decrementItemQty() {
		if (qty > 1) {
			// setItemQty(itemQty => itemQty - 1)
		} else {
			onRemoveItem()
		}
	}

	return (
		<li className='cart-item'>
			<p>{`${name} - ${qty}x $${price}`}</p>
			<div className='cart-item-actions'>
				<button onClick={decrementItemQty}>-</button>
				<p>{qty}</p>
				<button onClick={incrementItemQty}>+</button>
			</div>
		</li>
	)
}
