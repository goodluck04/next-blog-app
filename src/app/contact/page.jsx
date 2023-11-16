import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

export const metadata = {
  title: "Info",
  description: "Cantact me",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let &apos; s Keep in Touch</h1>
      <dir className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt="contact"
            fill={true}
            className={styles.image}
          />
        </div>
        <form action="" className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="email" placeholder="email" className={styles.input} />
          <textarea
            type="textArea"
            placeholder="message"
            cols="30"
            rows="10"
            className={styles.textArea}
          />
          <Button url="mailto:goodluckkumar04@gmail.com" text="Send" />
        </form>
      </dir>
    </div>
  );
};

export default Contact;
