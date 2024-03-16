import styles from "./Navbar.module.css"

const NavBar = () => {
	return (
		<nav>
			<ul className={styles.meny__list}>
				<li>Головна</li>
				<li>Про нас</li>
				<li>Послуги</li>
			</ul>
			<ul>
				<li>Приклади робіт</li>
				<li>Відгуки</li>
				<li>Контакти</li>
			</ul>

		</nav>
		// <header className="header">
		// 	<div className="header__container">
		// 		<div className="header__menu menu">
		// 			<button type="button" className="menu__icon icon-menu">
		// 				<span></span>
		// 			</button>
		// 			<nav className="menu__body">
		// 				<ul className="menu__list">
		// 					<li className="menu__item">
		// 						<a href="#" className="menu__link" data-goto=".hero">
		// 							Головна
		// 						</a>
		// 					</li>
		// 					<li className="menu__item">
		// 						<a href="#" className="menu__link" data-goto=".about">
		// 							Про нас
		// 						</a>
		// 					</li>
		// 					<li className="menu__item">
		// 						<a href="#" className="menu__link" data-goto=".services--hero">
		// 							Послуги
		// 						</a>
		// 					</li>


		// 					<div className="header__logo" data-da=".header__container, 767.98,0" data-goto=".hero">
		// 						{/* <img src="@img/logo.svg" alt="logo"> */}
		// 						<p className="header__logo-text">студія флористики</p>
		// 					</div>


		// 					<li className="menu__item">
		// 						<a href="#" className="menu__link" data-goto=".example">
		// 							Приклади робіт
		// 						</a>
		// 					</li>
		// 					<li className="menu__item">
		// 						<a href="#" className="menu__link" data-goto=".reviews">
		// 							Відгуки
		// 						</a>
		// 					</li>
		// 					<li className="menu__item">
		// 						<a href="#" className="menu__link" data-goto=".footer">
		// 							Контакти
		// 						</a>
		// 					</li>


		// 				</ul>
		// 			</nav>
		// 		</div>

		// 	</div>
		// </header>
	)
}

export default NavBar