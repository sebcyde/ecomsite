import React from 'react';
import { useState, useEffect } from 'react';
import './Home.css';
import HomepageCarousel from './HomepageCarousel/HomepageCarousel';
import SecondaryNav from './SecondaryNav/SecondaryNav';

function Home() {
	return (
		<div className="HomeContainer">
			<HomepageCarousel />
			Home
		</div>
	);
}

export default Home;
