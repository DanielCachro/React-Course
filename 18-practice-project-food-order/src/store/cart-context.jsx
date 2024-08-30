import {createContext, useState} from 'react'

export const CartContext = createContext({
	items: [],
	addItemToCart: () => {},
	removeItemFromCart: () => {},
})

export default function CartContextProvider({children}) {
	const [items, setItems] = useState([
		{id: 'm1', name: 'Mac & Cheese', price: '8.99', qty: 1},
		{id: 'm3', name: 'Caesar Salad', price: '7.99', qty: 1},
	])

	function handleAddItemToCart(item) {
		setItems(prevItems => {
			const itemExists = prevItems.some(prevItem => prevItem.id === item.id)

			if (!itemExists) {
				return [...prevItems, {...item, qty: 1}]
			} else {
				return prevItems.map(prevItem => (prevItem.id === item.id ? {...prevItem, qty: prevItem.qty + 1} : prevItem))
			}
		})
	}

	function handleRemoveItemFromCart(id) {
		setItems(items => items.filter(item => item.id !== id))
	}

	const ctxValue = {
		items: items,
		addItemToCart: handleAddItemToCart,
		removeItemFromCart: handleRemoveItemFromCart,
	}

	return <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
}
