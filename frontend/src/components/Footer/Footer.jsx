import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.copyright}>

          تمامی حقوق متعلق به فردا تیم است
          <br />
          <br />
          © {new Date().getFullYear()}
        </p>
        <div className={styles.socialLinks}>
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            اینستاگرام
          </a>
          <a
            href="https://t.me/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            تلگرام
          </a>
          <a
            href="https://wa.me/989123456789"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            واتساپ
          </a>
          <a href="tel:+989123456789" className={styles.link}>
            تماس تلفنی
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
