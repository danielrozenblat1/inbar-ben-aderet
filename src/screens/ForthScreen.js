import Bonus from "../bonuses/Bonuses"
import SyllabusContainer from "../components/Course/Course"
import { Users, Heart, Star } from "lucide-react"
import styles from "./ForthScreen.module.css"
import Popped from '../components/poppedUpWindow/Popped';
import { useState } from "react";
const ForthScreen = () => {
      const [isPoppedOpen, setIsPoppedOpen] = useState(false);
        const handleButtonClick = () => {
    setIsPoppedOpen(true);
  };
  return <>
    <div className={styles.background}>
      <div className={styles.title}>אבל יותר מהכל</div>
      <div className={styles.description}>
        <strong>ב-26 השנים האחרונות למדתי דבר אחד חשוב - </strong>מה שמפריד בין קוסמטיקאית טובה לבין אשת עסקים מצליחה 
        זה לא רק ידע מקצועי, זה הרבה מעבר, זו הדרך שבה את מנהלת את הקליניקה שלך, זה הביטחון שאת משדרת וזו היכולת להבדיל בין העיקר לטפל. 
        וזה מה שמחכה לך כאן.
      </div>

      {/* שורת התגיות החדשה */}
      <div className={styles.tagsRow}>
        <div className={styles.tag}>
          <Users className={styles.tagIcon} size={20} />
          <div className={styles.tagText}>4 מפגשים</div>
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
      <Bonus/>
      <div className={styles.title}><span className={styles.highlightedText}>ובנימה אישית</span></div>
          <div className={styles.description}>
   הקורס הזה הולך לעשות לך מהפך בעסק! לקצר לך את זמני הלמידה, לחסוך לך עשרות ומאות אלפי שקלים של נסיונות ותהיות, לתת לך כלים שיחסכו לך שנים של למידה עצמית ולהביא אותך למצב 
      </div>
        <div className={styles.title}><span className={styles.highlightedText}>שאת נהנת ומתפרנסת מהעסק שלך!</span></div>
        <div className={styles.center}>
              <button onClick={handleButtonClick} className={styles.ctaButton}>
        תלחצי כאן ואנחנו מדברות
            </button>
            </div>
    </div>
        {isPoppedOpen && <Popped onClose={() => setIsPoppedOpen(false)} />}
  </>
}

export default ForthScreen