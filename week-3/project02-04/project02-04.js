/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Angelica Gutierrez
      Date:   April 7, 2024

      Filename: project02-04.js
 */

// Declaring constants with initial values
const CHICKEN_PRICE = 10.95;
const HALIBUT_PRICE = 13.95;
const BURGER_PRICE = 9.95;
const SALMON_PRICE = 18.95;
const SALAD_PRICE = 7.95;
const SALES_TAX = 0.07;

document.getElementById("chicken").addEventListener("click", calcTotal);
document.getElementById("halibut").addEventListener("click", calcTotal);
document.getElementById("burger").addEventListener("click", calcTotal);
document.getElementById("salmon").addEventListener("click", calcTotal);
document.getElementById("salad").addEventListener("click", calcTotal);


function calcTotal(){
  let cost = 0;

  const buyChicken = document.getElementById("chicken").checked;
  const buyHalibut = document.getElementById("halibut").checked;
  const buyBurger = document.getElementById("burger").checked;
  const buySalmon = document.getElementById("salmon").checked;
  const buySalad = document.getElementById("salad").checked;

  cost += buyChicken ? CHICKEN_PRICE : 0;
  cost += buyHalibut ? HALIBUT_PRICE : 0;
  cost += buyBurger ? BURGER_PRICE : 0;
  cost += buySalmon ? SALMON_PRICE : 0;
  cost += buySalad ? SALAD_PRICE : 0;

  const tax = cost * SALES_TAX;
  const totalCost = cost + tax;

  document.getElementById("foodTotal").innerHTML = formatCurrency(cost);
  document.getElementById("foodTax").innerHTML = formatCurrency(tax);
  document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
}

// Function to display a numeric value as a text string in the format $##.##
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
