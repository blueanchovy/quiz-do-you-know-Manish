var readlineSync= require('readline-sync'); 

var score = 0;

var highScores = [
  {
  name : 'Ajay',
  score : 5
  },
  {
    name : 'Vijay',
    score : 3
  }
];

var qna = [
  q1 = {
    question : "What is my full name? ",
    answer : "MANISH KUMAR JHA"
  },
  q2 = {
    question : "I want to become a Full Stack ________? ",
    answer : "DEVELOPER"
  },
  q3 = {
    question : "I am interested in learning which Javascript framework: React or Angular? ",
    answer: "REACT"
  },
  q4 = {
    question : "Which superhero do I like more, Superman or Batman? ",
    answer : "SUPERMAN"
  },
  q5 = {
    question : "Do I prefer Apples or Oranges? ",
    answer : "APPLES"
  }
];

function welcome() {
  var username = readlineSync.question("What is your name? ");

  console.log("Welcome " + username + " to DO YOU KNOW MANISH!\n");
}

function play(q, a){
  var answer=readlineSync.question(q).toUpperCase();
    if(answer===a){
      console.log("Right! The right answer is "+a);
      score+=1;
    }
    else{
      console.log("Wrong! The right answer is "+a);
      score-=1;
    }
  console.log("Current Score: " + score+ "\n");
}

function finalScore(){
  console.log("\nCongratulations! you scored: ", score);

  console.log("\nCheck out the leaderboard below, ping me if you think you belong there and I'll update it.\n");

  highScores.map(score => console.log(score.name, " : ", score.score));
}

welcome();
for(var i = 0 ; i<qna.length ; i++){
  play(qna[i].question, qna[i].answer);
}
finalScore();