import React from 'react';
import needle from "../../icons/wired-outline-955-demand-morph-coin.json"
import technic from "../../icons/wired-outline-1276-acne-herpes-hover-pinch (2).json"

import shake from "../../icons/wired-outline-1027-marketing-campaign-hover-jump.json"
import work from "../../icons/wired-outline-2510-money-safety-hover-slide.json"
import styles from './BenefitHishtalmut.module.css';
import ScrollReveal from 'scrollreveal';
import { useEffect,useRef } from 'react';
import {Player} from "@lordicon/react"

const VerticalIconCard = ({ text, icon }) => {

  const handleComplete = () => {
    setTimeout(() => {
      playerRef1?.current?.playFromBeginning();
    }, 2500);
  };
  
  const playerRef1 = useRef(null);
  
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
    text: "הקליניקה שלך מלאה בלקוחות חוזרות ובסדרות ולא תלויה בטיפולים חד פעמיים"
  },
   
    {
      icon: technic,
      text: "את ניגשת לכל טיפול ברוגע, לא משנה מה סוג הטיפול ומה המורכבות שלו"
    },
       {
    icon: work,
    text: "את חוסכת עשרות אלפי שקלים כי את רוכשת רק את הציוד שבאמת צריך ולא נופלת לשיווק אגרסיבי"
  },
      {
    icon: shake,
    text: "את מתנהלת כמו בעלת עסק – יודעת לשווק, למכור ולהוביל את עצמך קדימה בביטחון"
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