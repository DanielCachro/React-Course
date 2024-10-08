import {useSelector, useDispatch} from 'react-redux'

import {counterActions} from '../store/counter'
import classes from './Counter.module.css'

const Counter = () => {
	const dispatch = useDispatch()
	const counter = useSelector(state => state.counter.counter)
	const showCounter = useSelector(state => state.counter.showCounter)

	const incrementHandler = () => {
		dispatch(counterActions.increment()) // {type: SOME_UNIQUE_IDENTIFIER}
	}

	const increaseHandler = amount => {
		dispatch(counterActions.increase(amount)) // {type: SOME_UNIQUE_IDENTIFIER, payload: amount}
	}

	const decrementHandler = () => {
		dispatch(counterActions.decrement()) // {type: SOME_UNIQUE_IDENTIFIER}
	}

	const toggleCounterHandler = () => {
		dispatch(counterActions.toggleCounter()) // {type: SOME_UNIQUE_IDENTIFIER}
	}

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{showCounter && <div className={classes.value}>{counter}</div>}
			<div>
				<button onClick={decrementHandler}>Decrement</button>
				<button
					onClick={() => {
						increaseHandler(5)
					}}>
					Increase by 5
				</button>
				<button onClick={incrementHandler}>Increment</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	)
}

export default Counter

// class Counter extends Component {
// 	incrementHandler() {
// 		this.props.increment()
// 	}

// 	decrementHandler() {
// 		this.props.decrement()
// 	}

// 	toggleCounterHandler() {}

// 	render() {
// 		return (
// 			<main className={classes.counter}>
// 				<h1>Redux Counter</h1>
// 				<div className={classes.value}>{this.props.counter}</div>
// 				<div>
// 					<button onClick={this.decrementHandler.bind(this)}>Decrement</button>
// 					<button onClick={this.incrementHandler.bind(this)}>Increment</button>
// 				</div>
// 				<button onClick={this.toggleCounterHandler}>Toggle Counter</button>
// 			</main>
// 		)
// 	}
// }

// const mapStateToProps = state => {
// 	return {
// 		counter: state.counter,
// 	}
// }

// const mapDispatchToProps = dispatch => {
// 	return {
// 		increment: () => dispatch({type: 'INCREMENT'}),
// 		decrement: () => dispatch({type: 'DECREMENT'}),
// 	}
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter)
