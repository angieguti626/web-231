/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Angelica Gutierrez
      Date:   March 31, 2024

      Filename: project02-02.js
 */
function verifyForm() {
  //Declaring the name variable equal to the value of the input control with the id
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  //Conditional operator that tests the truthy or falsy value
  if (name && email && phone) {
    window.alert("Thank you!");
  } else {
    window.alert("Please fill in all fields");
  }

}

//Event Listener
document.getElementById("submit").addEventListener("click", verifyForm);
