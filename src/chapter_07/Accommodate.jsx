import React, { useState, useEffect } from "react";
import UseCount from "./useCount";

const MAX_CAPACITY = 10;

function Accommodate(props) {
	const [count, increaseCount, decreaseCount] = UseCount(0);
	const [isFull, setIsFull] = useState(false);

	useEffect(() => {
		console.log("Count has changed");
		console.log("is Full: ", isFull);
	});

	useEffect(() => {
		setIsFull(count >= MAX_CAPACITY);
		console.log("is Full: ", isFull);
	}, [count]);

	return (
		<div>
			<h1>Accommodate</h1>
			<p>Count: {count}</p>
			<p>Is Full: {isFull ? "Yes" : "No"}</p>
			<button onClick={increaseCount} disabled={isFull}>
				Increase
			</button>
			<button onClick={decreaseCount}>Decrease</button>
		</div>
	);
}

export default Accommodate;
