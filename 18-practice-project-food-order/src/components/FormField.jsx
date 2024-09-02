import {useField} from 'formik'

export default function FormField({label, id, ...props}) {
	const [field, meta] = useField(props)

	return (
		<div className='control'>
			<label htmlFor={id}>{label}</label>
			<input id={id} {...field} {...props} />
			{meta.touched && meta.error ? <p>{meta.error}</p> : null}
		</div>
	)
}
