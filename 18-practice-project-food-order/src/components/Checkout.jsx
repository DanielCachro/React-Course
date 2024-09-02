import Modal from './Modal'
import {useContext, useRef, useState} from 'react'
import {CartContext} from '../store/cart-context'

import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import FormField from './FormField'
import {postOrder} from '../http'

export default function Checkout({open, onClose, onSubmit}) {
	const {items, calculatePrice} = useContext(CartContext)
	const [isFetching, setIsFetching] = useState(false)
	const [error, setError] = useState()
	const price = calculatePrice()
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

	const handleSubmit = () => {
		if (formRef.current) {
			formRef.current.handleSubmit()
		}
	}

	async function handlePostOrder(cart, form) {
		setIsFetching(true)
		try {
			await postOrder(cart, form)
			onSubmit()
			setIsFetching(false)
		} catch (error) {
			setError(error)
		}
		setIsFetching(false)
	}

	function ModalContent() {
		if (error) {
			return (
				<Modal open={open} title='Failed to submit order' onClose={onClose} onSubmit={onClose} submitBtnText='Okay'>
					<p>{error.message}</p>
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
				onSubmit={handleSubmit}
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
						handlePostOrder(items, values)
					}}>
					<Form>
						<FormField name='name' id='name' label='Full Name' type='text' />
						<FormField name='email' id='email' label='E-mail' type='email' />
						<FormField name='street' id='street' label='Street' type='text' />
						<div className='control-row'>
							<FormField name='postal-code' id='postal-code' label='Postal Code' type='text' />
							<FormField name='city' id='city' label='City' type='text' />
						</div>
					</Form>
				</Formik>
			</Modal>
		)
	}

	return <>{open && <ModalContent />}</>
}
