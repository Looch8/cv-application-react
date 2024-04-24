import { useState } from "react";

function General() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [displayContent, setDisplayContent] = useState(false);

	const handleClick = () => setDisplayContent(true);

	return (
		<>
			<ul>
				<li>
					<input
						type="text"
						value={firstName}
						placeholder="First Name"
						onChange={(event) => {
							setFirstName(event.target.value);
						}}
					></input>
				</li>
				<li>
					<input
						type="text"
						value={lastName}
						placeholder="Last Name"
						onChange={(event) => {
							setLastName(event.target.value);
						}}
					></input>
				</li>
				<li>
					<input
						type="email"
						value={email}
						placeholder="Email"
						onChange={(event) => {
							setEmail(event.target.value);
						}}
					></input>
				</li>
				<li>
					<input
						type="tel"
						value={phoneNumber}
						placeholder="Phone Number"
						onChange={(event) => {
							setPhoneNumber(event.target.value);
						}}
					></input>
				</li>
			</ul>
			<button onClick={handleClick}>Submit</button>

			{displayContent && (
				<div className="general-information">
					<h2>General Information</h2>
					<ul>
						<li>First Name: {firstName}</li>
						<li>Last Name: {lastName}</li>
						<li>Email: {email}</li>
						<li>Phone Number: {phoneNumber}</li>
					</ul>
				</div>
			)}
		</>
	);
}

export { General };
