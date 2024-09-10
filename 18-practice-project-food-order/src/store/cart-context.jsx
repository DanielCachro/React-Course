import {createContext, useState} from 'react'

export const CartContext = createContext({
	items: [],
	addItem: item => {},
	removeItem: id => {},
	setItemQty: (id, qty) => {},
	calculateCartPrice: () => {},
})

export default function CartContextProvider({children}) {
	const [items, setItems] = useState([])

	function addItem(item) {
		const existingItem = items.find(prevItem => prevItem.id === item.id)

		if (!existingItem) {
			setItems(prevItems => [...prevItems, {...item, qty: 1}])
		} else {
			setItemQty(existingItem.id, existingItem.qty + 1)
		}
	}

	function removeItem(id) {
		setItems(prevItems => prevItems.filter(prevItem => prevItem.id !== id))
	}

	function setItemQty(id, qty) {
		if (qty > 0) {
			setItems(prevItems => prevItems.map(prevItem => (prevItem.id === id ? {...prevItem, qty: qty} : prevItem)))
		} else {
			removeItem(id)
		}
	}

	function calculateCartPrice() {
		let price =
			items.length !== 0
				? items.map(item => +item.price * +item.qty).reduce((acc, currentValue) => acc + currentValue)
				: 0
		price = price.toFixed(2)

		return price
	}

	const cartContext = {
		items,
		addItem,
		removeItem,
		setItemQty,
		calculateCartPrice,
	}

	return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
}
