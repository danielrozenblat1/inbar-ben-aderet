import React, { useEffect, useRef, useState } from 'react';
import styles from './FirstScreen.module.css';
import inbar from "../images/עינבר ראשית.png";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Popped from '../components/poppedUpWindow/Popped';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const preHeaderRef = useRef(null);
  const textBlockRef = useRef(null);
  const imageRef = useRef(null);
  const [isPoppedOpen, setIsPoppedOpen] = useState(false);

  useEffect(() => {
    // Pre-header animation
    gsap.fromTo(
      preHeaderRef.current,
      { opacity: 0, y: -50, filter: 'blur(8px)', scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        scale: 1,
        duration: 1.2,
        ease: 'back.out(1.4)',
        scrollTrigger: {
          trigger: preHeaderRef.current,
          start: 'top 95%',
        },
      }
    );

    // Text block animation
    const textElements = textBlockRef.current?.children || [];
    gsap.fromTo(
      textElements,
      { opacity: 0, y: 60, filter: 'blur(4px)', scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: textBlockRef.current,
          start: 'top 85%',
        },
      }
    );

    // Image animation
    gsap.fromTo(
      imageRef.current,
      {
        opacity: 0,
        scale: 0.8,
        rotateY: -20,
        rotateX: 10,
        filter: 'blur(6px) brightness(0.8)'
      },
      {
        opacity: 1,
        scale: 1,
        rotateY: 0,
        rotateX: 0,
        filter: 'blur(0px) brightness(1)',
        duration: 1.6,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 85%',
        },
      }
    );

    // Stats card animation
    const statsCard = imageRef.current?.querySelector(`.${styles.statsCard}`);
    if (statsCard) {
      // First animate the card appearance
      gsap.fromTo(
        statsCard,
        {
          opacity: 0,
          y: -20,
          scale: 0.9,
          filter: 'blur(4px)'
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 1.4,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
          },
          delay: 0.3
        }
      );

      // Counter animation for numbers - start immediately when element enters viewport
      const statNumbers = statsCard.querySelectorAll(`.${styles.statNumber}`);
      
      // First number: 1000+
      if (statNumbers[0]) {
        let counter1 = { value: 0 };
        statNumbers[0].textContent = '0+';
        gsap.to(counter1, {
          value: 3000,
          duration: 2,
          ease: 'power2.out',
          delay: 0.5,
          onUpdate: () => {
            statNumbers[0].textContent = Math.round(counter1.value) + '+';
          },
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 85%',
          }
        });
      }
      
      // Second number: 26+
      if (statNumbers[1]) {
        let counter2 = { value: 0 };
        statNumbers[1].textContent = '0+';
        gsap.to(counter2, {
          value: 26,
          duration: 2,
          ease: 'power2.out',
          delay: 0.7,
          onUpdate: () => {
            statNumbers[1].textContent = Math.round(counter2.value) + '+';
          },
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 85%',
          }
        });
      }
      
      // Third number: 100%
      if (statNumbers[2]) {
        let counter3 = { value: 0 };
        statNumbers[2].textContent = '0%';
        gsap.to(counter3, {
          value: 100,
          duration: 2,
          ease: 'power2.out',
          delay: 0.9,
          onUpdate: () => {
            statNumbers[2].textContent = Math.round(counter3.value) + '%';
          },
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 85%',
          }
        });
      }
    }

    // Hover effects
    const button = textBlockRef.current?.querySelector('button');
    if (button) {
      gsap.set(button, { perspective: 1000 });

      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          scale: 1.05,
          rotateY: 5,
          boxShadow: '0 8px 30px rgba(162, 173, 165, 0.5)',
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          scale: 1,
          rotateY: 0,
          boxShadow: '0 4px 15px rgba(162, 173, 165, 0.3)',
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    }

    // Parallax scroll
    gsap.to(imageRef.current, {
      y: -30,
      scrollTrigger: {
        trigger: imageRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5
      }
    });

  }, []);

  const handleButtonClick = () => {
    setIsPoppedOpen(true);
  };

  return (
    <>
      <div className={styles.preHeader} ref={preHeaderRef}>
        לאחר 26 שנים בתחום הקוסמטיקה ואלפי מטופלות <br/> עינבר בן אדרת מציגה:
      </div>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.textContent} ref={textBlockRef}>
            <div className={styles.title}>
              מקוסמטיקאית עם חלום, ל<span className={styles.boldText}>אשת עסקים</span> עם{' '}
              <span className={styles.highlightedText}>קליניקה מלאה בלקוחות</span>
            </div>

            <p className={styles.descriptionP}>
              קורס פרקטי בן 4 מפגשים בהדרכת עינבר בן אדרת שיעזור לך להרגיש בטוחה בכל סוגי הטיפולים, לדעת מה באמת להביא לקליניקה, ואיך לסגור סדרות טיפולים שמייצבים את ההכנסה שלך ולא לרדוף אחרי טיפולים יחידים.
            </p>

            <div className={styles.glassContainer}>
              <p className={styles.description}>
                בקורס תלמדי איך להפוך כל טיפול להזדמנות למכירה, איך להפסיק להוציא כסף על ציוד מיותר ותקבלי שיטה ברורה לניהול קליניקה שמייצרת סדר, יציבות והכנסה - גם אם את בתחילת הדרך וגם אם את כבר שנים בתחום.
              </p>
            </div>

            <button onClick={handleButtonClick} className={styles.ctaButton}>
              אני רוצה למלא את הקליניקה שלי
            </button>
          </div>

          <div className={styles.imageWrapper} ref={imageRef}>
            <div className={styles.statsCard}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>3000+</div>
                <div className={styles.statLabel}>מטופלות</div>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>26+</div>
                <div className={styles.statLabel}>שנות ניסיון</div>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>100%</div>
                <div className={styles.statLabel}>פרקטיקה</div>
              </div>
            </div>
            <img
              src={inbar}
              alt="עינבר בן אדרת"
              className={styles.image}
            />
          </div>
        </div>
      </section>
      
      {isPoppedOpen && <Popped onClose={() => setIsPoppedOpen(false)} />}
    </>
  );
};

export default HeroSection;