// Display current year 

const today = new Date();
const currentYear = today.getFullYear();

const footerYear = document.getElementById("current-year");

function displayCurrentYear() {
    footerYear.innerHTML = currentYear;
}

displayCurrentYear();