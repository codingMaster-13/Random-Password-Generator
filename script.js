const inputBox = {
  input: document.querySelector(".inputBox input"),
  button: document.querySelector(".inputBox button"),
};
inputBox.button.onclick = () => {
  if (inputBox.input.value !== "") {
    navigator.clipboard.writeText(inputBox.input.value);
  }
};
const generateButton = document.querySelector(".generateButton");
const option = document.querySelectorAll(".option");
const character = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  number: "1234567890",
  symbol: "!@#$%^&*()",
};
const lenInput = document.querySelector(".lengthBox input");
lenInput.oninput = () => {
  document.querySelector(".lengthBox input+span").innerHTML =
    lenInput.value < 10 ? `0${lenInput.value}` : lenInput.value;
};
const generatePassword = (len, char) => {
  let password = "";
  for (let i = 0; i < len; i++) {
    const randomIndex = Math.floor(Math.random() * char.length);
    password += char[randomIndex];
  }
  return password;
};
generateButton.onclick = () => {
  let allCharacter;
  option.forEach((opt) => {
    if (opt.checked) {
      allCharacter = character[opt.id];
    }
  });
  inputBox.input.value = generatePassword(lenInput.value, allCharacter);
  DefaultPassword = generateButton(lenInput.value, allCharacter);
};