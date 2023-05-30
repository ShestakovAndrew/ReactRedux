import React from 'react'
import {useSelector} from "react-redux"

export const IceCreamView = () => {
	const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams)
	return (
		<div>
			<h2>Number of ice creams - {numOfIceCreams}</h2>
			<button>Order ice cream</button>
			<button>Restock ice cream</button>
		</div>
	)
}