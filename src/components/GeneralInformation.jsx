import { useState } from "react";

function GeneralInformation({ name, email, phoneNumber }) {
	return (
		<section className="general-display-section">
			<h2>General Information</h2>
			<p>Name: {name}</p>
			<p>Email: {email}</p>
			<p>Phone Number: {phoneNumber}</p>
		</section>
	);
}

export default GeneralInformation;
