import NewBox from "../../components/newBox/NewBox"
import styles from "./SecondScreen.module.css"
import question from "../../icons/wired-outline-424-question-bubble-hover-wiggle (2).json"
import tube from "../../icons/wired-outline-1558-shaving-foam-hover-pinch (2).json"
import clients from "../../icons/wired-outline-639-line-queue-hover-pinch.json"
import { BenefitsContainer } from "../../campainerCopy/components/benefitsHistalmut/BenefitHishtalmut"
const SecondScreen=()=>{


return <>
ֿ<div className={styles.background}>
<div className={styles.title}><span className={styles.highlightedText}>את מכירה את התחושה הזו, נכון?</span></div>
<div className={styles.description}>את קמה בבוקר, פותחת את היומן - ושוב הוא ריק. השקעת עשרות אלפי שקלים על קורסים יקרים, על הקליניקה, על ציוד יוקרתי שהבטיחו לך שיהפוך אותך לקוסמטיקאית מוכרת... ובסוף את יושבת לבד בקליניקה ומחכה שהטלפון יצלצל.</div>
<div className={styles.description}><strong>וכשסוף סוף מגיעה לקוחה - הבטן מתהפכת לך כשעולות המחשבות:</strong></div>

<div className={styles.row}>

<NewBox title="מה אם יש לה אלרגיה?" description="הפחד הכי גדול שלך הוא שתגרמי נזק ללקוחה. את חוששת מתגובות אלרגיות, מגירוי העור, מכוויות או מכל תוצאה לא רצויה שתכול אותך מבפנים ותהרוס את המוניטין שלך. הדאגה הזאת גורמת לך לפעמים להיות זהירה מדי או להימנע מטיפולים מסוימים." icon={question} />

<NewBox title="מה אם הטיפול לא יעבוד?" description="את מפחדת שהלקוחה תצא אכזבה מהטיפול. שהיא לא תראה תוצאות, שהיא תרגיש שזרקה כסף לאשפה ותספר לכולם שאת לא מקצועית. הפחד הזה גורם לך להבטיח פחות ממה שאת יכולה לתת ולהיות לא בטוחה במחירים שלך." icon={question} />

<NewBox title="מה אם היא תשאל שאלה שאין לך מושג איך לענות עליה?" description="הרגע הכי מביך עבורך הוא כשלקוחה שואלת שאלה מקצועית ואת לא יודעת את התשובה. את מפחדת להיראות לא מקצועית, לא מנוסה מספיק או לא מוכנה. זה גורם לך להרגיש חסרת ביטחון ולפעמים להימנע מלקוחות שנראות יותר 'מתקדמות' או תובעניות." icon={question} />

</div>

<div className={styles.description}>ואז את רואה עוד פוסט על מכשיר חדש שכולן קונות, עוד קרם מהפכני שחייב להיות בקליניקה... ואת קונה שוב. כי אולי הפעם זה יהיה הדבר שישנה הכל. אבל עמוק בפנים את יודעת <strong>זה לא המכשיר שחסר לך - זה הביטחון</strong></div>
<div className={styles.title}>זה לדעת בדיוק מה לעשות ואיך להרוויח מזה.</div>
<div className={styles.description}>כל יום את שואלת את עצמך: "מתי זה הולך להשתנות? מתי אני אהפוך לקוסמטיקאית מצליחה כמו שחלמתי?"</div>
<div className={styles.title}>דמייני לעצמך את החיים האלה...</div>
<BenefitsContainer/>
<div className={styles.description}>אבל שנייה לפני שנדבר על הכל</div>

</div>

</>

}
export default SecondScreen