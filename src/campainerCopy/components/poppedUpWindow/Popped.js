import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Popped.module.css";
import { FaTimes } from "react-icons/fa";
import PrivacyPolicy from "../privacy/Privacy";

const Popped = ({ onClose, title }) => {
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const reciver = "inbarbenaderet@gmail.com";

  const serverUrl = "https://dynamic-server-dfc88e1f1c54.herokuapp.com/leads/newLead";

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  const handlePrivacyClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!agreed) {
      alert("עליך לאשר את תנאי השימוש ומדיניות הפרטיות");
      return;
    }

    const name = nameRef.current.value;
    const phone = phoneRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    if (name.trim().length <= 2) {
      alert("אנא הכנס שם מלא");
      return;
    }
    if (phone.trim().length !== 10) {
      alert("אנא הכנס מספר טלפון הכולל 10 ספרות");
      return;
    }
    if (!email.includes("@")) {
      alert("אנא הכנס מייל תקין");
      return;
    }
    if (message.trim().length < 5) {
      alert("אנא הכנס הודעה של לפחות 5 תווים");
      return;
    }

    const serverData = {
      name,
      phone,
      email,
      reason: message,
      reciver
    };

    setIsSubmitting(true);

    try {
      const serverResponse = await fetch(serverUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(serverData),
      });

      if (serverResponse.ok) {
        navigate("/thanks");
      } else {
        throw new Error("שליחה נכשלה");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("חלה שגיאה בשליחת הטופס. אנא נסה שוב.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.popped}>
        <FaTimes className={styles.closeIcon} onClick={handleClose} />
        
        <div className={styles.container}>
          <div className={styles.subtitle}></div>
          <div className={styles.title}>זמן לקחת החלטה</div>
        </div>

        <div className={styles.formContainer}>
          <form className={styles.form} onSubmit={submitHandler}>
            <div className={styles.inputGroup}>
              <input
                type="text"
                className={styles.input}
                placeholder="שם מלא"
                ref={nameRef}
                disabled={isSubmitting}
              />
              <input
                type="tel"
                className={styles.input}
                placeholder="מספר טלפון"
                ref={phoneRef}
                disabled={isSubmitting}
              />
              <input
                type="email"
                className={styles.input}
                placeholder="מייל"
                ref={emailRef}
                disabled={isSubmitting}
              />
              <textarea
                className={styles.textarea}
                placeholder="איך אוכל לעזור לך? ספרי לי על עצמך ומה את מחפשת..."
                ref={messageRef}
                rows={4}
                disabled={isSubmitting}
              />

              <div className={styles.checkboxContainer}>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={() => setAgreed(!agreed)}
                    className={styles.checkbox}
                    disabled={isSubmitting}
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

              <button 
                type="submit" 
                className={`${styles.button} ${isSubmitting ? styles.buttonDisabled : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "נשלח..." : "עינבר, צרי איתי קשר"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Popped;