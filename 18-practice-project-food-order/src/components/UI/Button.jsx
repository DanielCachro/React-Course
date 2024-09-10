export default function Button({children, textOnly, className, ...props}) {
	let cssClasses = textOnly ? 'text-button' : 'button'
	className ? (cssClasses += ' ' + className) : undefined

	return (
		<button className={cssClasses} {...props}>
			{children}
		</button>
	)
}
