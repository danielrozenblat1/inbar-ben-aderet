import React, { useState } from 'react';
import styles from './WhoFits.module.css';
import { FaTimes, FaStar, FaUserShield, FaRocket, FaHandshake } from 'react-icons/fa';
import Popped from '../components/poppedUpWindow/Popped';

const EligibilitySection = () => {
  const [isPoppedOpen, setIsPoppedOpen] = useState(false);

  const handleButtonClick = () => {
    setIsPoppedOpen(true);
  };

const eligibleList = [
  {
    text: "סיימת קורס קוסמטיקה ואת מרגישה שחסרים לך כלים אמיתיים לעבודה בשטח",
    icon: <FaStar className={styles.icon} />
  },
  {
    text: "יש לך רצון להרוויח מהתחום הזה כמו שצריך ולא רק 'לטפל על הדרך'",
    icon: <FaUserShield className={styles.icon} />
  },
  {
    text: "את מתבלבלת מההמלצות ברשת ולא בטוחה איפה נכון להשקיע - מכשירים, חומרים או שיווק",
    icon: <FaRocket className={styles.icon} />
  },
  {
    text: "את רוצה להבין איך לסגור סדרות ולא להסתמך כל חודש על טיפולים חד פעמיים",
    icon: <FaHandshake className={styles.icon} />
  },
  {
    text: "את פתוחה ללמוד, לתרגל ולהתקדם - גם ברמה המקצועית וגם ברמה העסקית והאישית",
    icon: <FaRocket className={styles.icon} />
  }
];

const nonEligibleList = [
  {
    text: "את לא מתכוונת ליישם בפועל - רק לשמוע ולהמשיך כרגיל",
    icon: <FaTimes className={styles.iconNegative} />
  },
  {
    text: " את מחפשת פתרון קסם בלי תהליך של למידה ותרגול",
    icon: <FaTimes className={styles.iconNegative} />
  },
  {
    text: "את לא מוכנה להסתכל לעסק שלך בעיניים ולבחון מה באמת מעכב אותך",
    icon: <FaTimes className={styles.iconNegative} />
  },
 
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
