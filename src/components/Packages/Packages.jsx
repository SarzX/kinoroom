import styles from './Packages.module.css'
import {motion} from "framer-motion";
import React from 'react';

const Packages = () => {
    return (
        <div className={styles.packages}>
            <div className={styles.title__wrapper}>
                <h1 className={styles.title}>НАШИ ПАКЕТЫ</h1>
                <p className={styles.subtitle}>Вы можете выбрать опции для любых тарифов. Ассортимент и наличие Вы
                    можете уточнить у нашего
                    администратора. (Помимо пакетов мы можем предложить готовые тарифы)</p>
            </div>
            <div className={styles.cards}>
                <motion.div
                    initial={{y: 20, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{duration: 0.3, delay: 1 * 0.1}}
                    className={styles.card}>
                    <img src="https://static.tildacdn.com/lib/tildaicon/66326631-6435-4161-b366-333539303738/v_wine.svg"
                         alt="card"/>
                    <h1>Пакет "Романтика"</h1>
                    <ul>
                        <li>Бутылка вина на выбор в подарок</li>
                        <li>Фруктово-сырная тарелка</li>
                        <li>Романтическая обстановка (ароматические свечи, лепестки роз)</li>
                        <li>Горячий чай на Ваш выбор</li>
                        <li>Презервативы</li>
                    </ul>
                    <h2>3 000 руб</h2>
                </motion.div>
                <motion.div
                    initial={{y: 20, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{duration: 0.3, delay: 2 * 0.1}}
                    className={styles.card}>
                    <img
                        src="https://static.tildacdn.com/lib/tildaicon/34663532-3839-4730-a630-663031386239/Tilda_Icons_42_restaurant_pizza.svg"
                        alt="card"/>
                    <h1>Опция "Продление на час"</h1>
                    <ul>
                        <li>Есть пицца, паста, ризотто, антипасти, основанные на использовании свежих томатов (оплата отдельная)</li>
                        <li>Газировка (2 л.) на Ваш выбор</li>
                        <li>Сендвичи (4 шт.) на Ваш выбор</li>
                    </ul>
                    <h2>1 000 руб</h2>
                </motion.div>
                <motion.div
                    initial={{y: 20, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{duration: 0.3, delay: 3 * 0.1}}
                    className={styles.card}>
                    <img
                        src="https://static.tildacdn.com/lib/tildaicon/64653365-6662-4139-b732-646566333733/Tilda_Icons_47dlvr_24hr.svg"
                        alt="card"/>
                    <h1>Опция "Продление на час"</h1>
                    <p>Продление аренды кинозала на час
                        с 00:00 до 07:00 - 1 000 руб</p>
                    <h2>1 000 руб/ 1 час</h2>
                </motion.div>

            </div>
        </div>
    );
};

export default Packages;
