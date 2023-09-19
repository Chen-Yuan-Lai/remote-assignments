const signUpForm = document.querySelector("#sign-up-form");
const signInForm = document.querySelector("#sign-in-form");

const signUpMessage = document.querySelectorAll(".message")[0];
const signInMessage = document.querySelectorAll(".message")[1];

async function fetchData(url, data) {
  try {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      console.error(response.status);
      throw new Error("Network response was not ok");
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("There was a problem with the POST request:", error);
  }
}

if (signUpForm) {
  signUpForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const emailField = document.querySelector("#sign-up-email");
    const passwordField = document.querySelector("#sign-up-password");
    const email = emailField.value;
    const password = passwordField.value;
    const data = { email, password };
    const url = "http://localhost:3000/sign-up";
    console.log(data);

    const result = await fetchData(url, data);
    signUpMessage.textContent = result.description;

    signUpMessage.style.display = "";
    if (result.status === "success") {
      signUpMessage.style.backgroundColor = "green";
      window.location.href = "http://localhost:3000/member";
    } else {
      signUpMessage.style.backgroundColor = "red";
    }

    emailField.value = "";
    passwordField.value = "";
  });
}

if (signInForm) {
  signInForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const emailField = document.querySelector("#sign-in-email");
    const passwordField = document.querySelector("#sign-in-password");
    const email = emailField.value;
    const password = passwordField.value;
    const data = { email, password };
    console.log(data);
    const url = "http://localhost:3000/sign-in";

    const result = await fetchData(url, data);
    signInMessage.textContent = result.description;

    signInMessage.style.display = "";
    if (result.status === "success") {
      signInMessage.style.backgroundColor = "green";
      window.location.href = "http://localhost:3000/member";
    } else {
      signInMessage.style.backgroundColor = "red";
    }

    emailField.value = "";
    passwordField.value = "";
  });
}
