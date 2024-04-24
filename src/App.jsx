import { useState } from "react";
import { General } from "./components/General";
import { Education } from "./components/Education";

import "./App.css";

function App() {
	return (
		<>
			<h1>CV Application</h1>
			<General />
		</>
	);
}

// Think about how to structure your application into components. Your application should include:
// A section to add general information like name, email and phone number.
// A section to add your educational experience (school name, title of study and date of study)
// A section to add practical experience (company name, position title, main responsibilities of your jobs, date from and until when you worked for that company)

export default App;
