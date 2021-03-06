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

	componentWillReceiveProps(newProps) {
		if (this.props.location.pathname !== newProps.location.pathname) {
			this.setState({username: "", password: ""},
			() => this.props.clearErrors());
		}
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
					<li className='form-error' key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	demo(button, guest) {
		if (button === "Log In") {
			return (<button className="demo" onClick={() => this.setState(guest.user)}>Demo</button>);
		} else {
			return (<p></p>);
		}
	}

	render() {
		let button = this.props.formType === 'login' ? "Log In" : "Sign Up";
		const guest = { user: {username: 'guest', password: 'password'}};

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
						{this.demo(button, guest)}
            {this.navLink()}

					</div>
				</form>
			</div>
		);
	}

}

export default withRouter(SessionForm);
