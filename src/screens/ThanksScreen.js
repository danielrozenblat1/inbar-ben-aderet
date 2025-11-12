import Shorts from "../campainerCopy/components/shorts/Shorts"
import NewBox from "../components/newBox/NewBox"
import styles from "./ThanksScreen.module.css"

const ThanksScreen=()=>{


return <>
ֿ<div className={styles.background}>
<div className={styles.title}><span className={styles.highlightedText}>תודה!</span></div>
<div className={styles.description}>קיבלנו את הפרטים שלך וביומיים הקרובים ניצור איתך קשר</div>
<div className={styles.title}>עד שנדבר.. כמה מילים ממני:</div>

<Shorts/>

</div>

</>

}
export default ThanksScreen