// send post request to backend
export async function fetchData(url, data) {
  try {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, requestOptions);

    if (!response.ok && !`${response.status}`.startsWith("4")) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("There was a problem with the POST request:", error);
  }
}

export function getFormData(form) {
  const emailField = form.querySelector(".data-email");
  const passwordField = form.querySelector(".data-password");
  const email = emailField.value;
  const password = passwordField.value;

  emailField.value = "";
  passwordField.value = "";

  return { email, password };
}

export function showMessage(message, status, description, url) {
  if (status === "success") {
    window.location.href = `${url}member`;
    return;
  }

  message.style.display = "block";
  message.textContent = description;

  setTimeout(() => (message.style.display = "none"), 2000);
}
