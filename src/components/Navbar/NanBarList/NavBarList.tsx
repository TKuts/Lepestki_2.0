import styles from "./NavBarList.module.css"

interface PropsList {
	list: string[]
}

const NavBarList = ({ list }: PropsList) => {
	return (
		<ul>
			<ul className={styles.meny__list}>
				{
					list.map(string => (
						<li>{string}</li>
					))
				}
			</ul>
		</ul>
	)
}

export default NavBarList