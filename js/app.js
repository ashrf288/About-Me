'use strict';


//welcome prompt

let userName = prompt('hello, what is your name ?');
let counter = 0;

alert(`nice to meet you ${userName} , welcome to the quize game (me editoin) were you have to answer a series of  question about me .
so if your ready click ok.  `);

// Question 1-5

function questins(questionText, correctAnswer){
  let userInput;
  userInput = prompt(questionText).toLowerCase();
  while(userInput!== 'yes' && userInput!== 'y' && userInput!== 'no' &&userInput!== 'n'){
    userInput = prompt(questionText + ' you should answer with yes / y or no /n').toLowerCase();
  }
  switch (userInput){
  case correctAnswer[0]:
  case correctAnswer[1]:
    alert('you guessed it right, now go to the next question.');
    counter++;
    break;
  default:
    alert('you got it wrong');
    break;
  }
}

let question = ['Do I like boxing?','Do I like lamborghini car?','Do I like mansaf?','Do I like the god father movie?','Is Messi my favorite athlete?'];
let answer = [['yes','y'],['yes','y'],['yes','y'],['yes','y'],['no','n']];
for (let i = 0; i < question.length; i++){
  questins(question[i], answer[i]);
}

// 6th question

let luckyNum=prompt(`so ${userName} can you guess my lucky number?
hint ( its between 1-8) take a guess below . `);



for (let i=1;i<=4;i++){
  let attempt= 4-i;
  if (Number(luckyNum) === 4){
    alert(`yay, ${userName} you got it right it is 4 `);
    counter++;
    break;
  }else if (Number(luckyNum) < 4 ) {
    luckyNum= prompt(`no ${userName}} go higher attempts left ${attempt} `);
  }else if (luckyNum > 4 ) {
    luckyNum= prompt(`no ${userName}} go lower attempts left ${attempt}`);
  } else {
    luckyNum= prompt(`this is not a valid choice pls choose a number  between
1 and 8 attempts left ${attempt}`);
  } if (attempt === 1 && Number(luckyNum) !== 4 ){
    alert('ohh your out of attempts the number was 4');
  }

}

// 7th question

let myFavMovie=['avengers','the god father', 'black panther'];

let guess =prompt('what is my favorite movie?').toLowerCase();

let result= myFavMovie.includes(guess);
console.log(result);

for (let i =0;i<6;i++){
  let attempts=5-i;
  let result = myFavMovie.includes(guess);
  if (result === true){
    alert('you got it right');
    counter++;
    break;
  }else if(attempts ===0){
    alert(`sorry ,you have no more attempts the  right answers are
   ${myFavMovie}`);
  }
  else{
    guess =prompt(`try again ? you have ${attempts} attempts left`);
  }
}

alert(`so ${userName} I hope you liked that quiz and found it entertaining
have a good day number of correct answers is ${counter}.`);

