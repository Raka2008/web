// Mengambil elemen
const showPasswordCheckbox = document.getElementById("showPassword");
const passwordInput = document.getElementById("password");
const loginForm = document.getElementById("loginForm");

// Menambahkan event listener untuk checkbox
showPasswordCheckbox.addEventListener("change", function () {
  passwordInput.type = this.checked ? "text" : "password";
});
