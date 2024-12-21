import React from "react";
import styles from "./Portfolio.module.css";

const projects = [
  { title: "پروژه ۱", description: "توضیح کوتاه در مورد پروژه ۱" },
  { title: "پروژه ۲", description: "توضیح کوتاه در مورد پروژه ۲" },
  { title: "پروژه ۳", description: "توضیح کوتاه در مورد پروژه ۳" },
  { title: "پروژه ۴", description: "توضیح کوتاه در مورد پروژه ۴" },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <h2 className={styles.title}>نمونه کارهای ما</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.cardTitle}>{project.title}</h3>
            <p className={styles.cardDescription}>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
