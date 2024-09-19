import Card from '../UI/Card'
import classes from './Cart.module.css'
import CartItem from './CartItem'
import {useSelector} from 'react-redux'

const Cart = props => {
	const cartItems = useSelector(state => state.cart.items)
	return (
		<Card className={classes.cart}>
			<h2>Your Shopping Cart</h2>
			<ul>
				{cartItems.map(item => (
					<CartItem
						key={Math.random()}
						item={{id: item.id, title: item.title, price: item.price, quantity: item.qty, total: item.price * item.qty}}
					/>
				))}
			</ul>
		</Card>
	)
}

export default Cart
