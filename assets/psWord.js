const passwordForm = document.getElementById("passwordBox");
const minPassLength = 8;
const maxPassLength = 128;
let specialCharsCheckbox = document.getElementsByName("specialChars")[0];
let numbersCheckbox = document.getElementsByName("numbers")[0];
let lwrCharsCheckbox = document.getElementsByName("lwrChars")[0];
let upprCharsCheckbox = document.getElementsByName("upprChars")[0];

// This function is used generate a password with the number of characters the user declared in the passwordLength prompt
function createPassword() {

    // write the character used for password generation
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseletters = lowercaseLetters.toUpperCase();
    const numbersList = "0123456789";
    const specialCharacters = "!@#$%^&*()_+{}|:?><[]";

    // Ask user how long they want their password to be
    let passwordLength = prompt("Length of password? (Must be from 8 to 128 characters)");

    // if no checkboxes are selected, then prompt the user again to fill out the form and reload the page
    if (lowercaseLetters == false && uppercaseletters == false && numbersList == false && specialsCharacters == false) {
        alert("You must select at least one character type!")

        // reload page to get back to the point where the event hasn't been triggered as there's no waiting while loop for checkbox input. hacky but it works
        window.location.reload();
    }
    // when the user password length submitted is more than 8 and less than 128, generate a password and place it in the correct area on the page
    if (passwordLength >= minPassLength && passwordLength <= maxPassLength) {

        // clears the password
        password = "";

        // (log) when the box is checked for the respective char type
        console.log(specialCharacters, numbersList, lowercaseLetters, uppercaseletters)

        // add characters as number of iterations is less defined length
        for (i = 0; i < passwordLength; i++) {
            // if our lowercase checkbox has been checked and the current length of our gen'd passwd is less than the user's passwordLength, add a random char from lowercaseLetters string
            if (lowercaseLetters && password.length < passwordLength) {
                password = password += lowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters.length));
            }
            if (uppercaseletters && password.length < passwordLength) {
                password = password += uppercaseletters.charAt(Math.floor(Math.random() * uppercaseletters.length));

            }
            if (numbersList && password.length < passwordLength) {
                password = password += numbersList.charAt(Math.floor(Math.random() * numbersList.length));

            }
            if (specialCharacters && password.length < passwordLength) {
                password = password += specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
            }

        }

        // include the generated password to html form
        passwordForm.value = password;
    }
    else {
        alert("Password MUST BE BETWEEN 8 AND 128 Characters!")
    }
}

// copy the generated password to users clipboard
function copyToClipboard() {
    let copyPass = document.getElementById("passwordBox");
    copyPass.focus();
    copyPass.select();
    document.execCommand("copy");
    alert("Password copied!");
}