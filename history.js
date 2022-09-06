let dataArray = [];

for (let i = 0; i < localStorage.length; i++) {
    dataArray[i] = localStorage.getItem(localStorage.key(i));
}

//Creating cards
dataArray.sort();
dataArray.forEach((element, index) => {
    let submitData = element.split("&");
    let firstName = submitData[0];
    let lastName = submitData[1];
    let email = submitData[2];
    let phone = submitData[3];
    let company = submitData[4];
    let address = submitData[5];
    let keyName = submitData[6];

    document.body.insertAdjacentHTML("beforeend", "<div class=\"submit-history-card\">\n" +
        "        <p class=\"field-name\">First Name</p>\n" +
        "        <p class=\"card-first-name field-value\"></p>\n" +
        "\n" +
        "        <p class=\"field-name\">Last Name</p>\n" +
        "        <p class=\"card-last-name field-value\"></p>\n" +
        "\n" +
        "        <p class=\"field-name\">Email</p>\n" +
        "        <p class=\"card-email field-value\"></p>\n" +
        "\n" +
        "        <p class=\"field-name\">Phone</p>\n" +
        "        <p class=\"card-phone field-value\"></p>\n" +
        "\n" +
        "        <p class=\"field-name\">Company</p>\n" +
        "        <p class=\"card-company field-value\"></p>\n" +
        "\n" +
        "        <p class=\"field-name\">Address</p>\n" +
        "        <p class=\"card-address field-value\"></p>\n" +
        "\n" +
        "        <button class=\"delete-button\" onclick='deleteForm(this.id)'>Delete</button>\n" +
        "    </div>");

    document.querySelectorAll(".card-first-name")[index].innerHTML = firstName;
    document.querySelectorAll(".card-last-name")[index].innerHTML = lastName;
    document.querySelectorAll(".card-email")[index].innerHTML = email;
    document.querySelectorAll(".card-phone")[index].innerHTML = phone;
    document.querySelectorAll(".card-company")[index].innerHTML = company;
    document.querySelectorAll(".card-address")[index].innerHTML = address;
    document.querySelectorAll(".delete-button")[index].setAttribute("id", keyName);
})

let hasChanged = false;

//Delete card
function deleteForm(toDelete) {
    localStorage.removeItem(toDelete);
    hasChanged = true;
}

//Check for card delete and refresh
setInterval(refresh, 100);

function refresh() {
    if (hasChanged === true) location.reload();
}

//Sync between tabs
window.addEventListener('storage', (e) => {
    location.reload();
});
