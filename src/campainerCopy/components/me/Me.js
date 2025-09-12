// AboutMe.jsx
import React, { useEffect, useRef, useState } from 'react';
import styles from './Me.module.css';
import inbar from "../../images/עינבר ללא רקע.png";
import ScrollReveal from 'scrollreveal';
import Popped from '../poppedUpWindow/Popped';

const AboutMe = () => {
  const containerRef = useRef(null);
  const [isPoppedOpen, setIsPoppedOpen] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      const sr = ScrollReveal({
        duration: 1000,
        delay: 150,
        opacity: 0,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        container: window.document.documentElement,
        mobile: true,
        reset: false,
        viewFactor: 0.2
      });

      sr.reveal(`.${styles.revealItem}`, {
        origin: 'bottom',
        distance: '20px',
        interval: 100
      });
    }

    return () => {
      ScrollReveal().destroy();
    };
  }, []);

  const handlePoppedOpen = () => {
    setIsPoppedOpen(true);
  };

  return (
    <>
      <section ref={containerRef} className={styles.section} id="מי אני">
        <div className={styles.container}>
          <div className={`${styles.imageWrapper} ${styles.revealItem}`}>
            <img src={inbar} alt="עינבר בן אדרת" className={styles.image} />
          </div>

          <div className={`${styles.content} ${styles.revealItem}`}>
            <h2 className={styles.mainTitle}>נעים להכיר, עינבר בן אדרת</h2>

            <div className={styles.quoteContainer}>
              <p className={styles.quote}>
                "אמרו לי כל החיים שלא יצא ממני כלום. היום אני מנהלת קליניקה עם אלפי לקוחות, צוות מקצועי,ליין מוצרי קוסמטיקה משלי ומעבירה את הידע שלי הלאה."
              </p>
            </div>

    <div className={styles.textBlock}>
  <p className={styles.paragraph}>
    כשסיימתי את הלימודים והתחלתי לעבוד כקוסמטיקאית, חשבתי שזהו, הרגע שלי הגיע! למדתי, השקעתי, קניתי ציוד, השכרתי קליניקה, הבאתי מוצרים יוקרתיים - הייתי בטוחה שהלקוחות יגיעו בערימות.
  </p>

  <div className={styles.divider}></div>

  <p className={styles.paragraph}>
    אבל המציאות הייתה אחרת. יומן ריק, הוצאות ענקיות, ופחד. כל לקוחה שנכנסה, הלב שלי קפץ. לא הרגשתי בטוחה במאה אחוז בטיפול, לא ידעתי איך לגבות את המחיר שמגיע לי. ומעל הכל - כל יום מחדש חיכיתי לטלפון שיצלצל. והוא לא צלצל מספיק.
  </p>

  <div className={styles.divider}></div>

  <p className={styles.paragraph}>
    מצאתי את עצמי שוקעת בלופים של רכישות. כל מכשיר חדש שהבטיח להציל את העסק - קניתי. כל קרם שהציגו לי כ"Game changer" - הזמנתי. עד שהבנתי שמה שחסר לי זה לא עוד מוצר. זה ביטחון. זה דיוק. זה לדעת מה באמת חשוב ומה מבזבז זמן וכסף.
  </p>

  <div className={styles.divider}></div>

  <p className={styles.paragraph}>
    לקח לי כמה שנים לפצח את זה, ואפשר לומר שלמדתי הכל על בשרי. בניתי שיטות שיווק, למדתי למכור בבטחון, השלמתי עם הזמן את הידע המקצועי שלי והתחלתי לנתח כל לקוחה שנכנסת אליי ולהתאים לה בדיוק מה שיביא לה תוצאה. ומשם - הדברים התחילו לזוז.
  </p>

  <div className={styles.divider}></div>

  <p className={styles.finalText}>
    ופה נפל לי האסימון - אף אחד לא מלמד את הדברים האלה. לא מדברים על זה בכלל.
    אז החלטתי לרכז את כל הקשיים,האתגרים והתובנות שצברתי בדרך לקורס אחד ממוקד ופרקטי שמראה איך לנהל קליניקה מצליחה, איך לבחור ציוד בלי למכור כליה בדרך.. ואיך לא לרעוד בכל פעם שמגיעה לקוחה.
  </p>
  </div>

            <div className={styles.buttonContainer}>
              <button className={styles.ctaButton} onClick={handlePoppedOpen}>
                <span className={styles.buttonIcon}>👇🏻</span>
               והדרך לשם מתחילה בלחיצה כאן
              </button>
            </div>
          </div>
        </div>
      </section>

      {isPoppedOpen && <Popped onClose={() => setIsPoppedOpen(false)} />}
    </>
  );
};

export default AboutMe;
