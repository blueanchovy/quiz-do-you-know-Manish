var readlineSync= require('readline-sync'); 
var username = readlineSync.question("What is your name? ");
console.log("Welcome " + username + " to DO YOU KNOW MANISH!");
var score = 0;
function qora(q, a){
  var answer=readlineSync.question(q);
    if(answer===a){
      console.log("Right");
      score+=1;
    }
    else{
      console.log("Wrong");
      score-=1;
    }
  console.log("Score: " + score);
}
var qna = [
  q1 = {
    question : "What is your name? ",
    answer : "Manish"
  },
  q2 = {
    question : "How old are you? ",
    answer : "26"
  }
]
for(var i = 0 ; i<qna.length ; i++){
  qora(qna[i].question, qna[i].answer);
}