import React from "react";
import newspaper from "@/assets/Images/newspaper.svg";
import Image from "next/image";
import ui from "@/assets/Images/ui.svg";
import ui2 from "@/assets/Images/ui2.svg";
import styles from "./Trending.module.scss";

const Trending = () => {
  return (
    <section className={styles.trendingId}>
      <div className={styles.container}>
        <div className={styles.trending}>
          <div className={styles.trendingLeft}>
            <Image src={newspaper} alt="img" />
            <h1>
              {" "}
              <i>Trending</i> Crypto Market News
            </h1>
            <p>
              Set a secondary sales fee and add social links, a description,
              profile and banner images, and a description.
            </p>
            <button className={styles.exploreBtn}>Explore NFTs</button>
          </div>
          <div className={styles.trendingRight}>
            <div className={styles.trendingBlock}>
              <Image src={ui} alt="img" className={styles.blockImage} />
              <h3>April 18, 2022</h3>
              <h1>Few Reasons to Sell NFTs on Nico</h1>
            </div>
            <div className={styles.trendingBlock}>
              <Image src={ui2} alt="img" className={styles.blockImage} />
              <h3>April 18, 2022</h3>
              <h1>Few Reasons to Sell NFTs on Nico</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
