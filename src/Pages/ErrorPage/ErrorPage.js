import React from 'react';
import './ErrorPage.css';
import NT from '../../Assets/rocket.png';

function ErrorPage() {
	return (
		<div className="ErrorPageContainer">
			<img src={NT} className="NT" />
			<h1 className="ErrorPageTagline">Error, Tendies Not Found</h1>
			<p className="ErrorPageReturnHome">
				<a>Go Back</a>
			</p>
		</div>
	);
}

export default ErrorPage;
