import React from 'react';
import './LoadingScreen.css';
import { Row, Col, ProgressBar } from 'react-materialize';

function LoadingScreen() {
	return (
		<div className="LoadingScreenContainer">
			<h2 className="LoadingScreenTagline">Loading</h2>
			<Row>
				<Col s={12}>
					<ProgressBar />
				</Col>
			</Row>
		</div>
	);
}

export default LoadingScreen;
