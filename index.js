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
    answer : "Manish Kumar Jha"
  },
  q2 = {
    question : "I want to become a Full Stack ________? ",
    answer : "Developer"
  },
  q3 = {
    question : "I am interested in learning which Javascript framework: React or Angular? ",
    answer: "React"
  },
  q4 = {
    question : "Which superhero do I like more, Superman or Batman? ",
    answer : "Superman"
  },
  q5 = {
    question : "Do I prefer Apples or Oranges? ",
    answer : "Apples"
  }
];

function welcome() {
  var username = readlineSync.question("What is your name? ");

  console.log("Welcome " + username + " to DO YOU KNOW MANISH!");
}

function play(q, a){
  var answer=readlineSync.question(q);
    if(answer===a){
      console.log("Right!");
      score+=1;
    }
    else{
      console.log("Wrong!");
      score-=1;
    }
  console.log("Current Score: " + score);
}

function finalScore(){
  console.log("Congratulations! you scored: ", score);

  console.log("Check out the leaderboard below, ping me if you think you belong there and I'll update it.");

  highScores.map(score => console.log(score.name, " : ", score.score));
}

welcome();
for(var i = 0 ; i<qna.length ; i++){
  play(qna[i].question, qna[i].answer);
}
finalScore();