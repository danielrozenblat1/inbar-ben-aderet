import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import { Player } from '@lordicon/react';
import styles from './Steps.module.css';
import magnet from "../../../icons/wired-outline-1027-marketing-campaign-hover-jump.json";

import business from "../../../icons/wired-outline-2467-brain-mental-calm-hover-pinch.json"
import acne from "../../../icons/wired-outline-1582-aroma-spa-hover-pinch (3).json"

const Steps = () => {
  const playerRef1 = useRef(null);
  const playerRef2 = useRef(null);
  const playerRef3 = useRef(null);
  const playerRef4 = useRef(null);

const stepsData = [
  {
    id: 1,
    icon: business,
    playerRef: playerRef1,
    title: "שלב ראשון: המיינדסט של בעלת עסק",
    description: "במקום לחשוב \"מי אני שאבקש 300 שקל\" - את תחשבי \"איך אני מספקת ערך של 3000 שקל\". אני אלמד אותך איך לעבור מקוסמטיקאית מבוישת לאשת עסק בטוחה. תקבלי את 14 השאלות המדוייקות שיעזרו לך לבנות חזון ברור לעסק שלך ותדעי בדיוק איך להוביל כל שיחה עם לקוחה למכירה."
  },
  {
    id: 2,
    icon: acne,
    playerRef: playerRef2,
    title: "שלב שני: המקצועיות המדוייקת",
    description: "במקום לפחד מכל לקוחה עם עור רגיש - את תדעי בדיוק איך לאבחן ומה לעשות. תקבלי את הפרוטוקולים המדוייקים לכל סוג עור, תלמדי איך לטפל בנשים בהריון ובחולות סרטן, ותתרגלי טכניקות ניקוז מעשיות. כל זה כדי שתרגישי בטוחה עם כל לקוחה שנכנסת אלייך. את לא תקבלי אצלי דברים תיאורטיים שעובדים \"בכיתת הלימוד\". את תקבלי דברים מהשטח, מהיום יום עצמו וממה שעובד."
  },
  {
    id: 3,
    icon: magnet,
    playerRef: playerRef3,
    title: "שלב שלישי: השיווק והמכירות שמביאים לקוחות",
    description: "במקום לחכות שמישהי תתקשר - את תדעי איך לבנות קהילה שקונה ממך שוב ושוב. תקבלי את התסריטים המדוייקים לשיחות טלפון, תלמדי איך לסגור סדרות בצורה שירותית (כדי שהלקוחה תרגיש שאת עוזרת לה ולא מוכרת), ותדעי בדיוק איזה מכשירים וחומרים שווה לקנות ואיזה לא."
  }
];

  useEffect(() => {
    // הפעלת כל האנימציות בהתחלה
    playerRef1?.current?.playFromBeginning();
    playerRef2?.current?.playFromBeginning();
    playerRef3?.current?.playFromBeginning();
    playerRef4?.current?.playFromBeginning();

    ScrollReveal().reveal(`.${styles.stepTitle}`, {
      distance: '40px',
      duration: 800,
      delay: 200,
      origin: 'bottom',
      easing: 'ease-out',
      interval: 100,
      reset: false,
      viewFactor: 0.3
    });
        ScrollReveal().reveal(`.${styles.stepDescription}`, {
      distance: '40px',
      duration: 800,
      delay: 200,
      origin: 'bottom',
      easing: 'ease-out',
      interval: 100,
      reset: false,
      viewFactor: 0.3
    });
            ScrollReveal().reveal(`.${styles.iconContainer}`, {
      distance: '40px',
      duration: 800,
      delay: 200,
      origin: 'bottom',
      easing: 'ease-out',
      interval: 100,
      reset: false,
      viewFactor: 0.3
    });
  }, []);

  const handleComplete = (ref) => {
    setTimeout(() => {
      ref?.current?.playFromBeginning();
    }, 1000);
  };

  return (
    <div className={styles.stepsContainer}>
      {stepsData.map((step, index) => (
        <div key={step.id} className={styles.stepWrapper}>
          <div className={`${styles.stepItem} step-${step.id}`}>
            <div className={styles.iconContainer}>
              <Player 
                icon={step.icon} 
                ref={step.playerRef} 
                size="100%" 
                onComplete={() => handleComplete(step.playerRef)}
              />
            </div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDescription}>{step.description}</p>
          </div>
          
          {index < stepsData.length - 1 && (
            <div className={styles.connector}></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Steps;