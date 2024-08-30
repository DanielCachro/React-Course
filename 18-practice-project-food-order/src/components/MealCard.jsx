import {useContext} from 'react'
import {CartContext} from '../store/cart-context'

export default function MealCard({meal}) {
	const {image, name, price, description, id} = meal
	const {addItemToCart} = useContext(CartContext)

	return (
		<li className='meal-item'>
			<article>
				<img src={`http://localhost:3000/${image}`} alt='meal image' />
				<div>
					<h3>{name}</h3>
					<p className='meal-item-price'>{price}</p>
					<p className='meal-item-description'>{description}</p>
				</div>
				<p className='meal-item-actions'>
					<button
						className='button'
						onClick={() => {
							addItemToCart({id, name, price})
						}}>
						Add to Cart
					</button>
				</p>
			</article>
		</li>
	)
}
