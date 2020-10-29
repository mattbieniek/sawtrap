import React from "react";
import "./Riddle.css";
import Answer from "../Answer/Answer";

export default function Riddle(props) {
	return (
		<div className="riddleDisplay">
			<h1 className='riddleText'>{props.riddle}</h1>
			<div className="answerDisplay">
				<Answer count={props.count} answer={props.answer} input='text'/>
			</div>
		</div>
	);
}
