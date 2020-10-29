import React, { useState, useEffect } from "react";
import "./Transition.css";
import tvStatic from "../TvRoom/static.gif";
import staticSound from "../TvRoom/static.mp3";

const staticAudio = new Audio(staticSound);

export default function Transition() {
	const [transStatic, setTransStatic] = useState(false);

	const playStatic = () => {
		staticAudio.volume = 0.3;
		staticAudio.play();
	};

	transStatic ? playStatic() : staticAudio.pause();

	// Randomize static
	useEffect(() => {
		const intervalId = setInterval(() => {
			let delay = Math.floor(Math.random() * 10);
			delay >= 8 ? setTransStatic(true) : setTransStatic(false);
			console.log(delay);
		}, 50);
		return () => {
			clearInterval(intervalId);
		};
	});

	return (
		<div className="staticContainer">
			{transStatic && (
				<img
					className="transition"
					src={tvStatic}
					alt="transition-static"
				/>
			)}
		</div>
	);
}
