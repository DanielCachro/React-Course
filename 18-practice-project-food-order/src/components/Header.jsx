import logo from '../assets/logo.jpg'
import {useContext} from 'react'
import {CartContext} from '../store/cart-context'
import Button from './UI/Button'

export default function Header({onOpenCart}) {
	const {items} = useContext(CartContext)
	const itemsQty =
		items.length !== 0 ? items.map(item => item.qty).reduce((acc, currentValue) => acc + currentValue) : 0

	return (
		<header id='main-header'>
			<div id='title'>
				<img src={logo} alt='app logo' />
				<h1>Foody</h1>
			</div>
			<nav>
				<Button onClick={onOpenCart} textOnly>
					{`Cart (${itemsQty})`}
				</Button>
			</nav>
		</header>
	)
}
