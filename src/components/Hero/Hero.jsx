
import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { openEmailClient } from "../../utls/mailClient";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Dibya Jyoti Routray</h1>
        <p className={styles.description}>
        I'm a passionate full-stack developer, constantly exploring and learning new technologies like React and Node.js. I'm excited to build innovative solutions and create impactful web applications. Let's connect and grow together!

        </p>
        <button onClick={openEmailClient}  className={styles.contactBtn}>
          Contact Me
        </button>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
