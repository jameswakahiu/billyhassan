document.addEventListener("DOMContentLoaded", function() {
    // Populate year of make dropdown
    populateYearOfMake();

    // Event listener for Calculate Value button click
    document.getElementById("calculateButton").addEventListener("click", function() {
        calculateValue();
    });
});

function populateYearOfMake() {
    const currentYear = 2023; // Use 2023 as the current year
    const yearOfMakeDropdown = document.getElementById("yearOfMake");

    for (let year = currentYear - 1; year >= 1900; year--) {
        const option = document.createElement("option");
        option.text = year;
        option.value = year;
        yearOfMakeDropdown.add(option);
    }
}

function calculateValue() {
    const unitValue = parseFloat(document.getElementById("unitValue").value);
    const yearOfMake = parseInt(document.getElementById("yearOfMake").value);
    const yearsSinceMake = 2023 - yearOfMake; // Calculate years from manufacture to 2023

    const marketValue = unitValue * Math.pow(0.9, yearsSinceMake);
    const forcedValue = 0.85 * marketValue;

    // Display calculated market value
    const marketValueElement = document.getElementById("marketValue");
    marketValueElement.innerHTML = "<strong>Market Value:</strong> " + marketValue.toFixed(2);

    // Display calculated forced value
    const forcedValueElement = document.getElementById("forcedValue");
    forcedValueElement.innerHTML = "<strong>Forced Value:</strong> " + forcedValue.toFixed(2);

    // Show the result box
    document.getElementById("resultBox").style.display = "block";
}
