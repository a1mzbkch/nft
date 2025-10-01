"use client";

import Image from "next/image";
import React from "react";
import logo from "@/assets/Images/logo.svg";
import Link from "next/link";
import styles from "./Header.module.scss";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={styles.headerId}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.headerLogo}>
            <Image src={logo} alt="logo" />
          </div>
          <nav className={styles.headerNav}>
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
          <div className={styles.headerAction}>
            <button>Get in Touch</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
