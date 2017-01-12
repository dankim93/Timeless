import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user});
	}

	navLink() {
		if (this.props.formType === "login") {
			return <p className="memo">Don't have an account? <Link to="/signup">Sign Up</Link></p>;
		} else {
			return <p className="memo">Already have an account? <Link to="/login">Log In</Link></p>;
		}
	}

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
		let button = this.props.formType === 'login' ? "Log In" : "Sign Up";
		return (
			<div className="login-form-container">
				<form onSubmit={this.handleSubmit} className="login-form-box">
					<h2>Login to your account</h2>

					<br/>
					{this.renderErrors()}
					<div className="login-form">
						<br/>
							<input type="text"
								value={this.state.username}
								onChange={this.update("username")}
								className="login-input"
								placeholder="Username"/>
						<br/>
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input"
								placeholder="Password" />
						<br/>
						<input type="submit" value={button} />
            {this.navLink()}

					</div>
				</form>
			</div>
		);
	}

}

export default withRouter(SessionForm);