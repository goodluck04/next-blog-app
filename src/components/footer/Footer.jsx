import React from "react";
import styles from './footer.module.css'
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className="">©2023 Lamia. All rights reserved.</div>
      <div className={styles.social}>
        {/* you can add LINK instead just image */}
        <Image src='/1.png' width={15} height={15} className={styles.icon} alt="lammaia" />
        <Image src='/2.png' width={15} height={15} className={styles.icon} alt="lammaia" />
        <Image src='/3.png' width={15} height={15} className={styles.icon} alt="lammaia" />
        <Image src='/4.png' width={15} height={15} className={styles.icon} alt="lammaia" />
      </div>
    </div>
  );
};

export default Footer;
