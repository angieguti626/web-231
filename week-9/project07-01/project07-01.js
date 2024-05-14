"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: Angelica Gutierrez
      Date:   19 May 2024

      Filename: project07-01.js
*/

let signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function (e) {
  let pwd = document.getElementById("pwd").value;
  let feedback = document.getElementById("feedback");
  e.preventDefault(); //  prevent the browser from responding to the submit event

  // Password keys
  let regex1 = /[A-Z]/; // matches any uppercase letter A through Z
  let regex2 = /[0-9]/; // matches any single digit
  let regex3 = /[!\$#%]/; // character class containing the symbols !$#%

  // Checking Password
  if (pwd.length < 8) {
    feedback.textContent = "Your password must be at least 8 characters.";
  }
  else if (regex1.test(pwd) === false) {
    feedback.textContent = "Your password must include an uppercase letter.";
  } else if (regex2.test(pwd) === false) {
    feedback.textContent = "Your password must include a number.";
  } else if (regex3.test(pwd) === false) {
    feedback.textContent = "Your password must incluide one of the following: !$#%";
  }
  else {
    signupForm.submit(); // Submit form to process
  }
}
);