'use strict';

var errorCount = 0;
var correctAnswers = 0;

function countErrors(errors) {

  if (errors === 1) {
    alert('You are horrible, get in the front leaning rest to enter Y/N or yes/no as an answer - please do so for future questions.');
  }
  if (errors === 2) {
    alert('Start pushing the world, all answers must be Y/N or yes/no. Please follow instructions.');
  }
  if (errors === 3) {
    alert('I am about to use some expletives. All answers will either be a simple YES or NO.');
  }
  if (errors === 4) {
    alert('Iilteracy is very among most Americans. You must cant read.');
  }
  if (errors >= 5) {
    alert('Go pound sand.');

  }
}



function correctCount() {
  console.log('The user currently has ', correctAnswers, ' correct answers.');
}



var userName = prompt('Hi there! What\'s your name?');


if (userName === null || userName === '') {
  alert('Well, you need a name, so... We\'re going to call you NAN.');
  userName = 'NAN';

}

console.log('Guest\'s name: ', userName);



var questionsGame = ['Would you guess that Regenal has served in the Army, ' + userName + '?'];

questionsGame.push('So, ' + userName + ', do you think it\'s true that Regenal\'s done work within the US Special Operations?');
questionsGame.push('Would you believe Regenal has been in every country ?');
questionsGame.push('How about a simpler one, ' + userName + '. Would you guess Regenal is over the age of 46?');
questionsGame.push('Alright, here\'s one without a correct answer. Do you think Regenal will succeed at Codefellows?');


var yesAnswers = ['Factually, he has served 15.'];

yesAnswers.push('Yes – It was the best time in my career.');

yesAnswers.push('You are so bright, yes. It\'s best time in my life.');
yesAnswers.push('Not quite.');
yesAnswers.push('Well, ahhhh, ' + userName + ', thank you!');


var noAnswers = ['I beg to differ.'];
noAnswers.push('Well, I have.');

noAnswers.push('You can\’t tell, I have.');

noAnswers.push('Whoa! Regenal was born in \'1970.');
noAnswers.push('Awww. I better, ' + userName + '.');


var gameAnswers = [];
var possibleAnswers = ['y', 'yes', 'n', 'no'];

function fiveQuestions() {
  for (var i = 0; i < questionsGame.length; i++) {
    gameAnswers[i] = prompt(questionsGame[i]);
    if (gameAnswers[i] === null || gameAnswers[i] === '') {
      gameAnswers[i] = 'hmmmm';
    }
    var noMatch = 0;
    for (var j = 0; j < possibleAnswers.length; j++) {
      if (gameAnswers[i].toLowerCase() === possibleAnswers[j]) {
        if (j <= 1) {
          alert(yesAnswers[i]);
          correctAnswers++;
        } else if (j <= 3) {
          alert(noAnswers[i]);
        }
        console.log('Guest\'s answer to question #', i + 1, ': ', gameAnswers[i]);
      } else {
        noMatch++;
      }
    }
    if (noMatch === 4) {
      errorCount++;
      countErrors(errorCount);
      if (errorCount === 5) {
        i = questionsGame.length;
      } else {
        i--;
      }
    }
    correctCount();
  }
}


fiveQuestions();

function numberGuesser() {
  var userGuess = 0;
  var randomNumber = Math.floor(Math.random() * 20);
  var numGuesses = 0;
  console.log('The random number is ', randomNumber);


  alert('Let\'s move on. Time to guess a random number between 1 and 20. You get four guesses!');
  while (userGuess !== randomNumber) {
    userGuess = prompt('OK - make a guess!');
    if (userGuess < randomNumber) {
      alert('Too low - go higher!');
    } else if (userGuess > randomNumber) {
      alert('Too high - go lower!');
    } else {
      alert('Good job! You\'re correct! The number was ' + randomNumber + '.');
      userGuess = randomNumber;
      correctAnswers++;
    }
    numGuesses++;
    if (numGuesses >= 4 && userGuess !== randomNumber) {
      alert('No more guesses. The correct number was ' + randomNumber + '.');
      userGuess = randomNumber;
    }
  }
  correctCount();
}



numberGuesser();

function questionsCountries() {
  var visitedCountries = ['greece', 'belgium', 'netherlands', 'london', 'germany', 'luxemburg', 'italy', 'france', 'switzerland', 'austria', 'australia', 'philippines', 'guam', 'korea', 'a lot more'];
  alert('One more: see if you can guess any of the states Regenal has visited (besides Washington)! Full names only, no abbreviations. You get six guesses!');

  for (var numCountriesGuess = 0; numCountriesGuess < 6; numCountriesGuess++) {
    var countriesGuess = prompt('What\'s your guess?');
    for (var k = 0; k < visitedCountries.length; k++) {
      if (countriesGuess.toLowerCase() === visitedCountries[k]) {
        alert('That\'s right! Regenal has visited ' + countriesGuess + '.');
        k = visitedCountries.length;
        numCountriesGuess = 6;
        correctAnswers++;
      }
    }
    if (numCountriesGuess !== 6) {
      alert('Regenal has not visited that countries. You have ' + (5 - numCountriesGuess) + ' guesses left.');
    }
  }


  for (var l = 0; l < visitedCountries.length; l++) {
    var firstLetter = visitedCountries[l][0].toUpperCase();
    visitedCountries[l] = firstLetter + visitedCountries[l].slice(1);
  }


  alert('Here is the list of all the states besides Washington Regenal has visited: ' + visitedCountries.join('\n'));
}




function gameOver() {
  alert('Thanks for enjoying my game, ' + userName + '! You got a total of ' + correctAnswers + ' correct answers out of 7.');
}

noUserName();
fiveQuestions();
numberGuesser();
questionsCountries();
gameOver();
