import React, { useState } from 'react';
import styles from './Questions.module.css';

const FAQDrawer = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.glassContainer}>
      <div className={styles.drawerHeader} onClick={toggleDrawer}>
        <div className={styles.toggleButton}>
          <span className={`${styles.toggleIcon} ${isOpen ? styles.open : ''}`}>
            {isOpen ? '−' : '+'}
          </span>
        </div>
        <div className={styles.question}>{question}</div>
      </div>
      
      <div className={`${styles.drawerContent} ${isOpen ? styles.contentOpen : ''}`}>
        <div className={styles.answer}>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQDrawer;