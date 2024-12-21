import React from "react";
import styles from "./Contact.module.css";
import {
  FaPhoneAlt,
  FaInstagram,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";

const contactMethods = [
  {
    label: "تماس تلفنی",
    icon: <FaPhoneAlt />,
    link: "tel:+989123456789",
  },
  {
    label: "اینستاگرام",
    icon: <FaInstagram />,
    link: "https://instagram.com/yourprofile",
  },
  {
    label: "واتساپ",
    icon: <FaWhatsapp />,
    link: "https://wa.me/989123456789",
  },
  {
    label: "تلگرام",
    icon: <FaTelegramPlane />,
    link: "https://t.me/yourprofile",
  },
];

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.title}>تماس با ما</h2>
      <div className={styles.contactMethods}>
        {contactMethods.map((method, index) => (
          <a
            key={index}
            href={method.link}
            className={styles.contactMethod}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.icon}>{method.icon}</div>
            <span className={styles.label}>{method.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
