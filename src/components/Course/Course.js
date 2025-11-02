import React, { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { 
  Brain, 
  Target, 
  Users, 
  TrendingUp, 
  Eye, 
  Microscope, 
  ShoppingBag, 
  MessageCircle, 
  Award,
  CheckCircle2,
  Star,
  Lightbulb,
  Heart,
  Zap,
  Gem,
  Crown,
  Sparkles,
  BookOpen,
  Rocket,
  Music,
  Compass,
  Briefcase,
  Search,
  FileText,
  DollarSign,
  BarChart
} from 'lucide-react';
import styles from './Course.module.css';
import Popped from '../poppedUpWindow/Popped';

const SyllabusContainer = () => {
  const [isPoppedOpen, setIsPoppedOpen] = useState(false);

  const sessions = [
    {
      id: 1,
      title: "הנחת יסודות: מיינדסט & חזון עסקי",
      duration: "3-4 שעות",
      icon: <Brain />,
      color: "brain",
      topics: [
        { icon: <Music />, text: "פתיחה חווייתית: שיר העצמה 'זה מתחיל בצעד', דמיון מודרך לבניית חזון אישי וקליניקה מצליחה, סבב היכרות והצגה עצמית" },
        { icon: <Brain />, text: "עולם המיינדסט: כיצד פועל המוח, למה המיינדסט קריטי להצלחה, שאלון ממקד מטרה" },
        { icon: <Heart />, text: "כלי NLP ליצירת חיבור עם לקוחות: מהו ראפור, טכניקת הובלה, זיהוי והמרת אמונות מגבילות" },
        { icon: <Eye />, text: "הבסיס למכירה רכה: אבחון העור ככלי מכירה, שאלון לקוח שמעורר כאב ומוביל לתמונת נצחון" }
      ]
    },
    {
      id: 2,
      title: "העור במרכז: פתולוגיות, פרוטוקולים וחומרים פעילים",
      duration: "3-4 שעות",
      icon: <Microscope />,
      color: "microscope",
      topics: [
        { icon: <Crown />, text: "שלושת הפתולוגיות המרכזיות: אקנה, פיגמנטציה, אנטי אייג'ינג" },
        { icon: <Briefcase />, text: "ארגז הכלים: אילו חברות ומכשור חשובים בקליניקה, סקירת חומרים פעילים" },
        { icon: <FileText />, text: "בניית פרוטוקול עבודה ללקוח: התאמה לפי מצב רפואי/תרופתי, שילוב טיפול ביתי" },
        { icon: <Sparkles />, text: "חומרים פעילים – היכרות מעמיקה: אנטי אייג'ינג, פיגמנטציה, אקנה, שיקום" },
        { icon: <ShoppingBag />, text: "חברות – עם מי כדאי לעבוד ואיך לבחור חכם?" },
        { icon: <Search />, text: "דיון: הבעיה המרכזית של הקוסמטיקאיות היום ואיך לבחור חכם?" }
      ]
    },
    {
      id: 3,
      title: "מכשור, מכירות ושיווק",
      duration: "4-5 שעות",
      icon: <TrendingUp />,
      color: "trending",
      topics: [
        { icon: <Zap />, text: "מכשור: אילו מכשירים חובה בקליניקה ואילו בגדר Nice to Have" },
        { icon: <Award />, text: "מכירות: בניית 'אווטאר' לקוח, סגירת סדרות NLP למכירה מאפשרת" },
        { icon: <BarChart />, text: "שיווק פרקטי: אינסטגרם, סרטונים, דפי נחיתה, שיווק ממומן, פאנל שיווקי" }
      ]
    }
  ];

  const handleButtonClick = () => {
    setIsPoppedOpen(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.sessionsContainer}>
        {sessions.map((session) => (
          <div key={session.id} className={`${styles.sessionCard} ${styles[session.color]}`}>
            <div className={styles.sessionHeader}>
              <div className={styles.sessionInfo}>
                <h3 className={styles.sessionTitle}>מפגש {session.id}</h3>
                <h4 className={styles.sessionName}>{session.title}</h4>
                <span className={styles.sessionDuration}>{session.duration}</span>
              </div>
            </div>
            <div className={styles.topicsContainer}>
              {session.topics.map((topic, index) => (
                <div key={index} className={styles.topicItem}>
                  <div className={styles.topicIcon}>
                    {topic.icon}
                  </div>
                  <span className={styles.topicText}>{topic.text}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.ctaSection}>
        <button onClick={handleButtonClick} className={styles.ctaButton}>
          לחצי כאן לשיחה אישית ממני
        </button>
      </div>

      {isPoppedOpen && <Popped onClose={() => setIsPoppedOpen(false)} />}
    </div>
  );
};

export default SyllabusContainer;