import React from "react";
import styles from "./Logos.module.scss";
import Image from "next/image";
import logo1 from "@/assets/Images/logo1.svg";
import logo2 from "@/assets/Images/logo2.svg";
import logo3 from "@/assets/Images/logo3.svg";
import logo4 from "@/assets/Images/logo4.svg";
import logo5 from "@/assets/Images/logo5.svg";
import logo6 from "@/assets/Images/logo6.svg";

const Images = () => {
  const logos = [logo2, logo3, logo4, logo6, logo2, logo3, logo4, logo6];

  return (
    <div className={styles.logosScrollContainer}>
      <div className={styles.logosScroll}>
        {logos.map((logo, index) => (
          <div key={`first-${index}`} className={styles.logoItem}>
            <Image
              src={logo}
              alt={`Logo ${index + 1}`}
              width={100}
              height={90}
            />
          </div>
        ))}
        {logos.map((logo, index) => (
          <div key={`second-${index}`} className={styles.logoItem}>
            <Image
              src={logo}
              alt={`Logo ${index + 5}`}
              width={120}
              height={60}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
