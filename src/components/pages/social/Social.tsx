import React from "react";
import styles from "./Social.module.scss";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Social = () => {
  return (
    <section className={styles.socialId}>
      <div className="container">
        <div className={styles.social}>
          <div className={styles.socialBlock}>
            <div className={styles.socialCircle}></div>
            <h4>example@gmail.com</h4>
            <h4>sample@yahoo.com</h4>
          </div>
          <div className={styles.socialBlock}>
            <div className={styles.socialCircle}></div>
            <h4>We are on Telegram</h4>
            <h4>@NicoCryptoChannel</h4>
          </div>
          <div className={styles.socialBlock}>
            <div className={styles.socialCircle}></div>
            <h4>+1 800 123 456 789</h4>
            <h4>+1 800 123 456 780</h4>
          </div>
        </div>
          <div className={styles.socialCard}>
            <div className={styles.socials}>
              <FaFacebookF />
            </div>
            <div className={styles.socials}>
              <FaLinkedinIn />
            </div>
            <div className={styles.socials}>
              <FaTwitter />
            </div>
            <div className={styles.socials}>
              <FaYoutube />
            </div>
          </div>
      </div>
    </section>
  );
};

export default Social;
