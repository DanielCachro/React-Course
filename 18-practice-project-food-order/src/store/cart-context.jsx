import {createContext, useState} from 'react'

export const CartContext = createContext({
	items: [],
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	setItemQty: () => {},
	calculatePrice: () => {},
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
		setItems(prevItems => prevItems.filter(prevItem => prevItem.id !== id))
	}

	function handleSetItemQty(id, qty) {
		qty > 0
			? setItems(prevItems => prevItems.map(prevItem => (prevItem.id === id ? {...prevItem, qty: qty} : prevItem)))
			: handleRemoveItemFromCart(id)
	}

	function handleCalculatePrice() {
		const price =
			items.length !== 0
				? items.map(item => +item.price * +item.qty).reduce((acc, currentValue) => acc + currentValue)
				: 0

		return price.toFixed(2)
	}

	const ctxValue = {
		items: items,
		addItemToCart: handleAddItemToCart,
		removeItemFromCart: handleRemoveItemFromCart,
		setItemQty: handleSetItemQty,
		calculatePrice: handleCalculatePrice,
	}

	return <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
}
