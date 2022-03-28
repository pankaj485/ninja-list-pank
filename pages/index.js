import styles from "../styles/Home.module.css";
import Link from "next/dist/client/link";
import Title from "../components/Title";

export default function Home() {
	return (
		<div>
			<Title title="Ninjas | Home" />

			<div className={styles.container}>
				<h1 className={styles.title}> Homepage </h1>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam rem porro
					magni facere perspiciatis consequuntur! Eligendi, quae a cupiditate
					provident nulla doloremque esse, laborum, aspernatur omnis commodi
					odio optio dolorem!
				</p>
				<Link href="/ninjas">
					<a className={styles.btn}> see Ninja Listing </a>
				</Link>
			</div>
		</div>
	);
}
