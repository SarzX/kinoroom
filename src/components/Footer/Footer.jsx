import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.wrapper}>
				<h1>
					Kino<span>Room</span>
				</h1>
				<ul>
				
				
					
					<li>
						<h3>Адрес:</h3>
					</li>
					<li>1-й Хорошёвский проезд, 12к1</li>
					<li>Беговая 1А</li>
					<li>Люсиновская улица 64</li>
					<li>Корабельная 15</li>
					<li>ул. Малая Полянка, 2</li>

					<li>
						<h3>Режим работы:</h3>Круглосуточно
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Footer
