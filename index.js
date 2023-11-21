document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const tableBody = document.querySelector('#entriesTable tbody');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Reset validation messages
        resetValidationMessages();

        // Validate form inputs
        if (validateForm()) {
            // If form is valid, add data to table and local storage
            addEntryToTable();
            saveEntryToLocalstorage();
            form.reset(); // Clear the form
        }
    });

    function resetValidationMessages() {
        // Reset validation messages here (if any)
    }

    function validateForm() {
        // Implement your form validation logic here
        // Check name, email, password, dob, and terms
        // Display validation messages if needed

        // Example age validation (between 18 and 55)
        const dobInput = document.getElementById('dob');
        const dobValue = new Date(dobInput.value);
        const today = new Date();
        const minAgeDate = new Date(today);
        minAgeDate.setFullYear(today.getFullYear() - 55);
        const maxAgeDate = new Date(today);
        maxAgeDate.setFullYear(today.getFullYear() - 18);

        if (dobValue < minAgeDate || dobValue > maxAgeDate) {
            alert('Age must be between 18 and 55.');
            return false;
        }

        return true;
    }

    function addEntryToTable() {
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const dob = document.getElementById('dob').value;
        const terms = document.getElementById('terms').checked;

        // Create a new row in the table
        const newRow = tableBody.insertRow();
        newRow.innerHTML = `<td>${name}</td><td>${email}</td><td>${password}</td><td>${dob}</td><td>${terms}</td>`;
    }

    function saveEntryToLocalstorage() {
        // Get existing entries from local storage or initialize an empty array
        const entries = JSON.parse(localStorage.getItem('userEntries')) || [];

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const dob = document.getElementById('dob').value;
        const terms = document.getElementById('terms').checked;

        // Add new entry to the array
        const newEntry = { name, email, password, dob, terms };
        entries.push(newEntry);

        // Save the updated entries array to local storage
        localStorage.setItem('userEntries', JSON.stringify(entries));
    }
});
