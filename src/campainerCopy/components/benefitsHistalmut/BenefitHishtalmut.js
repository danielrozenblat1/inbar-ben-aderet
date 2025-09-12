import React, { useEffect, useRef } from 'react';
import needle from "../../../icons/wired-outline-955-demand-morph-coin.json";
import technic from "../../../icons/wired-outline-1276-acne-herpes-hover-pinch (2).json";
import shake from "../../../icons/wired-outline-1027-marketing-campaign-hover-jump.json";
import work from "../../../icons/wired-outline-2510-money-safety-hover-slide.json";
import laser from "../../../icons/wired-outline-1001-shop-scanner-hover-pinch (2).json"
import free from "../../../icons/wired-outline-3141-female-jumping-hover-jump.json"
import deal from "../../../icons/wired-outline-2082-bribery-hover-pinch.json"
import family from "../../../icons/wired-outline-635-family-hover-pinch (1).json"
import styles from './BenefitHishtalmut.module.css';
import ScrollReveal from 'scrollreveal';
import { Player } from "@lordicon/react";

const VerticalIconCard = ({ text, icon }) => {
  const playerRef1 = useRef(null);

  const handleComplete = () => {
    setTimeout(() => {
      playerRef1?.current?.playFromBeginning();
    }, 2500);
  };

  useEffect(() => {
    playerRef1?.current?.playFromBeginning();
  }, []);

  useEffect(() => {
    ScrollReveal().reveal(`.${styles.text}`, {
      duration: 1000,
      distance: "40px",
      origin: "bottom",
      easing: "ease-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });
  }, []);

  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <Player
          icon={icon}
          ref={playerRef1}
          size="100%"
          onComplete={handleComplete}
        />
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

// יתרונות השתלמות המיקרובליידינג של רחלי מנקודת מבט התלמידה
const BenefitsContainer = () => {
  const benefits = [
    {
      icon: needle,
      text: "היומן שלך מלא בסדרות טיפולים ששולמו מראש והלקוחות ממתינות בשמחה"
    },
    {
      icon: deal,
      text: "את סוגרת עסקאות בביטחון ויודעת לענות לכל שאלה בלי לחץ"
    },
    {
      icon: work,
      text: "ההכנסה החודשית יציבה וגבוהה מלקוחות שחוזרות אלייך באופן קבוע"
    },
    {
      icon: family,
      text: "את מסיימת לעבוד מוקדם יותר ומקדישה זמן למשפחה ולחיים האישיים"
    },
    {
      icon: laser,
      text: "את יודעת בדיוק איזה ציוד ומכשור שווה את ההשקעה וחוסכת כסף יקר"
    },
      {
      icon: free,
      text: "את סוף סוף נהנת מהתשוקה שלך ומהעסק שחלמת שיהיה לך"
    }
  ];

  return (
    <div className={styles.container}>
      {benefits.map((benefit, index) => (
        <VerticalIconCard
          key={index}
          text={benefit.text}
          icon={benefit.icon}
        />
      ))}
    </div>
  );
};

export default VerticalIconCard;
export { BenefitsContainer };
