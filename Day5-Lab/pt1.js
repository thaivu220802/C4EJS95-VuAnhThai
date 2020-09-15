// Learn how to create a random number from 0 to 1

let mathRand = Math.round(Math.random() * 100) / 100; // to 2 decimal places

// Learn how to randomly pick an item from an array

const testArr = [1, 3, 4, 5, 1, 3];

function randomNum(start, stop) {
  const diff = stop - start;
  return Math.round(start + diff * Math.random());
}

function randomArr(arr) {
  const length = arr.length;
  return arr[randomNum(0, length)];
}

function shuffleArr(arr) {
  let oldArr = arr;
  let newArr = [];
  while (oldArr.length > 1) {
    let ind = randomNum(0, oldArr.length - 1);
    newArr.push(oldArr[ind]);
    oldArr.splice(ind, 1);
  }
  newArr.push(oldArr[0]);
  return newArr;
}

console.log(shuffleArr(testArr));

// Create a data structure to represent a list of quizzes, each quiz contains a question, 4 choices and rightChoice.

import { QUIZ } from "./quiz.js";
const QUIZ_LENGTH = QUIZ.length;
const QUIZ_CHOICES = ["1", "2", "3", "4"];

// Write a script to randomly select a quiz from the list above, show them to users
// Let it run continuously, make sure each question only appears once, if the questions has run out, let users know
// Calculate the score of the user
// Shuffle the choices each time you show users the quiz

let quizQuestionRem = [];
for (let i = 0; i < QUIZ_LENGTH; i++) {
  quizQuestionRem.push(i);
}
let score = 0;
quizQuestionRem = shuffleArr(quizQuestionRem);

for (let i = 0; i < QUIZ_LENGTH; i++) {
  let quizRand = parseInt(quizQuestionRem[i]);
  const quizQ = QUIZ[quizRand].question;
  const quizAind = QUIZ[quizRand].rightChoiceIndex
  const quizA = QUIZ[quizRand].choices[quizAind];
  let quizChoices = QUIZ[quizRand].choices;
  quizChoices = shuffleArr(quizChoices);
  quizChoices.unshift(null);
  let quizChoiceFormat = "";
  for (let i = 1; i < quizChoices.length; i ++) {
      quizChoiceFormat = `${quizChoiceFormat}
${i}. ${quizChoices[i]}`
  }
  let quizChoice = parseInt(prompt(`Question ${1 + i} out of ${QUIZ_LENGTH}: ${quizQ}
${quizChoiceFormat}

Enter a number from 1 to ${quizChoices.length - 1} to select your answer:`));
  while (QUIZ_CHOICES.indexOf(String(quizChoice)) < 0) {
    quizChoice = prompt(`Invalid input. Please try again.
Question ${1 + i} out of ${QUIZ_LENGTH}: ${quizQ}
${quizChoiceFormat}

Enter a number from 1 to ${quizChoices.length - 1} to select your answer:`);
  }
  if (quizChoices[quizChoice] === quizA) {
    score++;
    alert(
      `Bravo!!! Your score is now ${score}. ${QUIZ_LENGTH - i - 1} question(s) remain.`
    );
  } else {
    alert(
      `Wrong answer. Your score is still ${score}. ${QUIZ_LENGTH - i - 1} question(s) remain.`
    );
  }
}

alert(`We're out of questions! Your score is ${score}.`);

