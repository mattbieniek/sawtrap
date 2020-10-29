import React from "react";
import Answer from "../Answer/Answer";
import "./Keypad.css";

export default function Keypad(props) {
	return (
		<div className="pad">
			<h3>Enter the correct code to survive.</h3>
			<Answer input='number' win={props.win}/>
		</div>
	);
}
