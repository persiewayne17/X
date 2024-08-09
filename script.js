function toggleForm(formType) {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");

  if (formType === "login") {
    loginForm.style.display = "block";
    signupForm.style.display = "none";
  } else if (formType === "signup") {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
  }
}

document
  .getElementById("signup-link")
  .addEventListener("click", () => toggleForm("signup"));
document
  .getElementById("login-link")
  .addEventListener("click", () => toggleForm("login"));
document.addEventListener("DOMContentLoaded", function () {
  // credentials
  const credentials = [
    { username: "Wayne", password: "1234" },
    { username: "Benny", password: "4567" },
    { username: "Emmanuel", password: "8910" },
  ];

  // Form elements
  const loginForm = document.getElementById("login-form");
  const usernameInput = document.getElementById("login-username");
  const passwordInput = document.getElementById("login-password");
  const errorMessage = document.getElementById("error-message");

  // Login form submission event
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const enteredUsername = usernameInput.value.trim();
    const enteredPassword = passwordInput.value.trim();

    // Checking if the entered credentials match
    const user = credentials.find(
      (cred) =>
        cred.username === enteredUsername && cred.password === enteredPassword
    );

    if (user) {
      // Successful login
      alert("Login successful!");
      // window.location.href = 'dashboard.html';
    } else {
      // Invalid credentials
      errorMessage.textContent =
        "Invalid username or password. Please try again.";
      errorMessage.style.display = "block";
    }
  });

  // Hide error message when the user starts typing
  usernameInput.addEventListener("input", function () {
    errorMessage.style.display = "none";
  });
  passwordInput.addEventListener("input", function () {
    errorMessage.style.display = "none";
  });
});
