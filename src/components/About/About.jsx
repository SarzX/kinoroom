import styles from './About.module.css'
import {motion} from "framer-motion";
import React from 'react';
const About = () => {
    const cards = [
        {
            img: 'https://thumb.tildacdn.com/tild3962-6364-4536-b839-313134613330/-/cover/120x120/center/center/-/format/webp/free-icon-marquee-40.png',
            title: 'Кинозал',
            subtitle: 'У нас очень хороший проектор, качественная звуковая система и большой экран. Залы идеально подходят для романтических встреч и свиданий'
        },
        {
            img: 'https://thumb.tildacdn.com/tild6339-6531-4231-b464-393462626466/-/cover/120x120/center/center/-/format/webp/free-icon-video-came.png',
            title: 'Фильмы или сериалы',
            subtitle: 'Вы можете выбрать любой фильм или сериал на таких площадках, как Apple TV, Netflix и другие'
        },
        {
            img: 'https://thumb.tildacdn.com/tild3536-6234-4033-b439-363631363963/-/cover/120x120/center/center/-/format/webp/free-icon-joystick-1.png',
            title: 'PlayStation 5',
            subtitle: 'PlayStation 5 с предустановленной библиотекой игр, а также большой выбор настольных и ролевых игр. (Также возможно заранее заказать уже скаченную игру к вашему приходу)'
        },
        {
            img: 'https://thumb.tildacdn.com/tild3434-3534-4038-a362-353264323263/-/cover/120x120/center/center/-/format/webp/free-icon-menu-10171.png',
            title: 'Наше меню',
            subtitle: 'Наше меню состоит из широкого выбора чаев (белый чай, красный чай, улуны), попкорна и снеков, а также прохладительных напитков и кальянов'
        },
        {
            img: 'https://thumb.tildacdn.com/tild3436-3930-4562-b462-613732643135/-/cover/120x120/center/center/-/format/webp/free-icon-burger-115.png',
            title: 'Еду можно с собой',
            subtitle: 'К нам можно со своей едой и напитками без всяких дополнительных сборов, можно воспользоваться сервисом Delivery Club или Yandex Едой'
        },
        {
            img: 'https://thumb.tildacdn.com/tild6261-3765-4365-b838-633064326666/-/cover/120x120/center/center/-/format/webp/free-icon-candles-18.png',
            title: 'Атмосфера',
            subtitle: 'Уютная атмосфера, удобные диваны канапе, пуфики, кондиционер, теплые пледы и ароматические свечи ZARA'
        },
    ]
    return (
        <div className={styles.about}>
            <motion.div
                initial={{y: 20, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                className={styles.about__wrapper}>
                <h1 className={styles.title}>Что у нас внутри?</h1>
                <p className={styles.subtitle}>Есть много офигенных вещей, которые обеспечат вам комфортный и
                    незабываемый
                    отдых.</p>
            </motion.div>
            <div className={styles.cards}>
                {cards.map((el, i) => (
                    <motion.div
                        initial={{y: 20, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{duration: 0.3, delay: i * 0.1}}
                        key={i} className={styles.card}>
                        <img src={el.img} alt="card"/>
                        <h3>{el.title}</h3>
                        <p>{el.subtitle}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default About;
