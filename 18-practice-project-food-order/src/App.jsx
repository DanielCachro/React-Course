import Header from './components/Header'
import Meals from './components/Meals'
import Cart from './components/Cart'
import CartContextProvider from './store/cart-context'
import {useState} from 'react'
import Checkout from './components/Checkout'

function App() {
	const [cartOpen, setCartOpen] = useState(false)

	return (
		<CartContextProvider>
			<Header
				onOpenCart={() => {
					setCartOpen(true)
				}}
			/>
			<Cart
				open={cartOpen}
				onClose={() => {
					setCartOpen(false)
				}}
			/>
			<Checkout open={true} />
			<Meals />
		</CartContextProvider>
	)
}

export default App
