import { BrowserRouter as Router, Routes } from 'react-router-dom';
import 'materialize-css';
import { Navbar, Icon, NavItem } from 'react-materialize';

import './App.css';

function App() {
	return (
		<div className="App">
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
				</Navbar>
				<Routes></Routes>
				<Routes></Routes>
				<Routes></Routes>
			</Router>
		</div>
	);
}

export default App;
