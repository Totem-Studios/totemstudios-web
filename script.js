document
  .getElementById("subscription-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    var emailInput = document.getElementById("email");
    var email = emailInput.value;
    var messageElement = document.getElementById("message");

    if (validateEmail(email)) {
      // Email is valid - here you could add your form submission logic
      messageElement.textContent = "Thank you for subscribing!";
      messageElement.style.color = "green";
      emailInput.value = ""; // Clear the input field
    } else {
      // Email is invalid
      messageElement.textContent = "Please enter a valid email address.";
      messageElement.style.color = "red";
    }
  });

function validateEmail(email) {
  // Simple email validation regex
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
