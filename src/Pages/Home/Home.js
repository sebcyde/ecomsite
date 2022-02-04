import React from 'react';
import { useState, useEffect } from 'react';
import { Navbar, Icon, NavItem } from 'react-materialize';
import './Home.css';
import SecondaryNav from './SecondaryNav/SecondaryNav';

function Home() {
	return (
		<div className="HomeContainer">
			<div id="scroll-container">
				<div id="scroll-text">
					For a limited time only, you can get 10% off your ENTIRE order with
					code MINTED10. Offer valid until 10th February 2022.
				</div>
			</div>
			<SecondaryNav />
			Home
		</div>
	);
}

export default Home;
