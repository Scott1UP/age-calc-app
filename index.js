const dayInput = document.querySelector("#day");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");
const button = document.querySelector("#button");
const currentDate = new Date();

// getDateDifference function
const getDateDifference = (userDate, currentDate) => {
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


const validateInput = (input, errorLabelId, errorFieldId, errorTitleId, errorMessage, validator) => {
    if (input.value === "") {
        document.getElementById(errorLabelId).textContent = "This field is required";
        document.getElementById(errorFieldId).classList.add("error-field");
        document.getElementById(errorTitleId).classList.add("error-title");
        return false;
    } else if (!validator(input.value)) {
        document.getElementById(errorLabelId).textContent = errorMessage;
        document.getElementById(errorFieldId).classList.add("error-field");
        document.getElementById(errorTitleId).classList.add("error-title");
        return false;
    } else {
        document.getElementById(errorLabelId).textContent = "";
        document.getElementById(errorFieldId).classList.remove("error-field");
        document.getElementById(errorTitleId).classList.remove("error-title");
        return true;
    }
}

const isYearValid = (value) => {
    return value !== "" && parseInt(value) < currentDate.getFullYear();
}

const isMonthValid = (value) => {
    return value !== "" && parseInt(value) > 0 && parseInt(value) <= 12;
}

const isDayValid = (value) => {
    return value !== "" && parseInt(value) > 0 && parseInt(value) <= 31;
}

button.addEventListener("click", event => {
    event.preventDefault();

    const userDate = `${yearInput.value}-${monthInput.value}-${dayInput.value}`;
    const difference = getDateDifference(userDate, currentDate);

    const yearValid = validateInput(yearInput, "error-year-label", "year", "year-title", "Must be in the past", isYearValid);
    const monthValid = validateInput(monthInput, "error-month-label", "month", "month-title", "Must be a valid month", isMonthValid);
    const dayValid = validateInput(dayInput, "error-day-label", "day", "day-title", "Must be a valid day", isDayValid);

    if (yearValid && monthValid && dayValid) {
        document.getElementById("years").textContent = difference.years;
        document.getElementById("months").textContent = difference.months;
        document.getElementById("days").textContent = difference.days;
    } else {
        document.getElementById("years").textContent = "-";
        document.getElementById("months").textContent = "-";
        document.getElementById("days").textContent = "-";
    }
});