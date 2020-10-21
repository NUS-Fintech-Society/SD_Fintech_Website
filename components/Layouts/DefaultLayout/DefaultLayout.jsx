import React, { Component } from "react";
import Head from "next/head";
import styles from "./DefaultLayout.module.scss";

import NavBar from "components/NavBar/NavBar";
import Footer from "components/Footer/Footer";
import SideDrawer from "components/SideDrawer/SideDrawer"
import Backdrop from "components/Backdrop/Backdrop";

class handler extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backDropClickHandler} />
    }

    return (
      <div className={styles.layout}>
        <NavBar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{ marginTop: '64px' }}>
          <p> NUS FINTECH</p>
        </main>
      </div>
    );
  }
}


const DefaultLayout = (props) => {
  return (
    <div className={styles.layout} style={{ height: '100%' }}>
      <Head>
        <title>NUS FinTech Society</title>
      </Head>
      <NavBar />
      <SideDrawer />
      <Backdrop />
      {props.children}
      <Footer />
    </div>
  );
};

export default handler;
