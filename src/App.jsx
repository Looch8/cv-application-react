import { useState } from "react";
import "./App.css";
import GeneralInformation from "./components/GeneralInformation";
import Education from "./components/Education";

function App() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [school, setSchool] = useState("");
	const [titleOfStudy, setTitleOfStudy] = useState("");
	const [dateOfStudy, setDateOfStudy] = useState("");
	const [submitted, setSubmitted] = useState(false);

	function handleNameChange(e) {
		setName(e.target.value);
	}

	function handleEmailChange(e) {
		setEmail(e.target.value);
	}

	function handlePhoneChange(e) {
		setPhoneNumber(e.target.value);
	}

	function handleSchoolChange(e) {
		setSchool(e.target.value);
	}

	function handleStudyChange(e) {
		setTitleOfStudy(e.target.value);
	}
	function handleStudyDateChange(e) {
		setDateOfStudy(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault(e);
		setSubmitted(true);
	}

	return (
		<div className="container">
			<form onSubmit={handleSubmit}>
				<h2>General Information</h2>
				<input
					type="text"
					placeholder="Name"
					value={name}
					onChange={handleNameChange}
				></input>
				<input
					type="text"
					placeholder="Email"
					value={email}
					onChange={handleEmailChange}
				></input>
				<input
					type="tel"
					placeholder="Phone Number"
					value={phoneNumber}
					onChange={handlePhoneChange}
				></input>

				<h2>Education</h2>
				<input
					type="text"
					placeholder="School"
					value={school}
					onChange={handleSchoolChange}
				></input>
				<input
					type="text"
					placeholder="Title of Study"
					value={titleOfStudy}
					onChange={handleStudyChange}
				></input>
				<input
					type="text"
					placeholder="Date of Study"
					value={dateOfStudy}
					onChange={handleStudyDateChange}
				></input>

				<button type="submit">Submit</button>
			</form>
			<div className="display-container">
				{submitted && (
					<GeneralInformation
						name={name}
						email={email}
						phoneNumber={phoneNumber}
					/>
				)}
				{submitted && (
					<Education
						school={school}
						titleOfStudy={titleOfStudy}
						dateOfStudy={dateOfStudy}
					/>
				)}
			</div>
		</div>
	);
}

export default App;

// Think about how to structure your application into components. Your application should include:

// A section to add practical experience (company name, position title, main responsibilities of your jobs, date from and until when you worked for that company)
// Be sure to include an edit and submit button for each section or for the whole CV. The submit button should submit your form and display the value of your input fields in HTML elements. The edit button should add back (display) the input fields, with the previously displayed information as values. In those input fields, you should be able to edit and resubmit the content. You’re going to make heavy use of state and props, so make sure you understood those concepts.
// Create a components directory under your src directory and add your components.
// Include a styles directory under your src directory for your CSS files. You’ll need to import these in the component files to use them.
// Push the results and deploy them with any of the options mentioned below. At this point of the curriculum, it doesn’t matter which platform you choose as long as your project is live on the internet!
