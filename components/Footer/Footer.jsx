import React from "react";
import styles from "./Footer.module.scss";
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import Link from "next/link";

const Footer = (props) => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <li><Link href="#"><AiOutlineInstagram /></Link></li>
          <li><Link href="#"><AiOutlineGithub /></Link></li>
          <li><Link href="#"><AiOutlineLinkedin /></Link></li>
        </div>
        <div className={styles.row}>
          <div className={styles.trademark}>
            <span><AiOutlineCopyrightCircle /></span>
            <span>2020 by NUS FinTech Society</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;