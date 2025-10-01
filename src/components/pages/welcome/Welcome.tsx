import React from "react";
import styles from "./Welcome.module.scss";
import Image from "next/image";
import welcomeImage from "@/assets/Images/welcome.svg";
import eyes from "@/assets/Images/eye.svg";
import img from "@/assets/Images/img.svg";

const Welcome = () => {
  return (
    <section className={styles.welcomeId}>
      <div className={styles.container}>
        <div className={styles.welcome}>
          <div className={styles.welcomeLeft}>
            <h1>
              Buy, Create & <br /> Sell <i>Unique NFTs</i> File.
            </h1>
            <p>
              NFTs are used for digital art and collectibles, GameFi <br />{" "}
              projects, metaverses, and more.
            </p>
            <button className={styles.exploreBtn}>Explore NFTs</button>
            <Image src={img} alt="img" />
          </div>
          <div className={styles.welcomeRight}>
            <Image src={welcomeImage} alt="welcome" />
          </div>
        </div>
        <div className={styles.welcomeStatic}>
          <div className={styles.welcomeTitle}>
            <Image src={eyes} alt="eye" />
            <h1>Nico NFT Marketplace Overview</h1>
          </div>
          <div className={styles.welcomeColum}>
            <div className={styles.welcomeCount}>
              <h3>World Arts</h3>
              <h2>30.000 +</h2>
            </div>
            <div className={styles.welcomeCount}>
              <h3>Digital Artists</h3>
              <h2>17.000 +</h2>
            </div>
            <div className={styles.welcomeCount}>
              <h3>Live Auctions</h3>
              <h2>22.000 +</h2>
            </div>
            <div className={styles.welcomeCount}>
              <h3>Unique Products</h3>
              <h2>50.000 +</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
