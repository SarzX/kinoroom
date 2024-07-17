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
						<h1>Наши контакты:</h1>
						</li>
				
					<li>
					    <h2>WhatsUp: +79159391426</h2>
						</li>
					
					<li>
						<h3>Адрес:</h3>
					</li>
					<li>Большой Николопесковский переулок, 13</li>
					<li>Моховая улица, 11с12</li>
					<li>улица Ильинка, 3/8с1</li>
					<li>Малый Ивановский переулок, 2-4с15</li>
					<li>улица Большая Якиманка, 17/2с2</li>
					<li>Шереметьевская улица, 1к2</li>
					<li>7-я Кожуховская улица, 9</li>
					<li>2-й кожевнический переулок 7а </li>
					<li>
						<h3>Режим работы:</h3>Круглосуточно
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Footer
