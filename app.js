const form = document.querySelector("form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const captcha = document.querySelector("#captcha");
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  const captchaValue = captcha.value.trim();
  if (usernameValue === "") {
    setError(username, "Username is required");
  } else if (usernameValue.length < 5) {
    setError(username, "Minimum Username length is 5");
  } else {
    setSucess(username);
  }
  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!emailRegex.test(emailValue)) {
    setError(email, "Provide a correct email");
  } else {
    setSucess(email);
  }
  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (!passwordRegex.test(passwordValue)) {
    setError(
      password,
      "Password must have uppercase, lowercase and special characters"
    );
  } else {
    setSucess(password);
  }
  if (password2Value === "") {
    setError(password2, "Please confirm password");
  } else if (password2Value !== passwordValue) {
    setError(password2, "Password does not match");
  } else {
    setSucess(passwordValue);
  }
  if (captchaValue === "") {
    setError(captcha, "Authentication Failed");
  } else {
    setSucess(captcha);
  }
}
function setError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.textContent = message;
}
function setSucess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
// captcha value
captcha.addEventListener("input", (e) => {
  const img = document.querySelector("img");
  const text = e.target.value;
  const blurValue = 20 - text.length * 2;
  img.style.filter = `blur(${blurValue}px)`;
  if (blurValue <= 0) {
    setSucess(captcha);
  } else {
    setError(captcha, "Text is not long enough");
  }
});

const showBtn = document.querySelector(".show-btn");
showBtn.addEventListener("click", () => {
  const inputType = password.type;
  if (inputType === "password") {
    password.type = "text";
    showBtn.innerHTML = `<i class="bi bi-eye-slash-fill"></i>`;
  } else {
    password.type = "password";
    showBtn.innerHTML = `<i class="bi bi-eye"></i>`;
  }
});

const showBtn2 = document.querySelector(".show-btn2");
showBtn2.addEventListener("click", () => {
  const inputType = password.type;
  if (inputType === "password") {
    password.type = "text";
    showBtn2.innerHTML = `<i class="bi bi-eye-slash-fill"></i>`;
  } else {
    password.type = "password";
    showBtn2.innerHTML = `<i class="bi bi-eye"></i>`;
  }
});
