import { fetchData, getFormData, showMessage } from "./account.js";

const signUpForm = document.querySelector("#sign-up-form");
const signInForm = document.querySelector("#sign-in-form");

const signUpMessage = document.querySelectorAll(".message")[0];
const signInMessage = document.querySelectorAll(".message")[1];
const url = "http://localhost:3000/";

async function callback(e) {
  e.preventDefault();

  const data = getFormData(this);
  const messageElement =
    this.id === "sign-up-form" ? signUpMessage : signInMessage;

  if (data.email === "" || data.password === "") {
    showMessage(
      messageElement,
      "fail",
      "email or password can't be empty!",
      url
    );
    return;
  }

  let res;
  if (this.id === "sign-up-form") {
    res = await fetchData(`${url}signUp`, data);
  } else {
    res = await fetchData(`${url}signIn`, data);
  }
  showMessage(messageElement, res.status, res.data, url);
}

if (signUpForm) {
  signUpForm.addEventListener("submit", callback);
}

if (signInForm) {
  signInForm.addEventListener("submit", callback);
}
