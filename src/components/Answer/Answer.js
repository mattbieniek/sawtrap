import React, { useState } from "react";
import "./Answer.css";

export default function Answer(props) {
	const [answer, setAnswer] = useState("");
	const [number, setNumber] = useState(0);

	// Set answer state on input
	const handleAnswerEntry = (event) => {
		event.preventDefault();
		setAnswer(event.target.value);
	};

	// Set number state on input
	const handleNumberEntry = (event) => {
		event.preventDefault();
		setNumber(event.target.value);
	};

	// Check for correct answer
	const handleAnswerCheck = () => {
		if (props.input === "number") {
			if (number === "7529") {
				props.win();
			}
		}
		if (answer === props.answer) {
			props.count();
		}
		setAnswer("");
		setNumber(0);
	};

	return (
		<div className="answerForm">
			{props.input === "text" ? (
				<input
					className="textInput"
					type="text"
					value={answer}
					onChange={handleAnswerEntry}
					textAlign='center'
				/>
			) : (
				<input
					className="numInput"
					type="number"
					value={number}
					onChange={handleNumberEntry}
					textAlign='center'
				/>
			)}
			<input className='submit' type="submit" onClick={handleAnswerCheck}/>
		</div>
	);
}