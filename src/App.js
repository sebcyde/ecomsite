import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'materialize-css';
import { Navbar, Icon, NavItem } from 'react-materialize';
import LoadingScreen from './LoadingScreen.js';
import './App.css';

function App() {
	const [LoadingScreenPlaceholder, setLoadingScreenPlaceholder] = useState(
		<LoadingScreen />
	);
	setTimeout(() => {
		setLoadingScreenPlaceholder(
			<Router>
				<Navbar
					className="TopLevelNav"
					alignLinks="right"
					brand={
						<a className="brand-logo" href="#">
							Minted Prints
						</a>
					}
					id="mobile-nav"
					menuIcon={<Icon>menu</Icon>}
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
					<NavItem href="components.html">Cart</NavItem>
					<NavItem href="">Sign In</NavItem>
				</Navbar>
				<Routes>
					<Route path="/" />
					<Route path="/" />
					<Route path="/" />
				</Routes>
			</Router>
		);
	}, 3000);

	return <div className="App">{LoadingScreenPlaceholder}</div>;
}

export default App;
