import React, { useState } from 'react';
import styles from './WhoFits.module.css';
import { FaTimes, FaStar, FaUserShield, FaRocket, FaHandshake } from 'react-icons/fa';
import Popped from '../components/poppedUpWindow/Popped';

const EligibilitySection = () => {
  const [isPoppedOpen, setIsPoppedOpen] = useState(false);

  const handleButtonClick = () => {
    setIsPoppedOpen(true);
  };

  // הקורס מתאים לך אם
  const eligibleList = [
    {
      text: "את בתחילת הדרך ומרגישה אבודה ולא בטוחה איך למלא את הקליניקה בלקוחות משלמים",
      icon: <FaStar className={styles.icon} />
    },
    {
      text: "סיימת קורס קוסמטיקה ואת מבינה שהלימודים נתנו בסיס, אבל לא כלים אמיתיים להתמודדות עם מקרים מורכבים",
      icon: <FaUserShield className={styles.icon} />
    },
    {
      text: "את מרגישה שהוצאות על מכשירים וחומרים לא מבטיחות קליניקה מלאה ורוצה סדר ברור מה כן שווה לקנות",
      icon: <FaRocket className={styles.icon} />
    },
    {
      text: "את רוצה ביטחון להגיד מחיר, לסגור סדרות טיפולים ולבנות תזרים יציב במקום לרדוף אחרי טיפולים חד פעמיים",
      icon: <FaHandshake className={styles.icon} />
    },
    {
      text: "יש לך רצון להתמיד, להשקיע ולעלות שלב מ'קוסמטיקאית עם תעודה' ל'אשת עסקים מצליחה'",
      icon: <FaRocket className={styles.icon} />
    },
  ];

  // הקורס פחות מתאים לך אם
  const nonEligibleList = [
    {
      text: "את מחפשת פתרון קסם מהיר בלי להתאמץ ובלי להשקיע בתרגול",
      icon: <FaTimes className={styles.iconNegative} />
    },
    {
      text: "את לא מוכנה לפתוח את הראש, לעבוד על מיינדסט ולשנות תפיסות ישנות",
      icon: <FaTimes className={styles.iconNegative} />
    },
    {
      text: "את מעדיפה להמשיך להתנסות על לקוחות עם חוסר ביטחון במקום לקבל כלים נכונים",
      icon: <FaTimes className={styles.iconNegative} />
    },
    {
      text: "את לא מוכנה לקחת אחריות עסקית ומעדיפה להישאר עם הוצאות שעולות על ההכנסות",
      icon: <FaTimes className={styles.iconNegative} />
    }
  ];

  return <>
    <div className={styles.container}>
      <div className={styles.glowEffect}></div>
      
      <div className={styles.sectionWrapper}>
        <div className={styles.section}>
          <h2 className={styles.title}>הקורס מתאים לך אם:</h2>
          <div className={styles.line}></div>
          
          <ul className={styles.list}>
            {eligibleList.map((item, index) => (
              <li key={`eligible-${index}`} className={styles.listItem}>
                <div className={styles.iconWrapper}>
                  {item.icon}
                </div>
                <p className={styles.itemText}>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.title}>הקורס פחות מתאים לך אם:</h2>
          <div className={styles.lineNegative}></div>
          
          <ul className={styles.list}>
            {nonEligibleList.map((item, index) => (
              <li key={`non-eligible-${index}`} className={styles.listItemNegative}>
                <div className={styles.iconWrapperNegative}>
                  {item.icon}
                </div>
                <p className={styles.itemText}>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
        
      </div>

      {/* כפתור קריאה לפעולה */}
 


    </div>
   <div className={styles.ctaButtonWrapper}>
  <button onClick={handleButtonClick} className={styles.ctaButton}>
    תלחצי כאן ואנחנו מדברות
  </button>
</div>
      {/* חלון מוקפץ */}
      {isPoppedOpen && <Popped onClose={() => setIsPoppedOpen(false)} />}
</>
};

export default EligibilitySection;
