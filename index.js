const email = document.getElementById("mail");
const form = document.querySelector("form");
const emailError = document.querySelector("#mail + span.error");
const emailBtn = document.getElementById("btn");
const main = document.getElementById("main-container");
const button = document.getElementById("btn");
const mainContent = main.innerHTML;

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
    } else {
        const emailValue = email;
        changeContent(emailValue);
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

function changeContent(emailValue) {
    main.innerHTML = `
        <div class="next-page" id="page">
            <img src="./assets/images/icon-success.svg" alt="success">
            <h1>Thanks for subscribing!</h1>
            <p>
                A confirmation email has been sent to <strong>${emailValue}</strong>. 
                Please open it and click the button inside to confirm your subscription.
            </p>
            <div class = "dismiss-btn">
                <button class="btn btn2" id = "dismiss">Dismiss message</button>
            </div>
        </div>
    `
    document.getElementById("dismiss").addEventListener('click', restoreMainContent);
};

function restoreMainContent() {
    main.innerHTML = mainContent;
};

button.addEventListener("click", changeContent);
