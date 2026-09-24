const temperatureValue = document.querySelector("#temperature-value");
const windSpeedValue = document.querySelector("#wind-speed-value");
const windChill = document.querySelector("#wind-chill");

const temperature = Number.parseFloat(temperatureValue.textContent);
const windSpeed = Number.parseFloat(windSpeedValue.textContent);

function calculateWindChill(temp, speed) {
    return 13.12 + 0.6215 * temp - 11.37 * speed ** 0.16 + 0.3965 * temp * speed ** 0.16;
}

if (temperature <= 10 && windSpeed > 4.8) {
    const computedChill = calculateWindChill(temperature, windSpeed);
    windChill.textContent = `${computedChill.toFixed(1)} °C`;
} else {
    windChill.textContent = "N/A";
}

document.querySelector("#current-year").textContent = new Date().getFullYear();
document.querySelector("#last-modified").textContent = document.lastModified;