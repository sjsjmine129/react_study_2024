const scaleNames = {
	c: "Celsius",
	f: "Fahrenheit",
};

function TemperatureInput(props) {
	const handelChange = (event) => {
		props.onTemperatureChange(event.target.value);
	};

	return (
		<fieldset>
			<legend>
				{"온도를 입력해 주세요 단위( " + scaleNames[props.scale] + " ):"}
			</legend>
			<input value={props.temperature} onChange={handelChange} />
		</fieldset>
	);
}

export default TemperatureInput;
