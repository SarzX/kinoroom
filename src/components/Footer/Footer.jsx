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
					<h2><a href="https://api.whatsapp.com/send/?phone=79159391426&text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82%21+%EF%BF%BD+%D0%A5%D0%BE%D1%82%D0%B5%D0%BB%D0%BE%D1%81%D1%8C+%D0%B1%D1%8B+%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C+%D0%B7%D0%B0%D0%BB+%D0%B2+%D0%B2%D0%B0%D1%88%D0%B5%D0%BC+%D0%B7%D0%B0%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B8&type=phone_number&app_absent=0">&#x1F4F1; +79159391426</a></h2>
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
