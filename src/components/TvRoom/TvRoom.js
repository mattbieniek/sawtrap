import React, { useState, useEffect } from "react";
import './TvRoom.css';
import jigsaw from "./jigsaw.mp4";
import tv from "./tv.png";
import tvStatic from "./static.gif";
import staticAudio from "./static.mp3";
import introImg from "./intro.png";
import winImg from "./win.png";

const staticSound = new Audio(staticAudio);

export default function TvRoom(props) {
	const [randStatic, setRandStatic] = useState(false);

	// Randomize TV Static
	useEffect(() => {
		const intervalId = setInterval(() => {
			let delay = Math.floor(Math.random() * 10);
			delay >= 9 ? setRandStatic(true) : setRandStatic(false);
		}, 850);
		return () => clearInterval(intervalId);
	})

	// Static sound function
	const playStaticSound = () => {
		staticSound.volume = 0.13;
		staticSound.play();
	};

	// Play TV static sound when static appears
	randStatic ? playStaticSound() : staticSound.pause();

	return (
		<div className="room">
			{props.intro ? (
				<div className="intro">
					<img className="creepy" src={introImg} alt="creepy" />
					<video className="video" autoPlay="autoPlay" loop="loop">
						<source src={jigsaw} type="video/mp4" />
					</video>
					<img className="tv" src={tv} alt="tv" />
					{randStatic ? (
						<img className="static" src={tvStatic} alt="static" />
					) : null}
				</div>
			) : null}
			{props.win ? (
				<div className="winGame">
					<img className="win" src={winImg} alt="win" />
					<video className="video" autoPlay="autoPlay" loop="loop">
						<source src={jigsaw} type="video/mp4" />
					</video>
					<img className="tv" src={tv} alt="tv" />
					{randStatic ? (
						<img className="static" src={tvStatic} alt="static" />
					) : null}
				</div>
			) : null}
		</div>
	);
}
