import Link from "next/link";
import styles from "./page.module.css";

const HomePage = () => {
	return (
		<main className={styles.main}>
			<h1>Hello World</h1>

			<Link href="/properties">Click me</Link>
		</main>
	);
}

export default HomePage 