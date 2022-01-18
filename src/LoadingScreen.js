import React from 'react';
import './LoadingScreen.css';
import Icon from './Assets/wallstreetbets.png';

function LoadingScreen() {
	return (
		<div className="LoadingScreenContainer">
			<img src={Icon} className="LoadingScreenIcon" />
			<h1 className="LoadingScreenTagline">Loading Gains</h1>
		</div>
	);
}

export default LoadingScreen;
