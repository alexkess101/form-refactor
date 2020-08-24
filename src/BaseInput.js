import React, {useState} from "react";

// A clean and easy way to keep track of input state.
// Allows for different type of input types: radio, select lists, checkbox
// Scales easily for error checking and styling

export default class BaseInput {
	constructor(props) {
		const [value, setValue] = useState("");
		this.value = value;
		this.setValue = setValue;
		this.props = props;
	}

	getInput = () => {
		const {label, type} = this.props;

		return (
			<div>
				<label>{label}</label>
				<input type={type} onChange={event => {this.setValue(event.target.value)}}/>
			</div>
		);
	}
}