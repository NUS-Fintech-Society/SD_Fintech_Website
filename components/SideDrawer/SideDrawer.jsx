import React, { useState } from "react";
import styles from "./SideDrawer.module.scss";
import { CSSTransition } from "react-transition-group";

const SideDrawer = (props) => {
	let drawerClasses = styles.side_drawer;
	if (props.show) {
		drawerClasses = styles.side_drawer_open;
	}

	return (
		<nav className={drawerClasses}>
			<ul>
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/events">Events</a>
				</li>

				<DropDown name="Our Team ⇂">
					<DropDownMenu></DropDownMenu>
				</DropDown>

				<li>
					<a href="/#ourTeam">Our Team</a>
				</li>
				<li>
					<a href="/#contact">Contact Us</a>
				</li>
			</ul>
		</nav>
	);
};

function DropDown(props) {
	const [open, setOpen] = useState(false);
	return (
		<li className={styles.navbar_items}>
			<a href="#" onClick={() => setOpen(!open)}>
				{props.name}
			</a>
			{open && props.children}
		</li>
	);
}

function DropDownMenu() {
	function DropDownItem(props) {
		return (
			<a href="#" className={styles.dropdown_menu_item}>
				{props.children}
			</a>
		);
	}

	return (
		<div className={styles.dropdown_menu}>
			<DropDownItem>Operations</DropDownItem>
			<DropDownItem>Machine Learning</DropDownItem>
			<DropDownItem>Blockchain</DropDownItem>
			<DropDownItem>DevOps</DropDownItem>
		</div>
	);
}

export default SideDrawer;
