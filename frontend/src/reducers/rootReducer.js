const initState = {
	count: 0
}

const reducer = (state=initState, action) => {
	if(action.type=='INC')
		return {count: state.count+1}
	 else if(action.type=='DEC')
		return {count: state.count-1}

	return state;
}

export default reducer