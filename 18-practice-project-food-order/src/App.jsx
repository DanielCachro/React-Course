import CartContextProvider from './store/cart-context'
import Meals from './components/Meals'
import Layout from './components/Layout'

function App() {
	return (
		<CartContextProvider>
			<Layout />
			<Meals />
		</CartContextProvider>
	)
}

export default App
