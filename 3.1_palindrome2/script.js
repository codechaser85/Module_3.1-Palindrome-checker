const txtInput = document.querySelector('.inputs input'), // input field
checkBtn = document.querySelector('.inputs button'), // check button
infoText = document.querySelector('.info-text'); // info text
let filterInput; // input value

checkBtn.addEventListener("click", () => {
    // get the input value
    let reverseInput = filterInput.split("").reverse().join(""); // reverse the input value
    infoText.computedStyleMap.display = "block"; // display the info text
    if(filterInput != reverseInput) {
        // if the input value is not equal to reversed input value
        return infoText.innerHTML = `No, <span>'${txtInput.value}'</span> isn't a palindrom!`;
    }
    // if the input value is equal to reversed input value
    infoText.innerHTML = `Yes, <span>'${txtInput.value}'</span> is a palindrom!`;
});

// input event when the user types something
txtInput.addEventListener("keyup", () => {
    // get the filtered input value
    filterInput = txtInput.value.toLowerCase().replace(/[^a-zA-Z]/g, ""); // using regex to filter the input value
    if(filterInput) {
        // if the filtered input value is not empty
        return checkBtn.classList.add("active");
    }
    // if the filtered input value is empty
    infoText.computedStyleMap.display = "none"; // hide the info text
    checkBtn.classList.remove("active"); // remove the active class from the check button
});


