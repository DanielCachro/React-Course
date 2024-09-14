import Modal from './UI/Modal'
import {useContext, useEffect, useRef} from 'react'
import {useHttp} from './hooks/useHttp'
import {CartContext} from '../store/cart-context'

import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import FormField from './FormField'

export default function Checkout({open, onClose, onSubmit}) {
	const {items, clearCart, calculateCartPrice} = useContext(CartContext)
	const {data, error, isFetching, sendRequest} = useHttp()
	const price = calculateCartPrice()
	const formRef = useRef()

	const SignupSchema = Yup.object().shape({
		name: Yup.string().trim().min(2, 'Too Short!').max(50, 'Too Long!').required('Field is required!'),
		email: Yup.string().trim().email('Invalid Email!').required('Field is required!'),
		street: Yup.string().trim().min(2, 'Too Short!').max(50, 'Too Long!').required('Field is required!'),
		['postal-code']: Yup.string()
			.trim()
			.matches(/^[a-z0-9][a-z0-9\- ]{0,10}[a-z0-9]$/i, 'Invalid Postal Code!')
			.required('Field is required!'),
		city: Yup.string().trim().min(2, 'Too Short!').max(50, 'Too Long!').required('Field is required!'),
	})

	function handleSubmit(cart, form) {
		sendRequest('http://localhost:3000/orders', {
			method: 'POST',
			body: JSON.stringify({order: {items: cart, customer: form}}),
			headers: {
				'Content-Type': 'application/json',
			},
		})
	}

	useEffect(() => {
		if (data && !error) {
			clearCart()
			onSubmit()
		}
	}, [data, error])

	function ModalContent() {
		if (error) {
			return (
				<Modal open={open} title='Failed to submit order' onClose={onClose} onSubmit={onClose} submitBtnText='Okay'>
					<p>{error}</p>
				</Modal>
			)
		}

		if (isFetching) {
			return (
				<Modal open={open} title='Submitting Order' onClose={onClose} onSubmit={onClose} submitBtnText='Okay'>
					<p>Submitting order...</p>
				</Modal>
			)
		}

		return (
			<Modal
				open={open}
				title='Checkout'
				showCloseBtn={true}
				onClose={onClose}
				onSubmit={() => {
					if (formRef.current) {
						formRef.current.handleSubmit()
					}
				}}
				submitBtnText='Submit Order'>
				<p>{`Total Ammount: $${price}`}</p>
				<Formik
					innerRef={formRef}
					initialValues={{
						name: '',
						email: '',
						street: '',
						['postal-code']: '',
						city: '',
					}}
					validationSchema={SignupSchema}
					onSubmit={values => {
						handleSubmit(items, values)
					}}>
					<Form>
						<FormField name='name' id='name' label='Full Name' type='text' required />
						<FormField name='email' id='email' label='E-mail' type='email' required />
						<FormField name='street' id='street' label='Street' type='text' required />
						<div className='control-row'>
							<FormField name='postal-code' id='postal-code' label='Postal Code' type='text' required />
							<FormField name='city' id='city' label='City' type='text' required />
						</div>
					</Form>
				</Formik>
			</Modal>
		)
	}

	return <ModalContent />
}
