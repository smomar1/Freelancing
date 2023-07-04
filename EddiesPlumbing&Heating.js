// Function to validate the form inputs
function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var service = document.getElementById("service").value;

  // Perform basic validation
  if (name.trim() === "" || email.trim() === "" || phone.trim() === "" || service.trim() === "") {
    alert("Please fill in all required fields.");
    return false;
  }

  // Additional validation can be added here if needed

  return true;
}

// Add event listener to the form submission
document.getElementById("lead-form").addEventListener("submit", function(event) {
  // Prevent the default form submission
  event.preventDefault();

  // Validate the form inputs
  if (validateForm()) {
    // Submit the form
    this.submit();
  }
});
