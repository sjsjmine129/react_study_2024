export default function Card(props) {
	const { title, backgroundColor, children } = props;

	return (
		<div
			style={{
				backgroundColor: backgroundColor || "white",
				margin: 8,
				padding: 8,
				borderRadius: 8,
				boxShadow: "0 0 4px grey",
			}}
		>
			{title && <h2>{title}</h2>}
			{children}
		</div>
	);
}
