export default function validateForm({ userName, email, subject, message }) {
	if (!userName.trim()) {
		return 'Name required';
	}
	// else if (!/^[A-Za-z]+/.test(name.trim())) {
	//   errors.name = 'Enter a valid name';
	// }

	const regex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!email) {
		return 'Email required';
	} else if (regex.test(email.toLocalLowerCase)) {
		return 'Email address is invalid';
	}
	if (!subject) {
		return 'Subject is required';
	} 

	if (!message) {
		return 'Message is required';
	} 
	return null;
}