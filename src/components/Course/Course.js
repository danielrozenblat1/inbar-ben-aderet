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
  Rocket
} from 'lucide-react';
import styles from './Course.module.css';
import Popped from '../poppedUpWindow/Popped';

const SyllabusContainer = () => {
  const [isPoppedOpen, setIsPoppedOpen] = useState(false);


  const sessions = [
    {
      id: 1,
      title: "המיינדסט המנצח",
      duration: "3-4 שעות",
      icon: <Brain />,
      color: "brain",
      topics: [
        { icon: <Target />, text: "היכרות אישית ומטרות הקורס" },
        { icon: <Lightbulb />, text: "מעבר מקוסמטיקאית לאשת עסקים מצליחה" },
        { icon: <Zap />, text: "איך המוח עובד - מחשבות, רגשות, פעולות ותוצאות" },
        { icon: <Star />, text: "חוקי היקום - חוק המשיכה והמיקוד" },
        { icon: <CheckCircle2 />, text: "14 שאלות ממקדות מטרה לבניית חזון ברור" },
        { icon: <Heart />, text: "הכללות, עיוותים והשמטות בתקשורת" },
        { icon: <Users />, text: "יצירת ראפור והובלת לקוחות" }
      ]
    },
    {
      id: 2,
      title: "מקצועיות ופרוטוקולים",
      duration: "3-4 שעות", 
      icon: <Microscope />,
      color: "microscope",
      topics: [
        { icon: <Eye />, text: "אבחון העור - שלבים וסימנים מקצועיים" },
        { icon: <BookOpen />, text: "השאלות הקריטיות בשאלון מטופלת" },
        { icon: <Gem />, text: "בניית פרוטוקול טיפול מותאם אישית" },
        { icon: <Crown />, text: "טיפול אקנה, פיגמנטציה ואנטי אייג'ינג" },
        { icon: <Sparkles />, text: "טיפולים לנשים בהריון וחולים אונקולוגיים" },
        { icon: <CheckCircle2 />, text: "עשה ואל תעשה בתוך הקליניקה" },
        { icon: <Target />, text: "טכניקות ניקוז נכונות - סדנה מעשית" }
      ]
    },
    {
      id: 3,
      title: "שיווק, מכירות וכלים לעסק מניב",
      duration: "4-5 שעות",
      icon: <TrendingUp />,
      color: "trending",
      topics: [
        { icon: <Rocket />, text: "חומרים פעילים והתאמה לכל סוג עור" },
        { icon: <ShoppingBag />, text: "חברות מובילות בשוק ומה נחוץ לרכוש" },
        { icon: <MessageCircle />, text: "תסריטי שיחה טלפונית ופרונטלית" },
        { icon: <Award />, text: "סגירת סדרות טיפולים בצורה שירותית" },
        { icon: <Zap />, text: "המכשירים האפקטיביים ביותר" },
        { icon: <Users />, text: "בניית קהילה במדיה שקונה שוב ושוב" },
        { icon: <Crown />, text: "דפי מכירה, קמפיינים ובידול עסקי" }
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
