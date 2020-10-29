import React, { useState, useEffect } from "react";
import './Timer.css';

export default function Timer(props) {
	const [now, setNow] = useState(Date.now());

	useEffect(() => {
		if (props.start) {
			setInterval(() => {
				setNow(Date.now());
			}, 1000);
		}
		return clearInterval();
	}, [props.start]);

	const fiveMinutes = props.time + 5000 * 60;

	const timeLeft = Math.floor((fiveMinutes - now) / 1000);

	return (
		<div className='timer-display'>
			<h3>{timeLeft > 0 ? `${timeLeft} seconds left` : "Game Over"}</h3>
		</div>
	);
}
