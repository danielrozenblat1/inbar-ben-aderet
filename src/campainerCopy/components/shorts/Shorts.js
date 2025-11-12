import React, { useState, useRef, useEffect } from 'react';
import styles from './Shorts.module.css';

const LazyYoutubeEmbed = ({ videoId }) => {
  const ref = useRef(null);
  const [showIframe, setShowIframe] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShowIframe(true);
        observer.disconnect();
      }
    });
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  // ScrollReveal effect
  useEffect(() => {
    if (ref.current) {
      const element = ref.current;
      
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px) scale(0.95)';
      element.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.style.opacity = '1';
              element.style.transform = 'translateY(0) scale(1)';
            }, 200);
            observer.unobserve(element);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });
      
      observer.observe(element);
      
      return () => observer.disconnect();
    }
  }, []);

  return (
    <div className={styles.shortItem} ref={ref}>
      {showIframe && (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
          title="YouTube Short"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={styles.iframe}
          loading="lazy"
        />
      )}
    </div>
  );
};

const Shorts = () => {
  const videoId = 'gMUbyf2Z514'; // סרטון יחיד

  return (
    <div className={styles.shortsContainer}>
      <LazyYoutubeEmbed videoId={videoId} />
    </div>
  );
};

export default Shorts;