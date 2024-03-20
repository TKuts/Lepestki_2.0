import styles from "./NavBarList.module.css"

interface PropsList {
	list: string[]
}

const NavBarList = ({ list }: PropsList) => {
	return (
		<ul className={styles.meny__list}>
			{
				list.map(string => (
					<li className={styles.menu__item} key={string}>{string}</li>
				))
			}
		</ul>
	)
}

export default NavBarList