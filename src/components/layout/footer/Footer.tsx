"use client";

import React from "react";
import styles from "./Footer.module.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className={styles.footerId}>
      <div className="container">
        <div className={styles.footer}>
          <p>Copyright © 2022 Nazmul Shanto. All Rights Reserved</p>
          <nav className={styles.footerNav}>
            <Link
              href="/"
              className={`${styles.navLink} ${
                pathname === "/" ? styles.active : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`${styles.navLink} ${
                pathname === "/about" ? styles.active : ""
              }`}
            >
              All NFTs
            </Link>
            <Link
              href="/team"
              className={`${styles.navLink} ${
                pathname === "/team" ? styles.active : ""
              }`}
            >
              Team
            </Link>
            <Link
              href="/terms"
              className={`${styles.navLink} ${
                pathname === "/terms" ? styles.active : ""
              }`}
            >
              Terms & Co.
            </Link>
            <Link
              href="/contact"
              className={`${styles.navLink} ${
                pathname === "/contact" ? styles.active : ""
              }`}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
