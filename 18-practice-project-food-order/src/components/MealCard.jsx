export default function MealCard({meal}) {
	const {image, price, description} = meal
	return (
		<li className='meal-item'>
			<article>
				<img src={`http://localhost:3000/${image}`} alt='meal image' />
				<div>
					<h3>{meal.name}</h3>
					<p className='meal-item-price'>{price}</p>
					<p className='meal-item-description'>{description}</p>
				</div>
				<p className='meal-item-actions'>
					<button className='button'>Add to Cart</button>
				</p>
			</article>
		</li>
	)
}
