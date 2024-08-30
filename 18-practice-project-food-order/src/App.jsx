import Header from './components/Header'
import Meals from './components/Meals'
import Cart from './components/Cart'
import CartContextProvider from './store/cart-context'
import {useState} from 'react'

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
			<Meals />
		</CartContextProvider>
	)
}

export default App
