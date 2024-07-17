import { motion } from 'framer-motion'
import React from 'react'
import Container from '../Container/Container.jsx'
import styles from './Home.module.css'

const Home = () => {
	return (
		<div className={styles.home}>
			<Container>
				<div className={styles.homeBg}>
					<div className={styles.homeBg_item}></div>
				</div>
				<div className={styles.navbar}>
					<div className={styles.navbar_inner}>
						<motion.div
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							className={styles.logo}
						>
							Kino<span>Room</span>
						</motion.div>
					</div>
				</div>
				<motion.div
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					className={styles.main}
				>
					<motion.h4
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.3, delay: 3 * 0.1 }}
					>
						АНТИКИНОТЕАТР
					</motion.h4>
					<motion.h1
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.3, delay: 2 * 0.1 }}
					>
						Kino<span>Room</span>
					</motion.h1>
					<p style={{ marginBottom: '20px' }}>
						Мы работаем только если вы бронируете заранее, просто прийти и зайти
						не получится
					</p>
					<motion.a
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.3, delay: 1 * 0.1 }}
						href='#halls'
					>
						<button className={styles.button}>Выбрать свой зал</button>
					</motion.a>
				</motion.div>
			</Container>
		</div>
	)
}

export default Home
