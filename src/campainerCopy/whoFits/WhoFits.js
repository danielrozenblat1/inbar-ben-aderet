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
      text: "גם אם את בתחילת הדרך ואין לך אף לקוחה – השיטה מותאמת בדיוק לזה. הקורס נותן לך את כל הכלים לבנות עסק מההתחלה, מהמיינדסט ועד ללקוחה האחרונה. לא צריך ניסיון קודם.",
      icon: <FaStar className={styles.icon} />
    },
    {
      text: "גם אם את כבר שנים בתחום אבל לא מרוויחה מספיק – הבעיה היא לא הידע המקצועי אלא המיינדסט והשיווק. תלמדי לקחת את הניסיון שלך ולהפוך אותו לכסף אמיתי.",
      icon: <FaUserShield className={styles.icon} />
    },
    {
      text: "גם אם את לא טיפוס של מוכרת – תלמדי מכירה שהיא עזרה אמיתית ללקוחה להבין מה היא צריכה ולקבל את הפתרון הנכון, בלי לחץ או דחיפה.",
      icon: <FaRocket className={styles.icon} />
    },
    {
      text: "גם אם אין לך הרבה כסף להשקיע בציוד – תראי איך לבנות עסק מצליח עם המינימום הנדרש ולהימנע מהוצאות מיותרות.",
      icon: <FaHandshake className={styles.icon} />
    },
    {
      text: "גם אם את מפחדת מטכנולוגיה ושיווק דיגיטלי – השיווק כאן פשוט ובסיסי, עובד גם בלי להיות מומחית באינסטגרם או פייסבוק.",
      icon: <FaRocket className={styles.icon} />
    },
    {
      text: "גם אם את גרה במקום קטן – ביישובים קטנים יש פחות תחרות ויותר נאמנות, ותלמדי לנצל את זה לטובתך.",
      icon: <FaStar className={styles.icon} />
    },
    {
      text: "גם אם את עובדת במכון ולא בקליניקה פרטית – תלמדי איך להגדיל הכנסות, לבנות מוניטין ולהתכונן לפתיחת קליניקה משלך.",
      icon: <FaUserShield className={styles.icon} />
    }
  ];

  const nonEligibleList = [
    {
      text: "את לא מתכוונת ליישם בפועל ורק לשמוע בלי שינוי.",
      icon: <FaTimes className={styles.iconNegative} />
    },
    {
      text: "את מחפשת פתרון קסם בלי ללמוד ולתרגל.",
      icon: <FaTimes className={styles.iconNegative} />
    },
    {
      text: "את לא מוכנה לבחון בכנות מה מעכב אותך בעסק.",
      icon: <FaTimes className={styles.iconNegative} />
    },
    {
      text: "את לא פתוחה לדרכים חדשות ושינויים לקידום העסק.",
      icon: <FaTimes className={styles.iconNegative} />
    }
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.glowEffect}></div>

        <div className={styles.sectionWrapper}>
          <div className={styles.section}>
            <h2 className={styles.title}>הקורס מתאים לך:</h2>
            <div className={styles.line}></div>

            <ul className={styles.list}>
              {eligibleList.map((item, index) => (
                <li key={`eligible-${index}`} className={styles.listItem}>
                  <div className={styles.iconWrapper}>{item.icon}</div>
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
                  <div className={styles.iconWrapperNegative}>{item.icon}</div>
                  <p className={styles.itemText}>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.ctaButtonWrapper}>
        <button onClick={handleButtonClick} className={styles.ctaButton}>
          תלחצי כאן ואנחנו מדברות
        </button>
      </div>

      {isPoppedOpen && <Popped onClose={() => setIsPoppedOpen(false)} />}
    </>
  );
};

export default EligibilitySection;
