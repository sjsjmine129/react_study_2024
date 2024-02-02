import React from "react";
import Comment from "./Comment";

const list = [{ name: "엄승주" }, { name: "홍길동" }];

function CommentList(props) {
	return (
		<div>
			{list.map((comment, index) => {
				return <Comment name={comment.name} />;
			})}
		</div>
	);
}

export default CommentList;
