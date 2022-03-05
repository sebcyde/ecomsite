import React from 'react';
import 'materialize-css';
import { Button, TextInput, Icon } from 'react-materialize';
import './SignIn.css';
import { useState } from 'react/cjs/react.development';

function SignIn() {
	const SignInButton = (
		<Button node="button" type="submit" waves="light">
			Log In
			<Icon right>login</Icon>
		</Button>
	);
	const [LogInButton, setLogInButton] = useState(SignInButton);

	return (
		<div className="SignInPage">
			<div className="SignInContainer">
				<h1 className="SignInTitle">Sign In</h1>
				<form className="SignInFormContainer">
					<TextInput
						id="TextInput-39"
						label="Email"
						className="SignInPageEmailInput"
					/>
					<TextInput
						id="TextInput-42"
						label="Password"
						password
						className="SignInPagePasswordInput"
					/>
					{LogInButton}
				</form>
			</div>
		</div>
	);
}

export default SignIn;
