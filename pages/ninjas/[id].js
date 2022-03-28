import Title from "../../components/Title";
export const getStaticPaths = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = await res.json();

	const paths = data.map((ninja) => {
		return {
			params: { id: ninja.id.toString() },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const id = context.params.id;
	const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
	const data = await res.json();

	return {
		props: { ninja: data },
	};
};

const Details = (props) => {
	const { ninja } = props;
	return (
		<div>
			<Title title={`Ninja | ${ninja.id}`} />

			<div>
				<h1>{ninja.name}</h1>
				<p>{ninja.email}</p>
				<p>{ninja.website}</p>
				<p>{ninja.address.city}</p>
			</div>
		</div>
	);
};

export default Details;
