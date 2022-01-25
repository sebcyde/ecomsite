import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'materialize-css';
import { Navbar, Icon, NavItem } from 'react-materialize';
import LoadingScreen from './LoadingScreen.js';
import './App.css';
import Home from './Pages/Home/Home.js';
import SignIn from './Pages/SignIn/SignIn.js';
import Cart from './Pages/Cart/Cart.js';
import ErrorPage from './Pages/ErrorPage/ErrorPage.js';

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
						<Link to="/" className="brand-logo">
							Minted Prints
						</Link>
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
					<NavItem href="">
						<Link to="/products">Products</Link>
					</NavItem>
					<NavItem href="">
						<Link to="/cart">Cart</Link>
					</NavItem>
					<NavItem href="">
						<Link to="/signin">Sign In</Link>
					</NavItem>
				</Navbar>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/signin" element={<SignIn />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</Router>
		);
	}, 2000);

	return (
		<div className="App">
			{/* {LoadingScreenPlaceholder} */}
			<LoadingScreen />
		</div>
	);
}

export default App;
