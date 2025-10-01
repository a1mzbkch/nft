import React from "react";
import styles from "./Contact.module.scss";
import contact from "@/assets/Images/contact.svg";
import Image from "next/image";

const Contact = () => {
  return (
    <section className={styles.contactId}>
      <div className="container">
        <div className={styles.contact}>
          <div className={styles.contactTitle}>
            <Image src={contact} alt="img" />
            <p>
              Set a secondary sales fee and add social links, a description,
              profile and banner images, and a description.
            </p>
            <div className={styles.inputGroup}>
              <input type="text" placeholder="Enter your email address" />
            </div>
            <button className="btn">Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
