import React, { useState } from "react";
import Head from "next/head";
import styles from "./DefaultLayout.module.scss";

import NavBar from "components/NavBar/NavBar";
import Footer from "components/Footer/Footer";
import SideDrawer from "components/SideDrawer/SideDrawer";
import Backdrop from "components/Backdrop/Backdrop";

const DefaultLayout = (props) => {
	const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);

	const drawerToggleClickHandler = () => {
		setIsSideDrawerOpen(!isSideDrawerOpen);
	};

	const backDropClickHandler = () => {
		setIsSideDrawerOpen(false);
	};

	return (
		<div className={styles.layout}>
			<Head>
				<link
					href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900"
					rel="stylesheet"
				/>
				<link
					href="scss/bootstrap.min.scss"
					rel="stylesheet"
					type="text/css"
				/>
				<link
					href="scss/custom.scss"
					rel="stylesheet"
					type="text/css"
				/>

				<title>NUS FinTech Society</title>
			</Head>
			<NavBar drawerClickHandler={drawerToggleClickHandler} />
			<SideDrawer show={isSideDrawerOpen} />
			<div>
				{isSideDrawerOpen && (
					<Backdrop click={backDropClickHandler}></Backdrop>
				)}
			</div>
			<main>{props.children}</main>
			<Footer />
		</div>
	);
};

export default DefaultLayout;
