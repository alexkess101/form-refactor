import React from "react";

const FormInput = ({children, submitRequest = ()=>{}, isLoading}) => {
	const onSubmit = (event) => {
		event.preventDefault();
		submitRequest();
	};

	return (
		<form onSubmit={onSubmit}>
			{isLoading && <div>Waiting...</div>}
			{children}
			<button type={"submit"}>Submit</button>
		</form>
	);
};

export default FormInput;