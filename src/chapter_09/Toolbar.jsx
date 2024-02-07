import React from "react";

const styles = {
	wapper: {
		padding: 16,
		display: "flex",
		flexDirection: "row",
		borderBottom: "1px solid #e0e0e0",
	},
	greeting: {
		marginRight: 8,
	},
};

function Toolbar(props) {
	const { isLoggedIn, onClickLogin, onClickLogout } = props;

	return (
		<div style={styles.wapper}>
			{isLoggedIn && <span style={styles.greeting}>Hello</span>}
			{isLoggedIn ? (
				<button onClick={onClickLogout}>LogOut</button>
			) : (
				<button onClick={onClickLogin}>LogIn</button>
			)}
		</div>
	);
}

export default Toolbar;
