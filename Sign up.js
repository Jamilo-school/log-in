

        // Validation checks
        const form = document.querySelector('form');
        form.addEventListener('submit', (e) => {
          // Check if the email, password, phone, and gender fields are not empty
          if (!form.email.value || !form.password.value || !form.phone.value || !form.gender.value) {
            alert('All fields are required!^');
            e.preventDefault();
          }
      
          // Check if the email is valid
          if (!/\S+@\S+\.\S+/.test(form.email.value)) {
            alert('Please enter a valid email address!');
            e.preventDefault();
          }
      
          // Check if the password is at least 8 characters long
          if (form.password.value.length < 8) {
            alert('Password must be at least 8 characters long!');
            e.preventDefault();
          }
      
          // Check if the phone number is valid
          if (!/^\d{10}$/.test(form.phone.value)) {
            alert('Please Enter a valid phone number (10 digits)!');
            e.preventDefault();
          }
      
          });

          // Notification message creted by javascript amd cs;javascript code  starts here//

        // Create the pop up notification
var popup = document.createElement("div");
popup.classList.add("popup");

// Add the notification message to the pop up
var message = document.createTextNode("🧑‍⚕️We wish you a Happy New Year💫..Stay Safe🎗️");
popup.appendChild(message);

// Add the pop up to the page
document.body.appendChild(popup);

// Use CSS transitions to create a smooth fade in effect
popup.style.transition = "opacity 0.5s ease-in-out";
popup.style.opacity = 0;

// Show the pop up after a short delay
setTimeout(function() {
  popup.style.opacity = 1;
}, 500);

// Hide the pop up after a few seconds
setTimeout(function() {
  popup.style.opacity = 0;
}, 5000);
// Notification message creted by javascript amd cs;javascript code  ends her
      