import React from "react";

const students = [
	{ name: "Alice", id: 1 },
	{ name: "Bob", id: 2 },
	{ name: "Charlie", id: 3 },
	{ name: "David", id: 4 },
];

function AttendanceBook(props) {
	return (
		<ul>
			{students.map((student) => (
				<li key={student.id}>{student.name}</li>
			))}
		</ul>
	);
}

export default AttendanceBook;
