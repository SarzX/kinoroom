import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { getHall } from '../../store/slices/HallSlice.js'
import styles from './HallPayment.module.css'

const HallPayment = () => {
	const isHall = useSelector(state => state.hall.value)
	const isHallId = useSelector(state => state.hall.id)
	const isHallImage = useSelector(state => state.hall.image)
	const dispatch = useDispatch()
	const [activeIndex, setActiveIndex] = useState(null)
	const [type, setType] = useState('')
	const paymentLinks = {
		basic: 'https://wa.me/79159391426?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%F0%9F%91%8B%20%D0%A5%D0%BE%D1%82%D0%B5%D0%BB%D0%BE%D1%81%D1%8C%20%D0%B1%D1%8B%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20%D0%B7%D0%B0%D0%BB%20%D0%B2%20%D0%B2%D0%B0%D1%88%D0%B5%D0%BC%20%D0%B7%D0%B0%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B8',
		normal: 'https://wa.me/79159391426?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%F0%9F%91%8B%20%D0%A5%D0%BE%D1%82%D0%B5%D0%BB%D0%BE%D1%81%D1%8C%20%D0%B1%D1%8B%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20%D0%B7%D0%B0%D0%BB%20%D0%B2%20%D0%B2%D0%B0%D1%88%D0%B5%D0%BC%20%D0%B7%D0%B0%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B8',
		vip: 'https://wa.me/79159391426?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%F0%9F%91%8B%20%D0%A5%D0%BE%D1%82%D0%B5%D0%BB%D0%BE%D1%81%D1%8C%20%D0%B1%D1%8B%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20%D0%B7%D0%B0%D0%BB%20%D0%B2%20%D0%B2%D0%B0%D1%88%D0%B5%D0%BC%20%D0%B7%D0%B0%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B8',
		ultraVip: 'https://wa.me/79159391426?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%F0%9F%91%8B%20%D0%A5%D0%BE%D1%82%D0%B5%D0%BB%D0%BE%D1%81%D1%8C%20%D0%B1%D1%8B%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20%D0%B7%D0%B0%D0%BB%20%D0%B2%20%D0%B2%D0%B0%D1%88%D0%B5%D0%BC%20%D0%B7%D0%B0%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B8',
	}

	const cards = [
		{
			img: 'https://optim.tildacdn.com/tild3462-3864-4139-b532-323839643434/-/resize/500x400/-/format/webp/IMG_9887-HDR-2.jpg',
			title: 'КИНО-СВИДАНИЕ',
			time: '2 часа',
			pay: '2 500 руб',
			paymentType: 'basic',
		},
		{
			img: 'https://optim.tildacdn.com/tild3963-6338-4666-b030-643233323435/-/resize/500x400/-/format/webp/1.jpg',
			title: 'КИНО-СВИДАНИЕ',
			time: '4 часа',
			pay: '3 500 руб',
			paymentType: 'normal',
		},
		{
			img: 'https://optim.tildacdn.com/tild3732-3933-4064-b965-363034623266/-/resize/500x400/-/format/webp/IMG_0269-HDR.jpg',
			title: 'КИНО-СВИДАНИЕ',
			time: '6 часа',
			pay: '5000 руб',
			paymentType: 'vip',
		},
		{
			img: 'https://optim.tildacdn.com/tild6366-3834-4337-a330-303962663432/-/resize/500x400/-/format/webp/photo_2023-11-08_15-.jpg',
			title: 'КИНО-НОЧЬ',
			time: '9 часа',
			pay: '10 000 руб',
			paymentType: 'ultraVip',
		},
	]
	return (
		isHall && (
			<div className={styles.hallPayment}>
				<motion.div
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.4 }}
					className={styles.card}
				>
					<img src={isHallImage} alt='hall' />
					<div className={styles.card_content}>
						<motion.h1
							initial={{ opacity: 0, y: -100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, delay: 1 * 0.1 }}
						>
							Зал №{isHallId}
						</motion.h1>
						<motion.p
							initial={{ opacity: 0, y: -100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, delay: 2 * 0.1 }}
						>
							2-4 гостя (Цена за зал)
						</motion.p>
						<motion.p
							initial={{ opacity: 0, y: -100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, delay: 3 * 0.1 }}
						>
							Зал рассчитан на 2-4 гостя. Идеальный вариант для кино-свидания в
							приватной обстановке. Два мягких дивана канапе и пуфы.
						</motion.p>
						<ul className={styles.card_hall}>
							{cards.map((el, i) => (
								<motion.li
									initial={{ opacity: 0, y: -100 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3, delay: i * 0.1 }}
									id={el.type}
									key={i}
									onClick={() => {
										setActiveIndex(i === activeIndex ? null : i)
										setType(el.paymentType)
									}}
									className={
										i === activeIndex
											? `${styles.card_hall__item} ${styles.active}`
											: styles.card_hall__item
									}
								>
									<div className={styles.card_hall__img}>
										<img src={el.img} alt='hall' />
									</div>
									<div className={styles.card_hall__content}>
										<h3>{el.title}</h3>
										<p>{el.time}</p>
										<h3>{el.pay}</h3>
									</div>
								</motion.li>
							))}
						</ul>
					</div>
					<div className={styles.form}>
						<div className={styles.form_item}>
							<div className={styles.form__title}>Выберите город:</div>
							<select>
								<option value='Брест'>
									Большой Николопесковский переулок, 13
								</option>
								<option value='Гомель'>Моховая улица, 11с12</option>
								<option value='Минск'>улица Ильинка, 3/8с1</option>
								<option value='Минск'>Малый Ивановский переулок, 2-4с15</option>
								<option value='Минск'>улица Большая Якиманка, 17/2с2</option>
								<option value='Минск'>Шереметьевская улица, 1к2</option>
								<option value='Минск'>7-я Кожуховская улица, 9</option>
								<option value='Минск'>2-й кожевнический переулок 7а</option>
							</select>
						</div>
						<div className={styles.form_item}>
							<div className={styles.form__title}>Выберите дату:</div>
							<input type='date' />
						</div>
						<div className={styles.form_item}>
							<select
								name='bookingtime'
								className='bookingtime bookingform-input'
								required=''
							>
								<option disabled='true' value='00:00'>
									00:00
								</option>
								<option disabled='true' value='01:00'>
									01:00
								</option>
								<option disabled='true' value='02:00'>
									02:00
								</option>
								<option disabled='true' value='03:00'>
									03:00
								</option>
								<option disabled='true' value='04:00'>
									04:00
								</option>
								<option value='05:00'>05:00</option>
								<option value='06:00'>06:00</option>
								<option value='07:00'>07:00</option>
								<option value='08:00'>08:00</option>
								<option value='09:00'>09:00</option>
								<option value='10:00'>10:00</option>
								<option value='11:00'>11:00</option>
								<option value='12:00'>12:00</option>
								<option value='13:00'>13:00</option>
								<option value='14:00'>14:00</option>
								<option value='15:00'>15:00</option>
								<option value='16:00'>16:00</option>
								<option value='17:00'>17:00</option>
								<option value='18:00'>18:00</option>
								<option value='19:00'>19:00</option>
								<option value='20:00'>20:00</option>
								<option value='21:00'>21:00</option>
								<option value='22:00'>22:00</option>
								<option value='23:00'>23:00</option>
							</select>
						</div>
						<div className={styles.form_item}>
							<div className={styles.form__title}>Введите ваше имя:</div>
							<input type='text' placeholder='Имя' />
						</div>
						<div className={styles.form_item}>
							<div className={styles.form__title}>
								Введите ваш номер телефона:
							</div>
							<input type='number' placeholder='Номер' />
						</div>
						<div className={styles.form_item}>
							<a href={paymentLinks[type]}>
								<button className={styles.button}>Забронировать</button>
							</a>
						</div>
					</div>
					<div
						className={styles.card__close}
						onClick={() => dispatch(getHall(false))}
					>
						<IoCloseCircleOutline />
					</div>
				</motion.div>
			</div>
		)
	)
}

export default HallPayment
