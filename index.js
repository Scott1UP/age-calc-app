const dayInput = document.querySelector("#day");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");
const button = document.querySelector("#button");
const currentDate = new Date();

// getDateDifference function
function getDateDifference(userDate, currentDate) {
    // Parse the dates
    const start = new Date(userDate);
    const end = new Date(currentDate);

    // Calculate the difference in milliseconds
    const differenceInMs = end - start;

    // Convert milliseconds to years, months, and days
    const msInDay = 1000 * 60 * 60 * 24;
    const msInYear = msInDay * 365.25;
    const years = Math.floor(differenceInMs / msInYear);
    const remainingMs = differenceInMs % msInYear;
    const months = Math.floor(remainingMs / (msInDay * 30.44));
    const days = Math.floor((remainingMs % (msInDay * 30.44)) / msInDay);

    return { years, months, days };
}

button.addEventListener("click", event => {
    const userDate = `${yearInput.value}-${monthInput.value}-${dayInput.value}`;
    const difference = getDateDifference(userDate, currentDate);

    function validateFields(yearInput, monthInput, dayInput) {
        let counter = 0 ;
        if (yearInput.value >= currentDate.getFullYear()) {
            document.getElementById("error-year-label").textContent = "Must be in the past";
        }
        else {
            document.getElementById("error-year-label").textContent = "";
            document.getElementById("years").textContent = difference.years;
        }
    
        if (monthInput.value > 12) {
            document.getElementById("error-month-label").textContent = "Must be a valid month";
        }
        else {
            document.getElementById("error-month-label").textContent = "";
            document.getElementById("months").textContent = difference.months;
        }
    
        if (dayInput.value > 31) {
            document.getElementById("error-day-label").textContent = "Must be a valid day";
        }
        else {
            document.getElementById("error-day-label").textContent = "";
            document.getElementById("days").textContent = difference.days;
        }
    };
    validateFields(yearInput, monthInput, dayInput);
});