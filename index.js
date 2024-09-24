const email = document.getElementById("mail");
const form = document.querySelector("form");
const emailError = document.querySelector("#mail + span.error")

email.addEventListener("input", (event) => {
    if(email.validity.valid){
        emailError.textContent = "";
        emailError.className = "error";
    } else {
        showError();
    }
});

form.addEventListener("submit", (event) => {
    if(!email.validity.valid) {
        showError();
        event.preventDefault();
    }
});

function showError() {
    if(email.validity.valueMissing) {
        emailError.textContent = "Enter an email address";
    } else if (email.validity.typeMismatch) {
        emailError.textContent = "Valid email required";
    } else if (email.validity.tooShort) {
        emailError.textContent = "Valid email required";
    }

    emailError.className = "error active";
};

