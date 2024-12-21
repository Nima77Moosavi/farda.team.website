import React from "react";
import styles from "./About.module.css";
import teamImage1 from "../../assets/about1.png";
import teamImage2 from "../../assets/team2.png";
import teamImage3 from "../../assets/team3.jpeg";

const aboutItems = [
  {
    image: teamImage1,
    description:
      "ما تیمی از طراحان و توسعه‌دهندگان وب هستیم که با خلاقیت و تخصص، پروژه‌های دیجیتال شما را به بهترین شکل ممکن طراحی و اجرا می‌کنیم. هدف ما ایجاد تجربه‌ای بی‌نظیر و ماندگار برای مشتریان است که بتوانند در دنیای دیجیتال بدرخشند. ما به ارائه بهترین خدمات در زمینه طراحی و توسعه وب‌سایت، طراحی تجربه کاربری (UX)، و اجرای استراتژی‌های دیجیتال مارکتینگ متعهد هستیم.",
  },
  {
    image: teamImage2,
    description:
      "با تمرکز بر نوآوری و استفاده از تکنولوژی‌های روز دنیا، ما به شما کمک می‌کنیم تا ایده‌های خود را به واقعیت تبدیل کنید. تیم ما در تمامی مراحل از برنامه‌ریزی تا اجرا و تحویل پروژه، در کنار شما خواهد بود تا به اهداف کسب‌وکاری خود برسید و در دنیای رقابتی دیجیتال بدرخشید.",
  },
  {
    image: teamImage3,
    description:
      "تخصص ما شامل طراحی و توسعه وب‌سایت‌های مدرن، طراحی رابط کاربری (UI) و تجربه کاربری (UX)، و ارائه راه‌حل‌های سفارشی برای نیازهای خاص شما است. با ما همکاری کنید تا از تجربه حرفه‌ای و تخصصی ما در مسیر موفقیت دیجیتال بهره‌مند شوید.",
  },
];

const skills = [
  { name: "React", level: "پیشرفته" },
  { name: "Django", level: "پیشرفته" },
  { name: "UI/UX Design", level: "متوسط" },
  { name: "SEO", level: "پیشرفته" },
  { name: "JavaScript", level: "پیشرفته" },
  { name: "CSS", level: "پیشرفته" },
];

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.title}>درباره ما</h2>
      <div className={styles.items}>
        {aboutItems.map((item, index) => (
          <div
            key={index}
            className={`${styles.item} ${
              index % 2 === 0 ? styles.normal : styles.reversed
            }`}
          >
            <div className={styles.imageContainer}>
              <img
                src={item.image}
                alt={`Team ${index + 1}`}
                className={styles.image}
              />
            </div>
            <div className={styles.textContainer}>
              <p className={styles.description}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <section id="skills" className={styles.skills}>
        <h2 className={styles.title}>مهارت‌های ما</h2>
        <ul className={styles.skillsList}>
          {skills.map((skill, index) => (
            <li key={index} className={styles.skill}>
              <span className={styles.skillName}>{skill.name}</span>
              <span className={styles.skillLevel}>{skill.level}</span>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default About;
