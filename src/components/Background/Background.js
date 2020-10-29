import React, {Fragment} from "react";
import "./Background.css";

export default function Background(props) {
	let imageUrl;
	const numbersUrl = `./images/count${props.count}.png`;

	props.source === "bathroom"
		? (imageUrl = `./images/${props.source}.jpg`)
		: (imageUrl = `./images/${props.source}.png`);

	let style;

	props.count ? style = {position: 'absolute'} : style = {display: 'none'};

	return (
		<Fragment>
			<img src={numbersUrl} alt='bloody-numbers' style={style}/>
			<img src={imageUrl} alt='background'/>
		</Fragment>
	)
}