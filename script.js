


function sendMail(event) {
  event.preventDefault(); 
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("title").value,
    message: document.getElementById("msg").value,
  };

  emailjs.send("service_noj1tdw", "template_dy3kbs9", parms)
    .then(function(response) {
      alert("Email sent successfully!");
      console.log("SUCCESS!", response.status, response.text);
    }, function(error) {
      alert("Failed to send email. Please try again.");
      console.log("FAILED...", error);
    });
}
