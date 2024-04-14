/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: 
      Date:   

      Filename: project03-01.js
*/

//variable for menu
let menuItems = document.getElementsByClassName("menuItem");

//Create a for loop that loops through the contents of the menuItems collection with a counter variable that starts with an initial value of 0 up to a value less than the length of the menuItems collection
for(let i = 0; i < menuItems.length; i++) {
menuItems[i].addEventListener("click", calcTotal);
}
        

//Function for calcTotal
function calcTotal(){ 
let orderTotal = 0;
          for(i = 0; i < 5; i++) {
              if(menuItems[i].checked) {
                orderTotal += (Number(menuItems[i].value) * 1);
              }
              document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
                 }
                  };

 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }