'use strict';

var userPoints = 0;

// Welcome message
alert('Hey there and welcome to my guessing game! Answer the following questions to learn some fun facts about me. For every question you guess correctly, you will win 1 point!');

var userName = prompt('Before you get to know me, I would like to get to know you. Please tell me your name.');

console.log(userName);

// Enter Username
alert('Great, ' + userName + '. Let\'s begin!');

// Question 1 - Cat Person
function questOne () {
  var catPerson = prompt('Am I a cat person?' , 'type yes or no').toLowerCase();

  console.log(catPerson);

  if (catPerson === 'yes' || catPerson === 'y') {
    alert('Excellent job, ' + userName + '. I am indeed OBSESSED with cats and have an adorable orange tabby named Ponyo.');
    userPoints++;
  } else {
    alert('I am definitely a cat person, ' + userName + ' and can\'t believe you would think otherwise!');
  }
}
questOne();

// Question 2 - Red Hair
function questTwo () {
  var redHair = prompt('Is red my natural hair color?' , 'type yes or no').toLowerCase();

  console.log(redHair);

  if (redHair === 'yes' || redHair === 'y') {
    alert('You are correct, ' + userName + '! I have never dyed my hair in my life.');
    userPoints++;
  } else {
    alert('Incorrect! I have never dyed my hair in my life.');
  }
}
questTwo();

// Question 3 - Snowboarder
function questThree(){
  var snowBoard = prompt('Am I a snowboarder?' , 'type yes or no').toLowerCase();

  console.log(snowBoard);

  if (snowBoard === 'no' || snowBoard === 'n') {
    alert('That\'s right, ' + userName + '! I prefer to ski my way down the slopes.');
    userPoints++;
  } else {
    alert('No way, ' + userName + '! I am a ski bum :)');
  }
}
questThree();

// Question 4 - Morning Person
function questFour() {
  var morningPerson = prompt('Am I a morning person?' , 'type yes or no').toLowerCase();

  console.log(morningPerson);

  if (morningPerson === 'no' || morningPerson === 'n') {
    alert('You know me so well, ' + userName + '! I love sleep and dread waking up early.');
    userPoints++;
  } else {
    alert('No way, ' + userName + '. I love sleeping in.');
  }
}
questFour ();

// Question 5 - Favorite Cocktail
function questFive (){
  var manhattan = prompt('Is my favorite cocktail a Manhattan?' , 'type yes or no').toLowerCase();

  console.log(manhattan);

  if (manhattan === 'yes' || manhattan === 'y') {
    alert('You guessed correct, ' + userName + '! My go-to order is a Manhattan with Maker\'s Mark.');
    userPoints++;
  } else {
    alert('Wrong! What\'s better than a Manhattan with Maker\'s Mark, ' + userName + '?');
  }
}
questFive();

// Question 6 - How many states have I lived in?
function questSix () {
  var totalChances = 4;
  for (var i = 0; i < 4; i++) {
    var states = prompt('In how many states have I lived? You have ' + (totalChances - i) + ' chances to guess correctly!', 'type in a number');
    console.log(states);
    if (states === '4') {
      alert('You are correct, ' + userName + '! I have lived in Connecticut, New York, California and Washington.');
      userPoints++;
      break;
    } else if (states > 4) {
      if (i < 3) {
        alert('A little lower, ' + userName + '.');
      } else {
        alert('Too bad! In case you were wondering, I have lived in 4 states: Connecticut, New York, California and Washington.');
      }
    } else {
      if (i < 3) {
        alert('A little higher, ' + userName + '.');
      } else {
        alert('Too bad! In case you were wondering, I have lived in 4 states: Connecticut, New York, California and Washington.');
      }
    }
  }
}
questSix ();

// Question 7 - Favorite Animal
function cute() {
  var favoriteAnimals = ['wolf', 'red panda', 'alpaca', 'otter']; // lists the animal array
  var animal;
  var totalGuesses = 6;
  var counter = 0;
  var rightAnswer;

  while (counter < 7) {
    animal = prompt('Can you guess one of my favorite animals? You have ' + (totalGuesses - counter) + ' chances to guess correctly.').toLowerCase();
    console.log(animal); // prints the user's animal
    for (var i = 0; i < favoriteAnimals.length; i++) { // this loops through the array
      console.log(favoriteAnimals[i]); // This prints all of the elements in the array
      if (animal === favoriteAnimals[i]) { // If the user's animal matches any of the animals in the array
        rightAnswer = true;
      }
    }
    if (!rightAnswer) {
      alert('Wrong answer. Try again!');
      counter++;
    } else {
      alert('Congratulations, ' + userName + ' you guessed one! My four favorite animals are a wolf, red panda, alpaca and otter.'); // congratulate them
      counter += 7;
      userPoints++; // give them a point
    }
    if (counter === 6) {
      alert('No matches! In case you are interested, my four favorite animals are a wolf, red panda, alpaca and otter.');
      break;
    }
  }
}
cute ();

alert('Thanks for playing my game, ' + userName + '! You earned ' + userPoints + ' points out of 7 total points.');
