import React from "react";
import Toolbar from "./Toolbar";

function LandingPage(props) {
	const [isLoggedIn, setIsLoggedIn] = React.useState(false);

	const onClickLogin = () => {
		setIsLoggedIn(true);
	};

	const onClickLogout = () => {
		setIsLoggedIn(false);
	};

	return (
		<div>
			<Toolbar
				isLoggedIn={isLoggedIn}
				onClickLogin={onClickLogin}
				onClickLogout={onClickLogout}
			/>
			<div>Body</div>
		</div>
	);
}

export default LandingPage;
