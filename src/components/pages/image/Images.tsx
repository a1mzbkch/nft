import React from "react";
import styles from "./Images.module.scss";
import galary1 from "@/assets/Images/galary1.svg";
import galary2 from "@/assets/Images/galary2.svg";
import galary3 from "@/assets/Images/galary3.svg";
import galary4 from "@/assets/Images/galary4.svg";
import Image from "next/image";

const Images = () => {
  return (
    <section className={styles.imageId}>
      <div className="container">
        <div className={styles.image}>
          <div className={styles.imageTitle}>
            <h1>
              <i>Browse by</i>Category
            </h1>
            <p>
              Set a secondary sales fee and add social links, a description,{" "}
              <br />
              profile and banner images, and a description.
            </p>
          </div>
          <div className={styles.imageGalery1}>
            <Image src={galary1} alt="1" />
            <Image src={galary2} alt="1" />
          </div>
          <div className={styles.imageGalery2}>
            <Image src={galary3} alt="1" />
            <Image src={galary4} alt="1" />
          </div>
          <div className={styles.imageBtn}>
            <button>Explore NFTs Category</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Images;
