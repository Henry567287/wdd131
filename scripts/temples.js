const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const today = new Date();
currentYear.textContent = today.getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`;

const hambButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hambButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hambButton.classList.toggle('open');
})
