import React, { Component } from 'react';

const API = 'https://cryptic-thicket-76143.herokuapp.com/companies';

export default class Index extends Component {
	constructor() {
		super();
		this.state = {
			companies: [],
			isLoaded: false
		};
	}
	// componentDidMount() {
	// 	fetch(API)
	// 		.then((response) => response.json())
	// 		.then((data) => this.setState({ data }))
	// 		.catch((error) => console.error('Error:', error));
	// 	console.table(this.state);
	// }
	componentDidMount() {
		fetch(API).then((res) => res.json()).then((result) => {
			this.setState({
				isLoaded: true,
				companies: result
			});
		});
	}
	render() {
		const { companies } = this.state;
		const isLoaded = this.state.isLoaded;
		if (!isLoaded) {
			return (
				<div>
					<p>loading..</p>
				</div>
			);
		} else {
			return (
				<ul>
					{companies.map((company) => (
						<li key={company.id}>
							<p>{company.name}</p>
							<p>{company.about}</p>
							<p>{company.address}</p>
							<p>{company.website}</p>
							<p>{company.phone}</p>
						</li>
					))}
				</ul>
			);
		}
	}
}
