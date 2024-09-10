import {useContext} from 'react'
import {CartContext} from '../store/cart-context'
import Button from './UI/Button'

export default function MealCard({meal}) {
	const {image, name, price, description, id} = meal
	const {addItem} = useContext(CartContext)

	return (
		<li className='meal-item'>
			<article>
				<img src={`http://localhost:3000/${image}`} alt={name} />
				<div>
					<h3>{name}</h3>
					<p className='meal-item-price'>{`$${price}`}</p>
					<p className='meal-item-description'>{description}</p>
				</div>
				<p className='meal-item-actions'>
					<Button
						onClick={() => {
							addItem({id, name, price})
						}}>
						Add to Cart
					</Button>
				</p>
			</article>
		</li>
	)
}
