import React, { useState } from "react";
import { Link } from "react-scroll";
import styles from "./Header.module.css";

const Header = () => {
  const [activeLink, setActiveLink] = useState("hero");

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>تیم فردا</div>
        <nav className={styles.nav}>
          {[
            { id: "hero", label: "خانه" },
            { id: "about", label: "درباره ما" },
            { id: "portfolio", label: "نمونه کارها" },
            { id: "plans", label: "سرویس های ما" },
            { id: "contact", label: "تماس با ما" },
          ].map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth={true}
              duration={500}
              offset={-80}
              className={`${styles.navLink} ${
                activeLink === link.id ? styles.active : ""
              }`}
              onSetActive={() => handleSetActive(link.id)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
