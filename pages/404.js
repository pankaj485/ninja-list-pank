import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Title from "../components/Title";
const NotFound = () => {
	const router = useRouter();

	// redirecting to homepage after 3 secs
	// it needs useRouter and userEffect hooks
	useEffect(() => {
		setTimeout(() => {
			// setting up the link to push after time interval
			router.push("/");
		}, 3000);
	}, []);

	return (
		<div>
			<Title title="Ninjas | Not Found" />

			<div className="not-found">
				<h1>Oops</h1>
				<h2>Page cannot be found.</h2>
				<p>
					Go back to
					<Link href="/">
						<a> Homepage</a>
					</Link>
				</p>
			</div>
		</div>
	);
};

export default NotFound;
