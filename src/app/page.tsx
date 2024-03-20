import Link from 'next/link'
import styles from "./page.module.css";

import BodyTitle from '@/components/Title/Title';

const HomePage = () => {
	return (
		<main className={styles.main}>
			<BodyTitle/>
			<h1>Hello World</h1>
			<Link href="properties">Click</Link>
		</main>
	);
}

export default HomePage 