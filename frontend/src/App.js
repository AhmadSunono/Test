import React, {useRef, useEffect, useState} from 'react';
import './App.css';
import axios from 'axios'
import {connect} from 'react-redux'
import {INC, DEC} from "./actions/action";

function App(props) {

	const mounted = useRef()
	useEffect(() => {
		if (!mounted.current) {
			axios.put('http://127.0.0.1:8000/api/leads/4/', {
				"name": "Mohammad",
				"email": "Mohammad2@gmail.com",
				"message": "Hello"
			})
				.then(res => {
					console.log(res.data)
				})
				.catch(err => console.log(err))
		}
	})

	console.log(props)

	return (
		<div className="App">
			<button onClick={props.inc}>+</button>
			<div>{props.count}</div>
			<button onClick={props.dec}>-</button>
		</div>
	);
}

function mapStateToProps(state) {
	return{
		count: state.count
	}
}

function mapDispatchToProps(dispatch) {
	return{
		inc: ()=>dispatch(INC),
		dec: ()=>dispatch(DEC),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
