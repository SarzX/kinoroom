import styles from './Halls.module.css'
import React from 'react';
import Container from "../Container/Container.jsx";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getHall, getHallId, getImage} from "../../store/slices/HallSlice.js";

const Halls = () => {
    const cards = [
        {
            img: 'https://thumb.tildacdn.com/tild6164-6235-4331-a631-333938666265/-/cover/432x475/center/center/-/format/webp/IMG_0224-HDR.jpg',
            title: 'Зал №1'
        },
        {
            img: 'https://thumb.tildacdn.com/tild6334-6233-4665-b535-346635343437/-/cover/432x475/center/center/-/format/webp/IMG_7625-HDR.jpg',
            title: 'Зал №2'
        },
        {
            img: 'https://thumb.tildacdn.com/tild3433-3538-4538-b562-666335316662/-/cover/432x475/center/center/-/format/webp/IMG_7712-HDR.jpg',
            title: 'Зал №3'
        },
        {
            img: 'https://thumb.tildacdn.com/tild6261-6666-4533-b434-323836653962/-/cover/432x475/center/center/-/format/webp/IMG_7769-HDR.jpg',
            title: 'Зал №4'
        },
        {
            img: 'https://thumb.tildacdn.com/tild3830-6435-4465-b935-363130306465/-/cover/432x475/center/center/-/format/webp/IMG_0251-HDR.jpg',
            title: 'Зал №5'
        },
        {
            img: 'https://thumb.tildacdn.com/tild6363-6566-4232-a162-346537383136/-/cover/432x475/center/center/-/format/webp/IMG_0260-HDR.jpg',
            title: 'Зал №6'
        },
    ]
    const dispatch = useDispatch()
    const isHall = useSelector(state => state.hall.value)


    return (
        <div className={styles.halls} id='halls'>
            <Container>
                <div className={styles.about__wrapper}>
                    <h1 className={styles.title}>Залы Kino<span>Room</span></h1>
                    <p className={styles.subtitle}>Кинозалы вмещают в себя от 2 до 5 человек. Для бронирования нужного
                        зала просто сообщите цифру или название зала нашему менеджеру!</p>
                </div>
                <div className={styles.cards}>
                    {cards.map((el, i) => (
                        <motion.div
                            onClick={() => {
                                dispatch(getHallId(i + 1))
                                dispatch(getImage(el.img))
                                dispatch(getHall(true))
                            }}
                            initial={{y: 20, opacity: 0}}
                            whileInView={{y: 0, opacity: 1}}
                            transition={{duration: 0.3, delay: i * 0.1}}
                            key={i} className={styles.card}>
                            <img
                                src={el.img}
                                alt="card"/>
                            <div>
                                <h3>{el.title}</h3>
                                    <button>Подробней</button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Halls;
