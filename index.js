var readlineSync = require('readline-sync');

var score = 0;

var questions = [
  {
    question : "What is my full name? ",
    answer : "Cindy Demorah Rodrigues"
  },
  {
    question : "Where was I born? ",
    answer : "Mangalore"
  },
  {
    question : "What is my favourite hobby or pastime? ",
    answer : "Reading"
  },
  {
    question : "What is my pet's name? ",
    answer : "Brownie"
  },
  {
    question : "Which is my favourite song? ",
    answer : "Khaare Raste"
  },
  {
    question : "What is my favourite colour? ",
    answer : "Blue"
  },
  {
    question : "What is my favourite season of the year? ",
    answer : "Winter"
  },
  {
    question : "What is my favourite sport? ",
    answer : "Badminton"
  },
  {
    question : "What is my favourite food? ",
    answer : "Biryani"
  },
  {
    question : "What is my dream travel destination? ",
    answer : "Switzerland"
  }];

var highscores = [
{
  name : "Cindy",
  score : 10
},
{
  name : "Disha",
  score : 9
},
{
  name : "Aldo",
  score : 8
}];

function welcome()
{
  var userName = readlineSync.question("What's your name? ");
  console.log("Hi " + userName + "! Welcome to DO YOU KNOW ME?");
  console.log("----------");
}

function play(question, answer)
{
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase())
  {
    console.log("Right :))");
    score++;
  }
  else
  {
    console.log("Wrong :((");
  }
  console.log("Current Score : " + score);
  console.log("----------");
}

function quiz()
{
  for(var i = 0; i < questions.length; i++)
  {
    play(questions[i].question, questions[i].answer);
  }
}

function checkNewHighscore()
{
  for(var i = 0; i < highscores.length; i++)
  {
    if(score > highscores[i].score)
    {
      return true;
    }
  }
  return false;
}

function showScore()
{
  console.log("YAY! Your Final Score : " + score);
  console.log("----------");
  console.log("The High Scores are : ");
  for(var i = 0; i < highscores.length; i++)
  {
    console.log(highscores[i].name + " : " + highscores[i].score);
  }
  console.log("----------");
  var check = checkNewHighscore();
  if(check)
  {
    console.log("CONGRATULATIONS! You have beaten a high score. Send me a screenshot to update your name in the high scores!");
  }
}

welcome();
quiz();
showScore();