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
	// const [LoadingScreenPlaceholder, setLoadingScreenPlaceholder] = useState(
	// 	<LoadingScreen />
	// );

	return (
		<div className="App">
			{
				<Router>
					<div id="scroll-container">
						<div id="scroll-text">
							For a limited time only, you can get 10% off your ENTIRE order
							with code MINTED10. Offer valid until 10th February.
						</div>
					</div>
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
							draggable: false,
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
						<Link to="/products">Products</Link>

						<Link to="/cart">Cart</Link>

						<Link to="/signin">Sign In</Link>
					</Navbar>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/signin" element={<SignIn />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="*" element={<ErrorPage />} />
						{/* <Route path="" element={} />
						<Route path="" element={} />
						<Route path="" element={} />
						<Route path="" element={} /> */}
					</Routes>
				</Router>
			}
		</div>
	);
}

export default App;
