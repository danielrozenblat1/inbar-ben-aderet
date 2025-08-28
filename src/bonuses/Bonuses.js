/* ======== עדכון לקומפוננט React ======== */

import React, { useRef, useEffect } from 'react';
import { Player } from '@lordicon/react';
import ScrollReveal from 'scrollreveal';
import styles from './Bonuses.module.css';
import money from "../icons/wired-outline-1027-marketing-campaign-hover-jump.json"
import nlp from "../icons/wired-outline-2467-brain-mental-calm-hover-pinch.json"
import practice from "../icons/wired-outline-1001-shop-scanner-hover-pinch (1).json"
import shake from "../icons/wired-outline-456-handshake-deal-hover-pinch (1) copy.json"
import transaction from "../icons/wired-outline-645-people-handshake-transaction-hover-pinch (4).json"
const Bonus = () => {
  const playerRef1 = useRef(null);
  const playerRef2 = useRef(null);
  const playerRef3 = useRef(null);
  const playerRef4 = useRef(null);

  const handleComplete = () => {
    setTimeout(() => {
      playerRef1?.current?.playFromBeginning();
      playerRef2?.current?.playFromBeginning();
      playerRef3?.current?.playFromBeginning();
      playerRef4?.current?.playFromBeginning();
    }, 2500);
  };

  useEffect(() => {
    playerRef1?.current?.playFromBeginning();
    playerRef2?.current?.playFromBeginning();
    playerRef3?.current?.playFromBeginning();
    playerRef4?.current?.playFromBeginning();
  }, []);

  useEffect(() => {
    ScrollReveal().reveal(`.${styles.bonusItem}`, {
      duration: 1000,
      distance: "50px",
      origin: "bottom",
      easing: "ease-out",
      reset: false,
      viewFactor: 0.2,
      interval: 200,
      delay: 100,
      scale: 1,
    });
  }, []);

  const bonusItems = [
    {
      icon: shake,
      title: "ליווי גם אחרי הקורס",
      description: "גם אחרי שהקורס נגמר אני כאן! לכל שאלה,חשש והתייעצות! יש לך את הגב שלי והמענה שלי בכל רגע הכי קטן של בלבול.",
      ref: playerRef1
    },
    {
      icon: practice,
      title: "זמן לתרגול מעשי",
      description: "תיאוריה זה מאוד חשוב אבל זה לא נגמר רק בה, בקורס את מתרגלת בזמן אמת, מתנסה מול לקוחות ולומדת איך לפעול בביטחון גם בסיטואציות מורכבות.",
      ref: playerRef2
    },
    {
      icon: nlp,
      title: "שילוב כלי NLP לטיפולים",
      description: "אחרי שעברתי עשרות הכשרות גם בתחום הNLP אני יכולה לומר שהנפש היא חד משמעית משפיעה על ההצלחה שלנו וגם עליה אנחנו נעבוד!",
      ref: playerRef3
    },
    {
      icon: transaction,
      title: "יחס אישי",
      description: "אני מקפידה לעבוד בקבוצות קטנות כדי לתת לך יחס אישי אמיתי. כל שאלה שלך מקבלת מענה, וכל אחת מקבלת את תשומת הלב שמגיעה לה.",
      ref: playerRef4
    }
  ];

  return (
    <div className={styles.container}>
             <div className={styles.explain}>חשוב לי שתדעי</div>
      <div className={styles.title}>שכל תלמידה שלי מקבלת:</div>
      
      <div className={styles.bonusGrid}>
        {bonusItems.map((item, index) => (
          <div key={index} className={styles.bonusItem}>
            <div className={styles.iconWrapper}>
              <div className={styles.iconContainer}>
                <Player 
                  icon={item.icon} 
                  ref={item.ref} 
                  size="100%" 
                  onComplete={handleComplete}
                />
              </div>
            </div>
            
            <h3 className={styles.bonusTitle}>
              {item.title}
            </h3>
            
            <p className={styles.bonusDescription}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bonus;
