const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();

currentYear.textContent = today.getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`;


const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector("#menu");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
});