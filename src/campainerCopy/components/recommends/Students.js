import styles from "./Regular.module.css"

import result1 from "../../images/עינבר בן אדרת לפני אחרי 1.png";
import result2 from "../../images/עינבר בן אדרת לפני אחרי 2.png";
import result3 from "../../images/עינבר בן אדרת לפני אחרי 3.png";
import result4 from "../../images/עינבר בן אדרת לפני אחרי 4.png";
import result5 from "../../images/עינבר בן אדרת לפני אחרי 5.png";
import result6 from "../../images/עינבר בן אדרת לפני אחרי 6.png";
import result7 from "../../images/עינבר בן אדרת לפני אחרי 7.png";
import result8 from "../../images/עינבר בן אדרת לפני אחרי 8.png";
import result9 from "../../images/עינבר בן אדרת לפני אחרי 9.png";

import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Students = () => {
    const [slidesToShow, setSlidesToShow] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 450) {
                setSlidesToShow(1);
            } else if (window.innerWidth <= 1050) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(4);
            }
        };

        handleResize(); // קריאה ראשונית
        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const sliderSettings = {
        infinite: true,
        speed: 700,
        autoplay: true, // תוקן - autoplay במקום autoPlay
        autoplaySpeed: 3500,
        dots: false,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        pauseOnHover: false, // אופציונלי - למנוע עצירה בעת hover
        pauseOnFocus: false, // אופציונלי - למנוע עצירה בעת focus
    };

    const content = [
        {
            type: 'image',
            src: result1,
        },
        {
            type: 'image',
            src: result2,
        },
        {
            type: 'image',
            src: result3,
        },
        {
            type: 'image',
            src: result4,
        },
        {
            type: 'image',
            src: result5,
        },
        {
            type: 'image',
            src: result6,
        },
        {
            type: 'image',
            src: result7,
        },
        {
            type: 'image',
            src: result8,
        },
        {
            type: 'image',
            src: result9,
        },
    ];

    return (
        <>
            <div className={styles.title}>בשנים האחרונות </div>
            <div className={styles.explain}>עברו אצלי אלפי נשים בעשרות סוגים של טיפולים שונים</div>
            <div className={styles.sliderContainer}>
                <Slider {...sliderSettings}>
                    {content.map((item, index) => (
                        <div key={index} itemScope itemType="http://schema.org/Review">
                            {item.type === 'image' && (
                                <img 
                                    src={item.src} 
                                    className={styles.image1} 
                                    alt={`קרן אמבאי לקוחה ממליצה מספר ${index + 1}`} 
                                    itemProp="image"
                                />
                            )}
                            {item.type === 'video' && (
                                <video
                                    style={{ 
                                        width: "100%",
                                        display: "flex",
                                        objectFit: "cover", 
                                        margin: "auto", 
                                        height: "100%" 
                                    }}
                                    autoPlay 
                                    loop 
                                    muted 
                                    playsInline 
                                    controls
                                    itemProp="image"
                                >
                                    <source src={item.src} type="video/mp4" />
                                </video>
                            )}
                            <meta itemProp="datePublished" content={new Date().toISOString()} />
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}

export default Students;