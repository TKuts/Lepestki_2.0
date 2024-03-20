import styles from "./Navbar.module.css"
import NavBarList from "./NanBarList/NavBarList"
import Image from 'next/image'
import Logo from "../../../public/logo.svg"

const NavBar = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<NavBarList list={["Головна", "Про нас", "Послуги"]} />
				<div>
					<Image className={styles.logo} src={Logo} alt="Logo" />
					<p className={styles.logo__text}>студія флористики</p>
				</div>
				<NavBarList list={["Приклади робіт", "Відгуки", "Контакти"]} />
			</nav>
		</header>

	)
}

export default NavBar