import React from 'react';
import { useState, useEffect } from 'react';
import { Navbar, Icon, NavItem } from 'react-materialize';
import './Home.css';

function Home() {
	return (
		<div className="HomeContainer">
			<Navbar
				className="BottomLevelNav"
				alignLinks="right"
				id="mobile-nav"
				options={{
					draggable: true,
					edge: 'left',
					inDuration: 250,
					onCloseEnd: null,
					onCloseStart: null,
					onOpenEnd: null,
					onOpenStart: null,
					outDuration: 200,
					preventScrolling: true,
				}}
			>
				<NavItem href="">Products</NavItem>
				<NavItem href="">Cart</NavItem>
				<NavItem href="">Sign In</NavItem>
			</Navbar>
			Home
		</div>
	);
}

export default Home;
