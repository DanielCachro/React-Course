import logo from '../assets/logo.jpg'
import {useContext} from 'react'
import {CartContext} from '../store/cart-context'

export default function Header({onOpenCart}) {
	const {items} = useContext(CartContext)
	const itemsQty = items.map(item => item.qty).reduce((acc, currentValue) => acc + currentValue)

	return (
		<div id='main-header'>
			<div id='title'>
				<img src={logo} alt='app logo' />
				<h1>ReactFood</h1>
			</div>
			<button className='text-button' onClick={onOpenCart}>
				{`Cart (${itemsQty})`}
			</button>
		</div>
	)
}
