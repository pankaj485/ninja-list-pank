import Title from "../../components/Title";
import styles from "../../styles/Ninjas.module.css";
import Link from "next/link";

// fetching the content from API and returing
// this runs before comopnent
export const getStaticProps = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = await res.json();
	return {
		props: {
			ninjas: data,
		},
	};
};

const Ninjas = (props) => {
	const { ninjas } = props;
	return (
		<div>
			<Title title="Ninjas | Listing" />
			<div>
				<h1>All ninjas</h1>
				{ninjas.map((ninja) => {
					return (
						<Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
							<a className={styles.single}>
								<h3>{ninja.name}</h3>
							</a>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Ninjas;
