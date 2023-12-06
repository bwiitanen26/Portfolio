const form = document.querySelector("form");
const fullName = document.getElementById("contact-name");
const email = document.getElementById("contact-email");
const subject = document.getElementById("contact-subject");
const formMessage = document.getElementById("contact-message");

function sendEmail() {
	if (fullName.value != "" && email.value != "" && subject.value != "" && formMessage.value != "") {
		const bodyMessage = `Full Name: ${fullName.value}<br><br> Email: ${email.value}<br><br> Subject: ${subject.value}<br><br> Message: ${formMessage.value}`;

		Email.send({
			Host: "smtp.elasticemail.com",
			Username: "bwiitanen26@gmail.com",
			Password: "7A158DF4DA8FF4515FA031B7CA529B1D50EF",
			To: "bwiitanen26@gmail.com",
			From: "bwiitanen26@gmail.com",
			Subject: "Email from Portfolio Website",
			Body: bodyMessage,
		}).then((message) => alert("Message Sent"));

		fullName.value = "";
		email.value = "";
		subject.value = "";
		formMessage.value = "";
	} else {
		alert("All Fields must be Filled");
	}
}

form.addEventListener("submit", (e) => {
	e.preventDefault();

	sendEmail();
});
