import logo from '../assets/logo.jpg'

export default function Header() {
	return (
		<div id='main-header'>
			<div id='title'>
				<img src={logo} alt='app logo' />
				<h1>ReactFood</h1>
			</div>
			<button className='text-button'>Cart</button>
		</div>
	)
}
