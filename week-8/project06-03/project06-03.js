"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Angelica Gutierrez
      Date:   May 12, 2024

      Filename: project06-03.js
*/

// declare the useShip variable
let useShip = document.getElementById("useShip");
// add event listener
useShip.addEventListener("click", copyShippingToBilling);

// copy shipping function
function copyShippingToBilling() {
  if (useShip.checked) {
    document.getElementById("firstnameBill").value = document.getElementById("firstnameShip").value;
    document.getElementById("lastnameBill").value = document.getElementById("lastnameShip").value;
    document.getElementById("address1Bill").value = document.getElementById("address1Ship").value;
    document.getElementById("address2Bill").value = document.getElementById("address2Ship").value;
    document.getElementById("cityBill").value = document.getElementById("cityShip").value;
    document.getElementById("countryBill").value = document.getElementById("countryShip").value;
    document.getElementById("codeBill").value = document.getElementById("codeShip").value;
    document.getElementById("stateBill").selectedIndex = document.getElementById("stateShip").selectedIndex;
  }
}

// declare formElements variable and using the querySelectorAll()
let formElements = document.querySelectorAll("input[type='text']");

// declare fieldCount equal to the length of the formElements node list
let fieldCount = formElements.length;

// declare the errorBox referencing the element with the id “errorBox”
let errorBox = document.getElementById("errorBox");

// for loop to add event listeners to form elements
for (let i = 0; i < fieldCount; i++) {
  formElements[i].addEventListener("invalid", showValidationError); // event listener that calls the showValidationError()
}

// showValidationError(evt) function
function showValidationError(evt) {
  evt.preventDefault(); // event object evt, apply the preventDefault()
  errorBox.textContent = "Complete all highlighted fields"; // textContent property of errorBox to text string
}