import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput";

function BoilingVerdict(props) {
	if (props.celsius >= 100) {
		return <p>끓는다</p>;
	}
	return <p>끓지 않는다</p>;
}

function toCelsius(fahrenheit) {
	return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
	return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
	const input = parseFloat(temperature);
	if (Number.isNaN(input)) {
		return "";
	}
	const output = convert(input);
	const rounded = Math.round(output * 1000) / 1000;
	return rounded.toString();
}

function Calculator(props) {
	const [temperature, setTemperature] = useState("");
	const [scale, setScale] = useState("c");

	const handelCelciusChange = (temperature) => {
		setTemperature(temperature);
		setScale("c");
	};

	const handelFarenheitChange = (temperature) => {
		setTemperature(temperature);
		setScale("f");
	};

	const celsius =
		scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
	const fahrenheit =
		scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

	return (
		<div>
			<TemperatureInput
				scale="c"
				temperature={celsius}
				onTemperatureChange={handelCelciusChange}
			/>
			<TemperatureInput
				scale="f"
				temperature={fahrenheit}
				onTemperatureChange={handelFarenheitChange}
			/>
			<BoilingVerdict celsius={parseFloat(celsius)} />
		</div>
	);
}

export default Calculator;
