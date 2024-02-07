import React from "react";

function ConfirmButton(props) {
	const [isConfirmed, setIsConfirmed] = React.useState(false);

	const handleConfirm = () => {
		setIsConfirmed((prevState) => !prevState);
	};

	return (
		<button onClick={handleConfirm} disabled={isConfirmed}>
			{isConfirmed ? "isConfirmed" : "Not isConfirmed"}
		</button>
	);
}

// class ConfirmButton extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			isConfirmed: false,
// 		};

// 		// this.handleConfirm = this.handleConfirm.bind(this);
// 	}

// 	handleConfirm = () => {
// 		this.setState((prevState) => ({
// 			isConfirmed: !prevState.isConfirmed,
// 		}));
// 	};

// 	render() {
// 		return (
// 			<button onClick={this.handleConfirm} disabled={this.state.isConfirmed}>
// 				{this.state.isConfirmed ? "isConfirmed" : "Not isConfirmed"}
// 			</button>
// 		);
// 	}
// }

export default ConfirmButton;
