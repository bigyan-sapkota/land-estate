const contactForm = document.getElementById("contact-form");

const nameInput = document.getElementById("input-name");
const nameError = document.getElementById("name-error");

const emailInput = document.getElementById("input-email");
const emailError = document.getElementById("email-error");

const messageInput = document.getElementById("input-message");
const messageError = document.getElementById("message-error");

const slangWords = ["kursi", "remote", "charger"];
const notAllowedSurname = ["acharya", "neupane", "sapkota"];

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let nameInputValue = nameInput.value;
  const nameInputSplittedValue = nameInputValue.split(" ");
  const nameInputSurname = nameInputSplittedValue[1];
  let emailInputValue = emailInput.value;
  let messageInputValue = messageInput.value;

  if (nameInputValue.length < 2) {
    nameError.textContent = "Your name must be 2 characters long";
  }

  if (slangWords.includes(nameInputValue)) {
    nameError.textContent = "The name contains slang word";
  }

  if (notAllowedSurname.includes(nameInputSurname)) {
    nameError.textContent =
      "Sorry the surname matches. You can't submit the form";
  }

  console.log("message sent");

  //   clean up code
  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";
});
