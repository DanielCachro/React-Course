import logo from '../assets/logo.jpg'

export default function Header({onOpenCart}) {
	return (
		<div id='main-header'>
			<div id='title'>
				<img src={logo} alt='app logo' />
				<h1>ReactFood</h1>
			</div>
			<button className='text-button' onClick={onOpenCart}>
				Cart
			</button>
		</div>
	)
}
