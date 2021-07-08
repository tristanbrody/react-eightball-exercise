import { useState } from 'react';
import './EightBall.css';
import React from 'react';

function getRandomAnswer(answers) {
	console.log(answers.length);
	const randomNumber = Math.floor(Math.random() * answers.length);
	return answers[randomNumber];
}

function handleClick(randomAnswer, setMessage, setColor) {
	setMessage(randomAnswer.msg);
	setColor(randomAnswer.color);
}

function handleReset(setMessage, setColor, { defaultMessage, defaultColor }) {
	setMessage(defaultMessage);
	setColor(defaultColor);
}

const EightBall = props => {
	const randomAnswer = getRandomAnswer(props.answers);
	const defaults = {
		defaultMessage: 'Think of a Question',
		defaultColor: 'black'
	};
	const [message, setMessage] = useState(defaults.defaultMessage);
	const [color, setColor] = useState(defaults.defaultColor);

	return (
		<React.Fragment>
			<div
				className="EightBall"
				style={{ backgroundColor: color }}
				onClick={() => handleClick(randomAnswer, setMessage, setColor)}
			>
				<p>{message}</p>
			</div>
			<button onClick={() => handleReset(setMessage, setColor, defaults)}>Reset</button>
		</React.Fragment>
	);
};

export default EightBall;
