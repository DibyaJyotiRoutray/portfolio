import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import { openEmailClient } from "../../utls/mailClient";


export const Contact = () => {


  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link} onClick={openEmailClient}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:dibyajyotiroutray68@email.com"></a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/djr41018/"></a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/DibyaJyotiRoutray"></a>
        </li>
      </ul>
    </footer>
  );
};