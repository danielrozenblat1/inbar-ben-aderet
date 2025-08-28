import NewBox from "../components/newBox/NewBox"
import styles from "./SecondScreen.module.css"
import money from "../icons/wired-outline-298-coins-loop-spin (4).json"
import tube from "../icons/wired-outline-1558-shaving-foam-hover-pinch (2).json"
import clients from "../icons/wired-outline-639-line-queue-hover-pinch.json"
import { BenefitsContainer } from "../components/benefitsHistalmut/BenefitHishtalmut"
const SecondScreen=()=>{


return <>
ֿ<div className={styles.background}>
<div className={styles.title}><span className={styles.highlightedText}>בואי נדבר על זה..</span></div>
<div className={styles.description}>השקעת עשרות אלפי שקלים, למדת קשה במשך שנה וחצי (אולי אפילו יותר) ויצאת עם תעודה ביד והמון מוטיבציה להצליח בתחום</div>
<div className={styles.title}>אבל מהר מאוד ההתלהבות התחלפה בתסכול</div>
<div className={styles.row}>
  <NewBox
    title="את מוציאה המון ועוד לא הכנסת שקל"
    description="כל יום את שומעת על עוד מכשיר, עוד חומר, עוד טיפול שחייבים. את קונה, משקיעה, ואז מגלה שזה לא מה שאת באמת צריכה – וההוצאות עולות על ההכנסות"
    icon={money}
  />
  <NewBox
    title="את לא מרגישה בטוחה בטיפולים מסובכים"
    description="לקוחה עם עור רגיש מגיעה – ואת נלחצת. לא למדת להתמודד עם זה בקורס, את מפחדת לטעות, והבטחון.. מתחיל לרדת עם הזמן"
    icon={tube}
  />
  <NewBox
    title="הלקוחות לא מגיעים אלייך באופן יציב"
    description="את מעלה פוסט פה ושם, שולחת הודעות בקבוצות, מחכה שמישהי תשלח הודעה – וזה לא קורה. אין לך שיטה מסודרת לשיווק, לסגירת סדרות או לייצר הכנסה קבועה מהקליניקה"
    icon={clients}
  />
</div>
<div className={styles.description}>ואני מבינה את התסכול שאת נמצאת בו היום</div>
<div className={styles.title}><span className={styles.highlightedText}>כי הייתי בדיוק בנקודה שאת נמצאת בה</span></div>
<div className={styles.description}>ואחרי שב26 שנים האחרונות למדתי הכל על בשרי</div>
<div className={styles.title}>אני יודעת איך להוביל אותך למצב ש..</div>
<BenefitsContainer/>
<div className={styles.description}>אבל שנייה לפני שנדבר על הכל</div>

</div>

</>

}
export default SecondScreen