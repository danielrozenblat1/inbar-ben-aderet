import { useState } from "react";
import EligibilitySection from "../whoFits/WhoFits"
import styles from "./ThirdScreen.module.css"
import Popped from "../components/poppedUpWindow/Popped";
const ThirdScreen=()=>{
      const [isPoppedOpen, setIsPoppedOpen] = useState(false);
        const handleButtonClick = () => {
    setIsPoppedOpen(true);
  };
return <>

<div className={styles.title}>אז איך תדעי אם הקורס שלי מתאים לך..</div>
  <EligibilitySection/>
  <div className={styles.title}>למה דווקא עכשיו?</div>
<div className={styles.description}>אני אגיד לך משהו שאולי לא תרצי לשמוע - כל יום שאת מחכה, זה עוד יום שאת מפסידה כסף. לא רק שאת לא מרוויחה - את גם מוציאה על דברים מיותרים, מפספסת לקוחות ומאבדת ביטחון.</div>
<div className={styles.description}>בעוד 6 חודשים את יכולה להסתכל אחורה על התקופה הזו ולומר "איך בכלל הייתי שם?" או להמשיך להיות באותו מקום מתסכל.</div>
<div className={styles.title}>*והנה האמת הקשה*</div>
<div className={styles.description}>שוק הקוסמטיקאיות רק הולך ונהייה תחרותי יותר. כל חודש נפתחות עוד קליניקות, מגיעות עוד קוסמטיקאיות למקצוע. מי שלא יודעת להביא עבודה ולהביא תוצאות פגז - תישאר מאחור.</div>
<div className={styles.description}>
  <strong>אבל יש גם חדשות טובות</strong> - נשים רק הולכות ומשקיעות יותר בטיפוחי יופי. 
  השוק גדל, <strong>אבל רק מי שיודעת איך לעבוד נכון תרוויח מזה.</strong>
</div>
<div className={styles.title}>הזמן הכי נכון לעשות שינוי היה אתמול. הזמן הבא הכי נכון הוא עכשיו:</div>
<div className={styles.description}>עכשיו השאלה היחידה היא: את מוכנה להפוך את החלום לעסק מצליח?</div>
     <div className={styles.ctaButtonWrapper}>
        <button onClick={handleButtonClick} className={styles.ctaButton}>
כן! אני רוצה לדבר עם עינבר עכשיו
        </button>
      </div>
      <div className={styles.description}>*מספר המקומות למחזור הקרוב מוגבל*</div>
      {isPoppedOpen && <Popped onClose={() => setIsPoppedOpen(false)} />}
</>
}
export default ThirdScreen