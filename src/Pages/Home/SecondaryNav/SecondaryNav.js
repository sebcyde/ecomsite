import React from 'react';
import './SecondaryNav.css';
import { useNavigate, Link } from 'react-router-dom';
import {
	Navbar,
	Icon,
	Dropdown,
	Button,
	Divider,
	Table,
} from 'react-materialize';

function SecondaryNav() {
	let Navigate = useNavigate();

	return (
		<div className="SecondaryNavContainer">
			<ul className="SecondaryNavListContainer">
				<li>
					<Dropdown
						id="Dropdown_7"
						options={{
							alignment: 'left',
							autoTrigger: true,
							closeOnClick: true,
							constrainWidth: false,
							container: null,
							coverTrigger: false,
							hover: true,
							inDuration: 150,
							onCloseEnd: null,
							onCloseStart: null,
							onOpenEnd: null,
							onOpenStart: null,
							outDuration: 250,
						}}
						trigger={
							<a
								onClick={() => {
									Navigate('/signin');
								}}
							>
								Collections
							</a>
						}
					>
						<a href="#">one</a>
						<a href="#">two</a>
						<Divider />
						<a href="#">three</a>
						<a href="#">
							<Icon>view_module</Icon>
							four
						</a>
						<a href="#">
							<Icon>cloud</Icon> five
						</a>
					</Dropdown>
				</li>
				<li>
					<Dropdown
						id="Dropdown_8"
						options={{
							alignment: 'left',
							autoTrigger: true,
							closeOnClick: true,
							constrainWidth: false,
							container: null,
							coverTrigger: false,
							hover: true,
							inDuration: 150,
							onCloseEnd: null,
							onCloseStart: null,
							onOpenEnd: null,
							onOpenStart: null,
							outDuration: 250,
						}}
						trigger={
							<a
								onClick={() => {
									Navigate('/signin');
								}}
							>
								Artworks
							</a>
						}
					>
						<a href="#">one</a>
						<a href="#">two</a>
						<Divider />
						<a href="#">three</a>
						<a href="#">
							<Icon>view_module</Icon>
							four
						</a>
						<a href="#">
							<Icon>cloud</Icon> five
						</a>
					</Dropdown>
				</li>
				<li>
					<Dropdown
						id="Dropdown_9"
						options={{
							alignment: 'left',
							autoTrigger: true,
							closeOnClick: true,
							constrainWidth: true,
							container: null,
							coverTrigger: false,
							hover: true,
							inDuration: 150,
							onCloseEnd: null,
							onCloseStart: null,
							onOpenEnd: null,
							onOpenStart: null,
							outDuration: 250,
						}}
						trigger={
							<a
								onClick={() => {
									Navigate('/signin');
								}}
							>
								Artists
							</a>
						}
					>
						<a href="#">one</a>
						<a href="#">two</a>
						<Divider />
						<a href="#">three</a>
						<a href="#">
							<Icon>view_module</Icon>
							four
						</a>
						<a href="#">
							<Icon>cloud</Icon> five
						</a>
					</Dropdown>
				</li>
				<li className="GiftsDropdownLink">
					<Dropdown
						id="Dropdown_10"
						options={{
							alignment: 'left',
							autoTrigger: true,
							closeOnClick: true,
							constrainWidth: true,
							container: null,
							coverTrigger: false,
							hover: true,
							inDuration: 150,
							onCloseEnd: null,
							onCloseStart: null,
							onOpenEnd: null,
							onOpenStart: null,
							outDuration: 250,
						}}
						trigger={
							<a
								onClick={() => {
									Navigate('/signin');
								}}
							>
								Gifts
							</a>
						}
					>
						<div className="GiftsDropdownSectionOne">
							<a href="#">one</a>
							<a href="#">two</a>
							<a href="#">three</a>
						</div>

						<div className="GiftsDropdownSectionTwo">
							<a href="#">one</a>
							<a href="#">two</a>
							<a href="#">three</a>
						</div>
						<div className="GiftsDropdownSectionThree">
							<a href="#">one</a>
							<a href="#">two</a>
							<a href="#">three</a>
						</div>
						<Divider />

						<a href="#">
							<Icon>view_module</Icon>
							four
						</a>
						<a href="#">
							<Icon>cloud</Icon> five
						</a>
					</Dropdown>
				</li>
			</ul>
		</div>
	);
}

export default SecondaryNav;
