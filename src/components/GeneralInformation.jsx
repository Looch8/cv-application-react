function GeneralInformation({ name, email, phoneNumber }) {
	return (
		<section className="general-display-section">
			<div>Name: {name}</div>
			<div>Email: {email}</div>
			<div>Phone Number: {phoneNumber}</div>
		</section>
	);
}

export default GeneralInformation;
