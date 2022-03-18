import React from "react";
import { buttonTypes } from "./ButtonTypes";

const CoolButton = (props) => {
	return (
		<button className={`button ${getButtonTypes(props)}`}>
			<span>{props.children}</span>
		</button>
	);
};

const getButtonTypes = (lst) => {
	return Object.keys(lst)
		.map((el) => {
			if (el in buttonTypes) {
				return buttonTypes[el];
			}
		})
		.join(" ");
};

export { CoolButton };
