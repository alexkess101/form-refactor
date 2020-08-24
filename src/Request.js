import axios from "axios";

export default class Request {
	constructor(endpoint) {
		this.url = "https://ak-clearsummer.herokuapp.com" + endpoint;
		this.config = {
			headers: {
				"accepts": "application/json",
				"Content-Type": "application/json",
			}
		}
	}

	post(props={}) {
		const config = {...props, ...this.config};

		return axios.post(this.url, config);
	}
}