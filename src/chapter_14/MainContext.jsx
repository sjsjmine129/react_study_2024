import { useContext } from "react";
import ThemeContext from "./ThemeContext";

export default function MainContext(props) {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<div
			style={{
				width: "100vw",
				height: "100vh",
				padding: "1.5rem",
				backgroundColor: theme === "light" ? "white" : "black",
				color: theme === "light" ? "black" : "white",
			}}
		>
			<p>MainContext</p>
			<button onClick={toggleTheme}>Theme Change</button>
		</div>
	);
}
