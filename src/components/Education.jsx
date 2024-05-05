export default function Education({ school, titleOfStudy, dateOfStudy }) {
	return (
		<section className="education-display-section">
			<h2>Education</h2>
			<p>School Name: {school}</p>
			<p>Title of Study: {titleOfStudy}</p>
			<p>Date of Study: {dateOfStudy}</p>
		</section>
	);
}
