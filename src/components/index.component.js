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
							<h1>{company.name}</h1>
							<p>{company.about}</p>
							<p>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href={`http://maps.google.com/?q=${company.address}`}
								>
									{company.address}
								</a>
							</p>
							<p>
								<a target="_blank" rel="noopener noreferrer" href={company.website}>
									{company.website}
								</a>
							</p>
							<p>
								<a href={`tel:${company.phone}`}>{company.phone}</a>
							</p>
						</li>
					))}
				</ul>
			);
		}
	}
}
