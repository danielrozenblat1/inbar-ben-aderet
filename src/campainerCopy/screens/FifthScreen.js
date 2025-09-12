import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./FifthScreen.module.css";
import PrivacyPolicy from "../../components/privacy/Privacy";
import inbal from "../../images/עינבר בן אדרת חדש.png"
import inbalMobile from "../../images/עינבר תמונה סוף.png" // הוסף את התמונה החדשה כאן

// רישום ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const SplitForm = ({ imageUrl, title = "לכל שאלה נוספת ,תשאירי כאן פרטים ונדבר" }) => {
  const [agreed, setAgreed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const reciver = "inbarbenaderet@gmail.com";

  // רפסים לאנימציות
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const imageRef = useRef(null);
  const inputGroupRef = useRef(null);
  const buttonRef = useRef(null);
  const checkboxRef = useRef(null);
  const containerRef = useRef(null);

  const serverUrl = "https://dynamic-server-dfc88e1f1c54.herokuapp.com/leads/newLead";

  // פונקציה לבדיקת גודל מסך
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 750);
    };

    // בדיקה ראשונית
    checkScreenSize();

    // האזנה לשינויים בגודל המסך
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  // ScrollReveal אנימציות עדינות
  useEffect(() => {
    // הגדרת מצבים ראשוניים - נסתרים לגמרי
    if (titleRef.current) {
      gsap.set(titleRef.current, { 
        opacity: 0, 
        y: 30,
        scale: 0.95
      });
    }
    if (imageRef.current) {
      gsap.set(imageRef.current, { 
        opacity: 0, 
        scale: 0.9,
        y: 20
      });
    }
    if (inputGroupRef.current && inputGroupRef.current.children) {
      gsap.set(inputGroupRef.current.children, { 
        opacity: 0, 
        y: 25,
        scale: 0.98
      });
    }
    if (checkboxRef.current) {
      gsap.set(checkboxRef.current, { 
        opacity: 0, 
        y: 20
      });
    }
    if (buttonRef.current) {
      gsap.set(buttonRef.current, { 
        opacity: 0, 
        y: 25,
        scale: 0.95
      });
    }

    // ScrollTrigger לתמונה
    ScrollTrigger.create({
      trigger: imageRef.current,
      start: "top 80%",
      onEnter: () => {
        gsap.to(imageRef.current, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out"
        });
      }
    });

    // ScrollTrigger לכותרת
    ScrollTrigger.create({
      trigger: titleRef.current,
      start: "top 85%",
      onEnter: () => {
        gsap.to(titleRef.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.2
        });
      }
    });

    // ScrollTrigger לשדות הקלט - אחד אחד
    if (inputGroupRef.current && inputGroupRef.current.children) {
      Array.from(inputGroupRef.current.children).forEach((child, index) => {
        ScrollTrigger.create({
          trigger: child,
          start: "top 90%",
          onEnter: () => {
            gsap.to(child, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              ease: "power2.out",
              delay: index * 0.1 + 0.1
            });
          }
        });
      });
    }

    // ScrollTrigger לצ'קבוקס
    ScrollTrigger.create({
      trigger: checkboxRef.current,
      start: "top 90%",
      onEnter: () => {
        gsap.to(checkboxRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out"
        });
      }
    });

    // ScrollTrigger לכפתור
    ScrollTrigger.create({
      trigger: buttonRef.current,
      start: "top 90%",
      onEnter: () => {
        gsap.to(buttonRef.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: "power2.out"
        });
      }
    });

    // ניקוי ScrollTriggers
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // פונקציה שמונעת מהטופס להגיב על קליק בקישור
  const handlePrivacyClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // בדיקה אם המשתמש אישר את תנאי השימוש ומדיניות הפרטיות
    if (!agreed) {
      // אפקט זעזוע מיוחד
      gsap.timeline()
        .to(checkboxRef.current, {
          rotation: -3,
          x: -5,
          duration: 0.1
        })
        .to(checkboxRef.current, {
          rotation: 3,
          x: 5,
          duration: 0.1
        })
        .to(checkboxRef.current, {
          rotation: -2,
          x: -3,
          duration: 0.1
        })
        .to(checkboxRef.current, {
          rotation: 0,
          x: 0,
          duration: 0.2,
          ease: "elastic.out(1, 0.3)"
        });
      alert("עליך לאשר את תנאי השימוש ומדיניות הפרטיות");
      return;
    }

    const name = nameRef.current.value;
    const phone = phoneRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    if (name.trim().length <= 2) {
      // אפקט גל מיוחד לשדה שם
      gsap.timeline()
        .to(nameRef.current, {
          scaleX: 0.95,
          duration: 0.1
        })
        .to(nameRef.current, {
          scaleX: 1.05,
          x: -8,
          duration: 0.15
        })
        .to(nameRef.current, {
          scaleX: 0.98,
          x: 8,
          duration: 0.15
        })
        .to(nameRef.current, {
          scaleX: 1,
          x: 0,
          duration: 0.2,
          ease: "back.out(2)"
        });
      alert("אנא הכנס שם מלא");
      return;
    }
    if (phone.trim().length !== 10) {
      // אפקט רטט עמוק לטלפון
      gsap.timeline()
        .to(phoneRef.current, {
          y: -4,
          rotationZ: 1,
          duration: 0.08
        })
        .to(phoneRef.current, {
          y: 4,
          rotationZ: -1,
          duration: 0.08
        })
        .to(phoneRef.current, {
          y: -3,
          rotationZ: 0.5,
          duration: 0.08
        })
        .to(phoneRef.current, {
          y: 3,
          rotationZ: -0.5,
          duration: 0.08
        })
        .to(phoneRef.current, {
          y: 0,
          rotationZ: 0,
          duration: 0.2,
          ease: "elastic.out(1.5, 0.4)"
        });
      alert("אנא הכנס מספר טלפון הכולל 10 ספרות");
      return;
    }
    if (!email.includes("@")) {
      // אפקט פאלס למייל
      gsap.timeline()
        .to(emailRef.current, {
          scale: 1.02,
          duration: 0.1
        })
        .to(emailRef.current, {
          scale: 0.98,
          duration: 0.1
        })
        .to(emailRef.current, {
          scale: 1.01,
          duration: 0.1
        })
        .to(emailRef.current, {
          scale: 1,
          duration: 0.15,
          ease: "power2.out"
        });
      alert("אנא הכנס מייל תקין");
      return;
    }
    if (message.trim().length < 5) {
      // אפקט גלים להודעה
      gsap.timeline()
        .to(messageRef.current, {
          scaleY: 0.95,
          transformOrigin: "center bottom",
          duration: 0.12
        })
        .to(messageRef.current, {
          scaleY: 1.05,
          duration: 0.12
        })
        .to(messageRef.current, {
          scaleY: 0.98,
          duration: 0.12
        })
        .to(messageRef.current, {
          scaleY: 1,
          duration: 0.15,
          ease: "back.out(1.5)"
        });
      alert("אנא הכנס הודעה של לפחות 5 תווים");
      return;
    }

    // אפקט לחיצה מיוחד לכפתור
    gsap.timeline()
      .to(buttonRef.current, {
        scale: 0.96,
        y: 2,
        duration: 0.1
      })
      .to(buttonRef.current, {
        scale: 1.02,
        y: -1,
        duration: 0.15
      })
      .to(buttonRef.current, {
        scale: 1,
        y: 0,
        duration: 0.2,
        ease: "back.out(2)"
      });

    const serverData = {
      name,
      phone,
      email,
      reason: message,
      reciver
    };

    try {
      const serverResponse = await fetch(serverUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(serverData),
      });

      if (serverResponse.ok) {
        // אנימציית הצלחה מרשימה אבל לא מוגזמת
        gsap.timeline()
          .to(buttonRef.current, {
            backgroundColor: "#4CAF50",
            scale: 1.05,
            y: -3,
            boxShadow: "0 8px 25px rgba(76, 175, 80, 0.4)",
            duration: 0.4,
            ease: "back.out(1.7)"
          })
          .to(buttonRef.current, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
            delay: 1.2
          })
          .to(buttonRef.current, {
            backgroundColor: "#A2ADA5",
            boxShadow: "0 10px 30px rgba(162, 173, 165, 0.3)",
            duration: 0.4,
            ease: "power2.out"
          });

        alert("שמרנו את הפרטים שלך, ניצור קשר בימים הקרובים");
        nameRef.current.value = "";
        phoneRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";
        setAgreed(false);

        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        throw new Error("שליחה נכשלה");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // אנימציית שגיאה מיוחדת
      gsap.timeline()
        .to(buttonRef.current, {
          backgroundColor: "#ff4444",
          scale: 0.98,
          rotation: -1,
          duration: 0.15
        })
        .to(buttonRef.current, {
          scale: 1.03,
          rotation: 1,
          duration: 0.15
        })
        .to(buttonRef.current, {
          scale: 0.99,
          rotation: 0,
          duration: 0.15
        })
        .to(buttonRef.current, {
          scale: 1,
          duration: 0.2,
          ease: "elastic.out(1, 0.3)",
          delay: 0.8
        })
        .to(buttonRef.current, {
          backgroundColor: "#A2ADA5",
          duration: 0.4,
          ease: "power2.out"
        });
      alert("חלה שגיאה בשליחת הטופס. אנא נסה שוב.");
    }
  };

  return (
    <div ref={containerRef} className={styles.splitContainer}>
      {/* חצי שמאל - תמונה */}
      <div className={styles.imageSection}>
        <img 
          ref={imageRef}
          src={isMobile ? inbalMobile : inbal} 
          alt="טיפול יופי" 
          className={styles.image}
        />
      </div>

      {/* חצי ימין - טופס */}
      <div className={styles.formSection}>
        <div className={styles.container}>
          <div className={styles.subtitle}></div>
          <div ref={titleRef} className={styles.title}>{title}</div>
        </div>

        <div className={styles.formContainer}>
          <form className={styles.form} onSubmit={submitHandler} ref={formRef}>
            <div ref={inputGroupRef} className={styles.inputGroup}>
              <input
                type="text"
                className={styles.input}
                placeholder="שם מלא"
                ref={nameRef}
              />
              <input
                type="tel"
                className={styles.input}
                placeholder="מספר טלפון"
                ref={phoneRef}
              />
              <input
                type="email"
                className={styles.input}
                placeholder="מייל"
                ref={emailRef}
              />
              <textarea
                className={styles.textarea}
                placeholder="איך אוכל לעזור לך? ספרי לי על עצמך ומה את מחפשת..."
                ref={messageRef}
                rows={4}
              />

              {/* תיבת האישור למדיניות הפרטיות */}
              <div ref={checkboxRef} className={styles.checkboxContainer}>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={() => setAgreed(!agreed)}
                    className={styles.checkbox}
                  />
                  קראתי את
                  <span onClick={handlePrivacyClick}>
                    <PrivacyPolicy 
                      ownerName="עינבר בן אדרת" 
                      email="inbarbenaderet@gmail.com" 
                      phone="+972 50-686-7653" 
                      domain="https://inbarbenaderet.co.il/" 
                    />
                  </span>
                  ואני מאשר/ת
                </label>
              </div>

              <button ref={buttonRef} type="submit" className={styles.button}>
                עינבר, צרי איתי קשר
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SplitForm;