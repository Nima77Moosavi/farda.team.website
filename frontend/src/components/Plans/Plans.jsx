import React from "react";
import styles from "./Plans.module.css";

const plans = [
  {
    title: "بسته پایه",
    price: "5,000,000 تومان",
    features: [
      "طراحی وب‌سایت واکنش‌گرا",
      "دامنه رایگان یک‌ساله",
      "پشتیبانی ۳ ماهه",
    ],
    buttonText: "انتخاب بسته پایه",
  },
  {
    title: "بسته استاندارد",
    price: "10,000,000 تومان",
    features: [
      "طراحی وب‌سایت واکنش‌گرا",
      "دامنه و هاست رایگان یک‌ساله",
      "پشتیبانی ۶ ماهه",
      "طراحی UX/UI اختصاصی",
    ],
    buttonText: "انتخاب بسته استاندارد",
  },
  {
    title: "بسته حرفه‌ای",
    price: "20,000,000 تومان",
    features: [
      "طراحی وب‌سایت واکنش‌گرا",
      "دامنه و هاست رایگان یک‌ساله",
      "پشتیبانی ۱۲ ماهه",
      "طراحی UX/UI پیشرفته",
      "ویژگی‌های سفارشی",
    ],
    buttonText: "انتخاب بسته حرفه‌ای",
  },
];

const Plans = () => {
  return (
    <section id="plans" className={styles.plans}>
      <h2 className={styles.title}>خدمات و بسته‌ها</h2>
      <div className={styles.cards}>
        {plans.map((plan, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.planTitle}>{plan.title}</h3>
            <p className={styles.planPrice}>{plan.price}</p>
            <ul className={styles.features}>
              {plan.features.map((feature, i) => (
                <li key={i} className={styles.feature}>
                  {feature}
                </li>
              ))}
            </ul>
            <button className={styles.button}>{plan.buttonText}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Plans;
