import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
	constructor(props) {
		super(props);
		this.onChangeCompanyName = this.onChangeCompanyName.bind(this);
		this.onChangeCompanyAbout = this.onChangeCompanyAbout.bind(this);
		this.onChangeCompanyAddress = this.onChangeCompanyAddress.bind(this);
		this.onChangeCompanyWebsite = this.onChangeCompanyWebsite.bind(this);
		this.onChangeCompanyPhone = this.onChangeCompanyPhone.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			companyName: '',
			companyAbout: '',
			companyAddress: '',
			companyWebsite: '',
			companyPhone: ''
		};
	}
	onChangeCompanyName(e) {
		this.setState({
			companyName: e.target.value
		});
	}
	onChangeCompanyAbout(e) {
		this.setState({
			companyAbout: e.target.value
		});
	}
	onChangeCompanyAddress(e) {
		this.setState({
			companyAddress: e.target.value
		});
	}
	onChangeCompanyWebsite(e) {
		this.setState({
			companyWebsite: e.target.value
		});
	}
	onChangeCompanyPhone(e) {
		this.setState({
			companyPhone: e.target.value
		});
	}
	onSubmit(e) {
		e.preventDefault();
		axios
			.post('https://cryptic-thicket-76143.herokuapp.com/companies', {
				name: this.state.companyName,
				about: this.state.companyAbout,
				address: this.state.companyAddress,
				website: this.state.companyWebsite,
				phone: this.state.companyPhone
			})
			.then(function(response) {
				console.log(response);
			})
			.catch(function(error) {
				console.log(error);
			});
		this.setState({
			companyName: '',
			companyAbout: '',
			companyAddress: '',
			companyWebsite: '',
			companyPhone: ''
		});
	}
	render() {
		return (
			<div style={{ marginTop: 10 }}>
				<h3>Add New Company</h3>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Name: </label>
						<input
							type="text"
							className="form-control"
							value={this.state.companyName}
							onChange={this.onChangeCompanyName}
						/>
					</div>
					<div className="form-group">
						<label>About the company: </label>
						<input
							type="text"
							className="form-control"
							value={this.state.companyAbout}
							onChange={this.onChangeCompanyAbout}
						/>
					</div>
					<div className="form-group">
						<label>Address: </label>
						<input
							type="text"
							className="form-control"
							value={this.state.companyAddress}
							onChange={this.onChangeCompanyAddress}
						/>
					</div>
					<div className="form-group">
						<label>Website: </label>
						<input
							type="text"
							className="form-control"
							value={this.state.companyWebsite}
							onChange={this.onChangeCompanyWebsite}
						/>
					</div>
					<div className="form-group">
						<label>Phone: </label>
						<input
							type="text"
							className="form-control"
							value={this.state.companyPhone}
							onChange={this.onChangeCompanyPhone}
						/>
					</div>
					<div className="form-group">
						<input type="submit" value="Register Company" className="btn btn-primary" />
					</div>
				</form>
			</div>
		);
	}
}
