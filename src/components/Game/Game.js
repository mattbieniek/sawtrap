import React, { useState, useEffect } from "react";
import "./Game.css";
import App from "../App/App";
import Transition from "../Transition/Transition";
import TvRoom from "../TvRoom/TvRoom";
import audio from "./intro.mp3";
import outro from "./outro.mp3";
import trivia from "./trivia.png";
import song from "../App/song.mp3";

const introAudio = new Audio(audio);
const outroAudio = new Audio(outro);
const theme = new Audio(song);

export default function Game() {
	const [slide, setSlide] = useState(true);
	const [transition, setTransition] = useState(false);
	const [intro, setIntro] = useState(false);
	const [trap, setTrap] = useState(false);
	const [win, setWin] = useState(false);
	const [time, setTime] = useState();
	const [end, setEnd] = useState(false);

	// Start game after intro audio ends
	useEffect(() => {
		introAudio.addEventListener("ended", () => {
			setIntro(false);
			setTrap(true);
			setTime(Date.now());
		});
	});

	// End game after outro audio ends
	useEffect(() => {
		outroAudio.addEventListener("ended", () => {
			setWin(false);
			setEnd(true);
		});
	});

	const playMusic = () => {
		theme.volume = 0.15;
		theme.play();
		theme.loop = true;
	};

	// Start theme music when game begins
	trap ? playMusic() : theme.pause();

	const startIntro = () => {
		// Sets delay on click for intro to play
		setTimeout(() => {
			setTransition(true);
			setTimeout(() => {
				setTransition(false);
				setSlide(false);
				setIntro(true);
				setTimeout(() => {
					introAudio.play();
				}, 100);
			}, 5000);
		}, 12000);
	};

	const winGame = () => {
		setTrap(false);
		setWin(true);
		setTimeout(() => {
			outroAudio.play();
		}, 400);
	};

	// Make start button not work when game begins
	let buttonStyle;

	trap
		? (buttonStyle = { display: "none" })
		: (buttonStyle = {
				position: "absolute",
				width: "100%",
				height: "100%",
				top: "0",
				left: "0",
				background: "transparent",
				border: "none",
				fontSizing: "0",
		  });

	// Game render
	return (
		<div className="game">
			{slide ? <img src={trivia} alt="trivia" /> : null}
			{transition && <Transition trans={transition} />}
			{intro && <TvRoom intro={intro} />}
			<button
				className="button"
				style={buttonStyle}
				onClick={startIntro}
			></button>
			{trap ? <App start={trap} time={time} win={winGame} /> : null}
			{win && <TvRoom win={win} />}
			{end && <div className="screen"></div>}
		</div>
	);
}
