import Modal from './Modal'
import {useContext, useRef} from 'react'
import {CartContext} from '../store/cart-context'

import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'

export default function Checkout(open) {
	const {calculatePrice} = useContext(CartContext)
	const price = calculatePrice()
	const formRef = useRef()

	const SignupSchema = Yup.object().shape({
		firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
		lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
		email: Yup.string().email('Invalid email').required('Required'),
	})

	const handleSubmit = () => {
		if (formRef.current) {
			formRef.current.handleSubmit()
		}
	}

	return (
		<>
			{open && (
				<Modal open={open} title='Checkout' showCloseBtn={true} onSubmit={handleSubmit}>
					<p>{`Total Ammount: $${price}`}</p>
					<Formik
						innerRef={formRef}
						initialValues={{
							firstName: '',
							lastName: '',
							email: '',
						}}
						validationSchema={SignupSchema}
						onSubmit={values => {
							// same shape as initial values
							console.log(values)
						}}>
						{({errors, touched, isValidating}) => (
							<Form>
								<label htmlFor='firstName'>First Name</label>
								<Field name='firstName' id='firstName' />
								{errors.firstName && touched.firstName ? <div>{errors.firstName}</div> : null}
								<label htmlFor='lastName'>Last Name</label>
								<Field name='lastName' id='lastName' />
								{errors.lastName && touched.lastName ? <div>{errors.lastName}</div> : null}
								<label htmlFor='email'>E-Mail</label>
								<Field name='email' type='email' id='email' />
								{errors.email && touched.email ? <div>{errors.email}</div> : null}
							</Form>
						)}
					</Formik>
				</Modal>
			)}
		</>
	)
}
