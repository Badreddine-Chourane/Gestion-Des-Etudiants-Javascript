const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const loginResult = document.getElementById("loginResult");

const usersTable = [
  { email: "admin@gmail.com", password: "123456", name: "Admin User", role: "Admin" },
  { email: "editor@gmail.com", password: "123456", name: "Editor User", role: "Editor" },
  { email: "viewer@gmail.com", password: "123456", name: "Viewer User", role: "Viewer" },
];

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();


  const user = usersTable.find((u) => u.email === email && u.password === password);

  if (user) {

    loginResult.style.color = "green";
    loginResult.textContent = `Login successful! Welcome, ${user.name} (${user.role}).`;

    setTimeout(() => {
      window.location.href = "index.html";
    }, 1500);
  } else {

    loginResult.style.color = "red";
    loginResult.textContent = "Invalid email or password.";
  }
});
