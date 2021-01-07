import React, { useState } from "react";
import styles from "./NavBar.module.scss";
import Link from "next/link";

import DrawerToggleButton from "components/SideDrawer/DrawerToggleButton";

const NavBar = (props) => {
	return (
		<header className={styles.navbar}>
			<nav className={styles.navbar_navigation}>
				<div className={styles.navbar_toggle_button}>
					<DrawerToggleButton click={props.drawerClickHandler} />
				</div>
				<div className={styles.navbar_logo}>
					<img
						src="/images/SocietyLogo.png"
						alt="society logo"
						className={styles.image}
					/>
				</div>
				<div className={styles.spacer}></div>
				<div className={styles.navbar_items}>
					<ul id="nav-mobile" className="center">
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>
							<Link href="/events">Events</Link>
						</li>

						<DropDown name="Our Team ⇂">
							<DropDownMenu></DropDownMenu>
						</DropDown>

						<li>
							<Link href="/#contact">Contact Us</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
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

export default NavBar;
