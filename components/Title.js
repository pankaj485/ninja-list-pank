import Head from "next/head";

const Title = (props) => {
	const { title } = props;
	return (
		<Head>
			<title> {title} </title>
		</Head>
	);
};

export default Title;
