import styles from "./Navbar.module.css"
import NavBarList from "./NanBarList/NavBarList"
import Image from 'next/image'
import Logo from "../../../public/logo.svg"

const NavBar = () => {
	return (
		<nav className={styles.nav}>
			<NavBarList list={["Головна", "Про нас", "Послуги"]} />
			<Image src={Logo} alt="Logo" />
			<NavBarList list={["Приклади робіт", "Відгуки", "Контакти"]} />
		</nav>
	)
}

export default NavBar