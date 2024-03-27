const dayInput = document.querySelector("#day");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");

const button = document.querySelector("#button");

button.addEventListener("click", event => {
    // Test <span> content can be updated
    document.getElementById("years").textContent = "42";
    document.getElementById("months").textContent = "41";
    document.getElementById("days").textContent = "40";
});