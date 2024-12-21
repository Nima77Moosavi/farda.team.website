import React, { useEffect, useState } from "react";
import styles from "./Particles.module.css";

const Particles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newParticle = {
        id: `${Date.now()}-${Math.random()}`, // Unique ID for each particle
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 10 + 5, // Random size between 5 and 15
        opacity: 1, // Initial opacity
      };

      setParticles((prevParticles) => [...prevParticles, newParticle]);

      // Remove particles after 1 second
      setTimeout(() => {
        setParticles((prevParticles) =>
          prevParticles.filter((p) => p.id !== newParticle.id)
        );
      }, 1000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className={styles.particlesContainer}>
      {particles.map((particle) => (
        <div
          key={particle.id} // Unique key for each particle
          className={styles.particle}
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Particles;
