import React from 'react';
import './LoadingScreen.css';
import { Row, Col, ProgressBar } from 'react-materialize';

function LoadingScreen() {
	return (
		<div className="LoadingScreenContainer">
			<Row>
				<Col s={12}>
					<ProgressBar />
				</Col>
			</Row>
		</div>
	);
}

export default LoadingScreen;
