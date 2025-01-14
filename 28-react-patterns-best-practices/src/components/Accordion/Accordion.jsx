import {createContext, useContext, useState} from 'react'

function useComponentContext(context, errorMessage) {
	const ctx = useContext(context)

	if (!ctx) {
		throw new Error(errorMessage)
	}

	return ctx
}

const AccordionContext = createContext()
export const useAccordionContext = () =>
	useComponentContext(AccordionContext, 'Accordion-related components must be wrapped by <Accordion>.')

const AccordionItemContext = createContext()
export const useAccordionItemContext = () =>
	useComponentContext(AccordionItemContext, 'AccordionItem-related components must be wrapped by <Accordion.Item>.')

function AccordionItem({id, className, children}) {
	return (
		<AccordionItemContext.Provider value={id}>
			<li className={className}>{children}</li>
		</AccordionItemContext.Provider>
	)
}

function AccordionTitle({className, children}) {
	const id = useAccordionItemContext()
	const {toggleItem} = useAccordionContext()

	return (
		<h3 className={className} onClick={() => toggleItem(id)}>
			{children}
		</h3>
	)
}

function AccordionContent({className, children}) {
	const {openItemId} = useAccordionContext()
	const id = useAccordionItemContext()

	const isOpen = openItemId === id

	return <div className={isOpen ? `${className ?? ''} open` : `${className ?? ''} close`}>{children}</div>
}

export default function Accordion({children, className}) {
	const [openItemId, setOpenItemId] = useState(null)

	function toggleItem(id) {
		setOpenItemId(prevId => (prevId === id ? null : id))
	}

	const contextValue = {
		openItemId: openItemId,
		toggleItem,
	}

	return (
		<AccordionContext.Provider value={contextValue}>
			<ul className={className}>{children}</ul>
		</AccordionContext.Provider>
	)
}

Accordion.Item = AccordionItem
Accordion.Title = AccordionTitle
Accordion.Content = AccordionContent
