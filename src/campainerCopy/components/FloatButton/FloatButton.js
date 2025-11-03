import { useState, useEffect, useRef } from 'react';
import styles from './FloatButton.module.css';
import Popped from '../poppedUpWindow/Popped';

const FloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isStatic, setIsStatic] = useState(false);
  const [isPoppedOpen, setIsPoppedOpen] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // הצג את הכפתור רק אחרי 200px גלילה
      if (scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      // בדוק אם הגענו לתחתית הדף (עם מרווח של 100px)
      if (scrollY + windowHeight >= documentHeight - 100) {
        setIsStatic(true);
      } else {
        setIsStatic(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // בדיקה ראשונית

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    setIsPoppedOpen(true);
  };

  return (
    <>
      <div
        ref={buttonRef}
        className={`${styles.floatingButton} ${isVisible ? styles.visible : ''} ${isStatic ? styles.static : ''}`}
        onClick={handleClick}
      >
        <span className={styles.buttonText}>
          להשארת פרטים למחזור הקרוב לחצי כאן
        </span>
      </div>
      
      {isPoppedOpen && <Popped onClose={() => setIsPoppedOpen(false)} />}
    </>
  );
};

export default FloatingButton;