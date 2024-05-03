"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Angelica Gutierrez
      Date:   5 May 2024

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 20; // Changing time limit to 90
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
let timeID;

// and the node list for questions
let questionList = document.querySelectorAll("div#quiz input");

//Adding onclick event handler to startQuiz object
startQuiz.onclick = function () {
  overlay.className = "showquiz";
  timeID = setInterval(countdown, 1000);
}

//countdown() function
function countdown() {
  if (timeLeft === 0) { // If timeLeft is 0 do:
    clearInterval(timeID) // Cancel timed command
    let totalCorrect = checkAnswers(); // Declare totalCorrect to checkAnswers()

    if (totalCorrect === correctAnswers.length) { // If totalCorrect equals correctAnswers, display an alert congratulating getting 100%
      window.alert("Congrats on getting 100%!");
    }
    else {
      window.alert("You got " + totalCorrect + " correct out of " + correctAnswers.length); // Display alert number of incorrect answers out of the total questions
      timeLeft = quizTime; // Change value of timeLeft to quizTime
      quizClock.value = quizTime; // Set quizClock.value value of the timeLeft
      overlay.className = "hidequiz"; // Change class of overlay object to “hidequiz”
    }
  } else { // If timeLeft is not equal 0, do this:
    timeLeft--; // Decrease value of timeLeft by 1
    quizClock.value = timeLeft; // Set quickClock.value to timeLeft
  }
}




















/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
  let correctCount = 0;

  for (let i = 0; i < questionList.length; i++) {
    if (questionList[i].value === correctAnswers[i]) {
      correctCount++;
      questionList[i].className = "";
    } else {
      questionList[i].className = "wronganswer";
    }
  }
  return correctCount;
}

