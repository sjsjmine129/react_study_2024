/* eslint-disable no-useless-concat */
import React, { useState } from "react";

function SignUp(props) {
	const [name, setName] = useState("");
	const [gender, setGender] = useState("male");

	const handelChange = (event) => {
		setName(event.target.value);
	};

	const handelGenderChange = (event) => {
		setGender(event.target.value);
	};

	const handelSubmit = (event) => {
		alert(`Welcome, ${name} (${gender})`);
		event.preventDefault();
	};

	return (
		<form onSubmit={handelSubmit}>
			<label>
				Name:
				<input type="text" value={name} onChange={handelChange} />
			</label>
			<br />
			<label>
				Gender:
				<select value={gender} onChange={handelGenderChange}>
					<option value="male">male</option>
					<option value="female">female</option>
				</select>
			</label>
			<button type="submit">Sign Up</button>
		</form>
	);
}
export default SignUp;
