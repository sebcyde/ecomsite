import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ErrorPage.css';
import NT from '../../Assets/rocket.png';

function ErrorPage() {
	let Navigate = useNavigate();

	return (
		<div className="ErrorPageContainer">
			<img src={NT} className="NT" />
			<h1 className="ErrorPageTagline">Error, Page Not Found</h1>
			<p className="ErrorPageReturnHome">
				<a
					onClick={() => {
						Navigate('/');
					}}
				>
					Go Back
				</a>
			</p>
		</div>
	);
}

export default ErrorPage;
