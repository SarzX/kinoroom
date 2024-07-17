import styles from './OurHalls.module.css'
import Container from "../Container/Container.jsx";
import {motion} from "framer-motion";
import React from 'react';
const OurHalls = () => {
    const cards = [
        {
            img: 'https://thumb.tildacdn.com/tild3535-3061-4233-b336-626162353036/-/resize/42x/-/format/webp/kinorum.png',
            title: 'Кинорум',
            subtitle: 'Все наши кинозалы оборудованы 3-х метровым FullHD экраном и аккустической системой с объемным звучанием. Все помещения звукоизолированны'
        },
        {
            img: 'https://thumb.tildacdn.com/tild3061-3133-4637-b461-313963393139/-/resize/42x/-/format/webp/vayfay.png',
            title: 'Высокоскоростной интернет',
            subtitle: 'Во всех кинозалах имеется высокоскоростной доступ wifi, который позволяет подключить любое Ваше устройство к нашей аудио-видео системе',
        },
        {
            img: 'https://thumb.tildacdn.com/tild3761-6532-4438-b136-343434343937/-/resize/42x/-/format/webp/klimatkontro.png',
            title: 'Климат-контроль',
            subtitle: 'Для Вашего комфорта все наши кинозалы оборудованы системой кондиционирования воздуха. Дополнительно мы проводим проветривание помещения после каждого сеанса',
        },
        {
            img: 'https://thumb.tildacdn.com/tild3536-6132-4365-b765-383830366432/-/resize/42x/-/format/webp/chistota.png',
            title: 'Чистота',
            subtitle: 'Мы тщательно следим за чистотой наших залов, поэтому после каждого киносеанса проводим влажную уборку помещения, а также еженедельную химчистку мебели, подушек и пледов',
        },
        {
            img: 'https://thumb.tildacdn.com/tild3162-3930-4330-b138-333162303531/-/resize/42x/-/format/webp/Bezopasnost.png',
            title: 'Безопасность и комфорт',
            subtitle: 'Мы ценим комфорт и безопасность наших гостей, поэтому все наши кинозалы оборудованы внутренними замками, отдельным туалетом и даже душевой! Мы не ведем видеонаблюдение за нашими гостями',
        },
        {
            img: 'https://media.istockphoto.com/id/1300219183/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B4%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%BD%D0%BE%D1%81%D1%82%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD-%D0%B2-%D1%82%D1%83%D0%B0%D0%BB%D0%B5%D1%82%D0%B5.jpg?s=612x612&w=0&k=20&c=K09dGxL39YQ1GXBYWC1H0uNw7p99YBKhdAQ6M6MkpwA=',
            title: 'Все условия для интима',
            subtitle: 'Мы создадим все условия чтобы вам было приятно занимать интимом есть призервативы и смазки за доп оплату',
        },
    ]
    return (
        <div className={styles.ourhalls}>
            <Container>
                <h1 className={styles.title}>Наши кинозалы</h1>
                <div className={styles.cards}>
                    {cards.map((el, i) => (
                        <motion.div
                            initial={{y: 20, opacity: 0}}
                            whileInView={{y: 0, opacity: 1}}
                            transition={{duration: 0.3, delay: i * 0.1}}
                            key={i} className={styles.card}>
                            <div className={styles.title__wrapper}>
                                <img style={{width:'42px',height:'42px'}} src={el.img} alt=""/>
                                <h4>{el.title}</h4>
                            </div>
                            <p>{el.subtitle}</p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default OurHalls;
