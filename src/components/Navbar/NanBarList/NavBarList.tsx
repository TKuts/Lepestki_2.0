import styles from "./NavBarList.module.css"

interface PropsList {
	list: string[]
}

const NavBarList = ({ list }: PropsList) => {
	return (
		<ul className={styles.meny__list}>
			{
				list.map(string => (
					<li key={string}>{string}</li>
				))
			}
		</ul>
	)
}

export default NavBarList