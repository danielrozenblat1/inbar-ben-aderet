import React from 'react';
import styles from './Recommends.module.css';
import Button from '../button/Button';

// Import all 72 images
import result1 from "../../images/עינבר בן אדרת המלצה 1.png";
import result2 from "../../images/עינבר בן אדרת המלצה 2.png";
import result3 from "../../images/עינבר בן אדרת המלצה 3.png";
import result4 from "../../images/עינבר בן אדרת המלצה 4.png";
import result5 from "../../images/עינבר בן אדרת המלצה 5.png";
import result6 from "../../images/עינבר בן אדרת המלצה 6.png";
import result7 from "../../images/עינבר בן אדרת המלצה 7.png";
import result8 from "../../images/עינבר בן אדרת המלצה 8.png";
import result9 from "../../images/עינבר בן אדרת המלצה 9.png";
import result10 from "../../images/עינבר בן אדרת המלצה 10.png";
import result11 from "../../images/עינבר בן אדרת המלצה 11.png";
import result12 from "../../images/עינבר בן אדרת המלצה 12.png";
import result13 from "../../images/עינבר בן אדרת המלצה 13.png";
import result14 from "../../images/עינבר בן אדרת המלצה 14.png";
import result15 from "../../images/עינבר בן אדרת המלצה 15.png";
import result16 from "../../images/עינבר בן אדרת המלצה 16.png";
import result17 from "../../images/עינבר בן אדרת המלצה 17.png";
import result18 from "../../images/עינבר בן אדרת המלצה 18.png";
import result19 from "../../images/עינבר בן אדרת המלצה 19.png";
import result20 from "../../images/עינבר בן אדרת המלצה 20.png";
import result21 from "../../images/עינבר בן אדרת המלצה 21.png";
import result22 from "../../images/עינבר בן אדרת המלצה 22.png";
import result23 from "../../images/עינבר בן אדרת המלצה 23.png";
import result24 from "../../images/עינבר בן אדרת המלצה 24.png";
import result25 from "../../images/עינבר בן אדרת המלצה 25.png";
import result26 from "../../images/עינבר בן אדרת המלצה 26.png";
import result27 from "../../images/עינבר בן אדרת המלצה 27.png";
import result28 from "../../images/עינבר בן אדרת המלצה 28.png";
import result29 from "../../images/עינבר בן אדרת המלצה 29.png";
import result30 from "../../images/עינבר בן אדרת המלצה 30.png";
import result31 from "../../images/עינבר בן אדרת המלצה 31.png";
import result32 from "../../images/עינבר בן אדרת המלצה 32.png";
import result33 from "../../images/עינבר בן אדרת המלצה 33.png";
import result34 from "../../images/עינבר בן אדרת המלצה 34.png";
import result35 from "../../images/עינבר בן אדרת המלצה 35.png";
import result36 from "../../images/עינבר בן אדרת המלצה 36.png";
import result37 from "../../images/עינבר בן אדרת המלצה 37.png";
import result38 from "../../images/עינבר בן אדרת המלצה 38.png";
import result39 from "../../images/עינבר בן אדרת המלצה 39.png";
import result40 from "../../images/עינבר בן אדרת המלצה 40.png";
import result41 from "../../images/עינבר בן אדרת המלצה 41.png";
import result42 from "../../images/עינבר בן אדרת המלצה 42.png";
import result43 from "../../images/עינבר בן אדרת המלצה 43.png";
import result44 from "../../images/עינבר בן אדרת המלצה 44.png";
import result45 from "../../images/עינבר בן אדרת המלצה 45.png";
import result46 from "../../images/עינבר בן אדרת המלצה 46.png";
import result47 from "../../images/עינבר בן אדרת המלצה 47.png";
import result48 from "../../images/עינבר בן אדרת המלצה 48.png";
import result49 from "../../images/עינבר בן אדרת המלצה 49.png";
import result50 from "../../images/עינבר בן אדרת המלצה 50.png";
import result51 from "../../images/עינבר בן אדרת המלצה 51.png";
import result52 from "../../images/עינבר בן אדרת המלצה 52.png";
import result53 from "../../images/עינבר בן אדרת המלצה 53.png";
import result54 from "../../images/עינבר בן אדרת המלצה 54.png";
import result55 from "../../images/עינבר בן אדרת המלצה 55.png";
import result56 from "../../images/עינבר בן אדרת המלצה 56.png";
import result57 from "../../images/עינבר בן אדרת המלצה 57.png";
import result58 from "../../images/עינבר בן אדרת המלצה 58.png";
import result59 from "../../images/עינבר בן אדרת המלצה 59.png";
import result60 from "../../images/עינבר בן אדרת המלצה 60.png";
import result61 from "../../images/עינבר בן אדרת המלצה 61.png";
import result62 from "../../images/עינבר בן אדרת המלצה 62.png";
import result63 from "../../images/עינבר בן אדרת המלצה 63.png";
import result64 from "../../images/עינבר בן אדרת המלצה 64.png";
import result65 from "../../images/עינבר בן אדרת המלצה 65.png";
import result66 from "../../images/עינבר בן אדרת המלצה 66.png";
import result67 from "../../images/עינבר בן אדרת המלצה 67.png";
import result68 from "../../images/עינבר בן אדרת המלצה 68.png";
import result69 from "../../images/עינבר בן אדרת המלצה 69.png";
import result70 from "../../images/עינבר בן אדרת המלצה 70.png";
import result71 from "../../images/עינבר בן אדרת המלצה 71.png";
import result72 from "../../images/עינבר בן אדרת המלצה 72.png";

const Works = () => {
  const images = [
    result1, result2, result3, result4, result5, result6, result7, result8,
    result9, result10, result11, result12, result13, result14, result15, result16,
    result17, result18, result19, result20, result21, result22, result23, result24,
    result25, result26, result27, result28, result29, result30, result31, result32,
    result33, result34, result35, result36, result37, result38, result39, result40,
    result41, result42, result43, result44, result45, result46, result47, result48,
    result49, result50, result51, result52, result53, result54, result55, result56,
    result57, result58, result59, result60, result61, result62, result63, result64,
    result65, result66, result67, result68, result69, result70, result71, result72
  ];

  return (
    <>
      <div className={styles.explain}>
וזה רק מקבץ קטן מההודעות שקיבלתי מהן
      </div>

      <div className={styles.container}>
        <div className={styles.scrollTrack}>
          {/* קבוצה ראשונה של תמונות */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`first-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`המלצה ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
          {/* קבוצה שנייה זהה של תמונות */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`second-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`המלצה ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;