import React from "react";

const styles = {
	wrapper: {
		margin: 8,
		padding: 8,
		display: "flex",
		flexdirection: "row",
		border: "1px solid grey",
		borderRadius: 16,
	},
	messageText: {
		color: "black",
		fontseize: 16,
	},
};

class Notification extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		console.log(this.props.id, " Notification component mounted");
	}
	componentDidUpdate() {
		console.log(this.props.id, " Notification component updated");
	}
	componentWillUnmount() {
		console.log(this.props.id, " Notification component will unmount");
	}

	render() {
		return (
			<div style={styles.wrapper}>
				<span style={styles.messageText}>{this.props.message}</span>
			</div>
		);
	}
}

export default Notification;
