import { useState } from "react";

function General() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	return (
		<>
			<div className="general-information">
				<h2>General Information</h2>
				<p>Name: </p>
				<p>Email: </p>
				<p>Phone Number: </p>
			</div>
		</>
	);
}

export { General };
