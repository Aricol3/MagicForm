let inputFirstName = document.getElementById("first-name");
let inputLastName = document.getElementById("last-name");
let inputEmail = document.getElementById("email");
let inputPhone = document.getElementById("phone");
let inputCompany = document.getElementById("company");
let inputAddress = document.getElementById("address");
let inputElementArray = [inputFirstName, inputLastName, inputEmail, inputPhone, inputCompany, inputAddress];

function storeValue(event, key) {
    localStorage.setItem(key, event.target.value);
}

// Storing form data in localStorage
for (let i = 0; i < inputElementArray.length; i++) {
    inputElementArray[i].addEventListener("input", function (event) {
        storeValue(event, inputElementArray[i].getAttribute("id"));
    });
}

// Transferring data from localStorage to form
window.onload = (event) => {
    for (let i = 0; i < inputElementArray.length; i++) {
        for (let j = 0; j < localStorage.length; j++) {
            if (inputElementArray[i].getAttribute("id") === localStorage.key(j)) {
                inputElementArray[i].value = localStorage.getItem(localStorage.key(j));
            }
        }
    }
}

// Storing form data collectively in localStorage when submit button is pressed
// Also, removing individual data from localStorage
document.getElementById("form").addEventListener("submit", (event) => {
    let submitData = [inputFirstName.value, inputLastName.value, inputEmail.value, inputPhone.value, inputCompany.value
        , inputAddress.value];

    let countSubmitDataRecord = 0;
    let keys = Object.keys(localStorage);
    for (let key of keys) {
        if (key.startsWith("card")) {
            countSubmitDataRecord++;
        } else {
            localStorage.removeItem(key);
        }
    }

    localStorage.setItem(`card${localStorage.length}`, submitData.join("&") + `&card${localStorage.length}`);
});

//Sync between tabs
window.addEventListener('storage', (e) => {
    location.reload();
});