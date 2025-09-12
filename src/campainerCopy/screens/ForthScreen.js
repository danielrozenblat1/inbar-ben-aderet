// import Bonus from "../bonuses/Bonuses"
import SyllabusContainer from "../components/Course/Course"
import { Users, Heart, Star } from "lucide-react"
import styles from "./ForthScreen.module.css"
import Popped from '../components/poppedUpWindow/Popped';
import { useState } from "react";
import Steps from "../components/steps/Steps";
const ForthScreen = () => {
      const [isPoppedOpen, setIsPoppedOpen] = useState(false);
        const handleButtonClick = () => {
    setIsPoppedOpen(true);
  };
  return <>
    <div className={styles.background}>
      {/* <div className={styles.title}>אבל יותר מהכל</div> */}
      <div className={styles.description}>
אחרי 26 שנים בתחום הקוסמטיקה ואלפי לקוחות שעברו דרכי, גיליתי שיש 3 דברים שמפרידים בין קוסמטיקאית שמתקיימת לבין בעלת עסק שמשגשגת
      </div>
   <Steps/>
         <div className={styles.title}>
התוצאה:
      </div>
         <div className={styles.description}>
בתוך 3 מפגשים בלבד, תעברי מלהיות קוסמטיקאית שמחפשת לקוחות
 לכיוון בעלת עסק שלקוחות רוצות להיכנס אלייה. <br/> <strong> עם יומן מלא, הכנסה יציבה וביטחון שלא הרגשת מעולם.</strong>
      </div>
              <div className={styles.title}>
והכי חשוב - התמיכה לא נגמרת בסיום הקורס:
      </div>
        <div className={styles.description}>
כל תלמידה שלי נשארת בקבוצת הווטסאפ הפרטית שלי. כל שאלה, כל ספק, כל הצלחה קטנה - אני שם. כי הצלחה אמיתית זה לא רק 4 מפגשים, זה לדעת שיש לך מישהי שתמיד תתמוך בך בדרך.
      </div>
               <div className={styles.title}>
מה תקבלי - מה הערך המלא שמחכה לך:
      </div>
      {/* שורת התגיות החדשה */}
      <div className={styles.tagsRow}>
        <div className={styles.tag}>
          <Users className={styles.tagIcon} size={20} />
          <div className={styles.tagText}>3 מפגשים</div>
        </div>
        <div className={styles.tag}>
          <Heart className={styles.tagIcon} size={20} />
          <div className={styles.tagText}>יחס אישי</div>
        </div>
        <div className={styles.tag}>
          <Star className={styles.tagIcon} size={20} />
          <div className={styles.tagText}>בהדרכה אישית של עינבר</div>
        </div>
      </div>
   
      <SyllabusContainer/>
      {/* <Bonus/> */}
      {/* <div className={styles.title}><span className={styles.highlightedText}>ובנימה אישית</span></div>
          <div className={styles.description}>
   הקורס הזה הולך לעשות לך מהפך בעסק! לקצר לך את זמני הלמידה, לחסוך לך עשרות ומאות אלפי שקלים של נסיונות ותהיות, לתת לך כלים שיחסכו לך שנים של למידה עצמית ולהביא אותך למצב 
      </div>
        <div className={styles.title}><span className={styles.highlightedText}>שאת נהנת ומתפרנסת מהעסק שלך!</span></div>
        <div className={styles.center}>
              <button onClick={handleButtonClick} className={styles.ctaButton}>
        תלחצי כאן ואנחנו מדברות
            </button>
            </div> */}
    </div>
        {isPoppedOpen && <Popped onClose={() => setIsPoppedOpen(false)} />}
  </>
}

export default ForthScreen