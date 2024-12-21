import React, { useState } from "react";
import styles from "./Slider.module.css";
import teamImage1 from "../../assets/team1.jpg"; // Replace with your images
import teamImage2 from "../../assets/team2.png";
import teamImage3 from "../../assets/team3.jpeg";

const slides = [
  {
    id: 1,
    image: teamImage1,
    description:
      "ما تیمی از طراحان و توسعه‌دهندگان وب هستیم که با خلاقیت پروژه‌های دیجیتال را ارائه می‌دهیم.",
  },
  {
    id: 2,
    image: teamImage2,
    description:
      "تخصص ما طراحی و اجرای پروژه‌های مدرن و کاربردی برای کسب‌وکارهای شما است.",
  },
  {
    id: 3,
    image: teamImage3,
    description:
      "ما بهترین راه‌حل‌های دیجیتال را برای موفقیت شما ارائه می‌دهیم.",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(""); // 'next' or 'prev'

  const nextSlide = () => {
    setDirection("next");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection("prev");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.slider}>
      <button className={styles.prevButton} onClick={prevSlide}>
        &#8592;
      </button>
      <div className={styles.slideContainer}>
        {slides.map((slide, index) => {
          let slideClass = "";

          if (index === currentIndex) {
            slideClass =
              direction === "next" ? styles.slideOutLeft : styles.slideOutRight;
          } else if (
            index === (currentIndex + 1) % slides.length &&
            direction === "next"
          ) {
            slideClass = styles.slideInRight;
          } else if (
            index === (currentIndex - 1 + slides.length) % slides.length &&
            direction === "prev"
          ) {
            slideClass = styles.slideInLeft;
          }

          return (
            <div
              key={`slider-${slide.id}`}
              className={`${styles.slide} ${slideClass}`}
            >
              <div className={styles.text}>
                <p>{slide.description}</p>
              </div>
              <div className={styles.imageContainer}>
                <img src={slide.image} alt="Slide" className={styles.image} />
              </div>
            </div>
          );
        })}
      </div>
      <button className={styles.nextButton} onClick={nextSlide}>
        &#8594;
      </button>
    </div>
  );
};

export default Slider;
