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


    function calculateDiff(yearInput, monthInput, dayInput) {
        event.preventDefault();

        // Set error counter to 0
        let counter = 0;

        // Validate year input
        if (yearInput.value >= currentDate.getFullYear()) {
            document.getElementById("error-year-label").textContent = "Must be in the past";
            document.getElementById("year").classList.add("error-field");
            document.getElementById("year-title").classList.add("error-title")
            counter++;
        }
        else if (yearInput.value === "") {
            document.getElementById("error-year-label").textContent = "This field is required";
            document.getElementById("year").classList.add("error-field");
            document.getElementById("year-title").classList.add("error-title")
            counter++;
        }
        else {
            document.getElementById("error-year-label").textContent = "";
            document.getElementById("years").textContent = difference.years;
            document.getElementById("year").classList.remove("error-field");
            document.getElementById("year-title").classList.remove("error-title")
        }
        
        // Validate month input
        if (monthInput.value > 12) {
            document.getElementById("error-month-label").textContent = "Must be a valid month";
            document.getElementById("month").classList.add("error-field");
            document.getElementById("month-title").classList.add("error-title")
            counter++;
        }
        else if (monthInput.value === "") {
            document.getElementById("error-month-label").textContent = "This field is required";
            document.getElementById("month").classList.add("error-field");
            document.getElementById("month-title").classList.add("error-title")
            counter++;
        }
        else {
            document.getElementById("error-month-label").textContent = "";
            document.getElementById("months").textContent = difference.months;
            document.getElementById("month").classList.remove("error-field");
            document.getElementById("month-title").classList.remove("error-title")
        }
        
        // Validate day input
        if (dayInput.value > 31) {
            document.getElementById("error-day-label").textContent = "Must be a valid day";
            document.getElementById("day").classList.add("error-field");
            document.getElementById("day-title").classList.add("error-title")
            counter++;
        }
        else if (dayInput.value === "") {
            document.getElementById("error-day-label").textContent = "This field is required";
            document.getElementById("day").classList.add("error-field");
            document.getElementById("day-title").classList.add("error-title")
            counter++;
        }
        else {
            document.getElementById("error-day-label").textContent = "";
            document.getElementById("days").textContent = difference.days;
            document.getElementById("day").classList.remove("error-field");
            document.getElementById("day-title").classList.remove("error-title")
        }

        // Check for error counts, modify result text content if errors exist
        if (counter > 0) {
            document.getElementById("years").textContent = "-";
            document.getElementById("months").textContent = "-";
            document.getElementById("days").textContent = "-";
            
        }
    };
    calculateDiff(yearInput, monthInput, dayInput);
});