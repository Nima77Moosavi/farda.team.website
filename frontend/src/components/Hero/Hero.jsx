import React from "react";
import styles from "./Hero.module.css";
import hero from "../../assets/hero.png"; // Replace with your actual image path

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>تیم فردا</h1>
          <p className={styles.description}>
            ما تیمی از طراحان و توسعه‌دهندگان وب هستیم که با خلاقیت و تخصص،
            پروژه‌های وب شما را به بهترین شکل ممکن طراحی و اجرا می‌کنیم.
          </p>
          <button className={styles.cta}>مشاهده نمونه کارها</button>
        </div>
        <div className={styles.imageContainer}>
          <img src={hero} alt="Farda Team" className={styles.image} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
