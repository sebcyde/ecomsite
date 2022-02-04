import React from 'react';
import './SecondaryNav.css';

function SecondaryNav() {
	return (
		<div className="SecondaryNavContainer">
			<ul className="SecondaryNavListContainer">
				<li>
					<a href="#">Artworks</a>
				</li>
				<li>
					<a href="#">Artists</a>
				</li>
				<li>
					<a href="#">Art Gifts</a>
				</li>
				<li>
					<a href="#">Journal</a>
				</li>
			</ul>
		</div>
	);
}

export default SecondaryNav;
