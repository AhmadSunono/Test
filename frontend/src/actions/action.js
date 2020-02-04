// Action Creator



export const increment = () => {
	return{
		type: 'INC'
	}
}

export const decrement = () => {
	return{
		type: 'DEC'
	}
}

export const INC = increment()
export const DEC = decrement()