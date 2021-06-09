'use strict';


// //welcome prompt

let name=prompt('hello, what is your name ?');
let correctAnswers=0;

alert(`nice to meet you ${name} , welcome to the quize game (me editoin) were you have to answer a series of  question about me .
so if your ready click ok.  `);

// // first question

let myFavSport= prompt(`first question: what is my favorite soprt? 
(just type the name without the option number)

1- football   2- boxing`).toLowerCase();

for(var i=0;i<2;i){
if(myFavSport== 'boxing'){
    alert('you guessed it right, now go to the next question.');
    correctAnswers++;
    break;
    // console.log(myFavSport);
}else if (myFavSport=='football') {
    alert(`you got it wrong `);
    // console.log(myFavSport);
    break;
}else {
        alert('pls type one of the options (without the option num)');
        myFavSport= prompt(`first question: what is my favorite soprt? 
    (just type the name without the option number)
    
    1- football   2- boxing`).toLowerCase();
    
}
}

// //secound question

let myFavCar= prompt(`second question: what is my favorite car type? 
(just type the name without the option number)

1- lamborghini   2- lada`).toLowerCase();

for(var i=0;i<2;i){
if(myFavCar=='lamborghini' ){
    alert('you guessed it right, now go to the next question.');
    correctAnswers++;
    break;
    // console.log(myFavSport);
}else if (myFavCar=='lada'){
    alert(`you got it wrong `);
    break;
    // console.log(myFavSport);
}else {
    alert('pls type one of the options (without the option num)');
    myFavCar= prompt(`second question: what is my favorite car type? 
(just type the name without the option number)

1- lamborghini   2- lada`).toLowerCase();
}
}
// 3rd question



let myFavFooda= prompt(`third question: what is my favorite  food? 
(just type the name without the option number)

1- mansaf   2- bread`).toLowerCase();

for(var i=0;i<2;i){

if(myFavFooda== 'mansaf'){
    alert('you guessed it right, now go to the next question.')
    correctAnswers=correctAnswers+1;
    break;
    // console.log(myFavFood);
}else if (myFavFooda=='bread') {
    break;
    // console.log(myFavFood);
    alert(`you got it wrong `);
}else{ 
    alert('pls type one of the options (without the option num)');
    myFavFooda= prompt(`third question: what is my favorite  food? 
(just type the name without the option number)

1- mansaf   2- bread`).toLowerCase();

}
}

// 4th question

for(var i=0;i<2;i){
let myFavMovi= prompt(`fourth question: what is my favorite  movie? 
(just type the name without the option number
1- avengers   2- justice league`).toLowerCase();

if(myFavMovi== 'avengers'){
    alert('you guessed it right, now go to the next question.');
    correctAnswers++;
    break;
    // console.log(myFavMovie);
}else if (myFavMovi=='justice league') {
    alert(`you got it wrong `);
    break;
    // console.log(myFavMovie);
}else{ 
    alert('pls type one of the options (without the option num)');
    myFavMovi= prompt(`fourth question: what is my favorite  movie? 
(just type the name without the option number
1- avengers   2- justice league`).toLowerCase();


}
}

// fifth question 
for(var i=0;i<2;i){
let myFavAthlete= prompt(`who is my favorite athlete? 
(just type the name without the option number)

1- messi   2- mohammed ali`).toLowerCase();

if(myFavAthlete== 'mohammed ali'){
    alert('you guessed it right, now go to the next question.')
    break;
    correctAnswers=correctAnswers+1;
    // console.log(myFavAthlete);
}else if (myFavAthlete=='messi') {
    alert(`you got it wrong `);
    break;
    // console.log(myFavAthlete);
}else{ 
    alert('pls type one of the options (without the option num)');
    myFavAthlete= prompt(`who is my favorite athlete? 
(just type the name without the option number)

1- messi   2- mohammed ali`).toLowerCase();

}
}


//6th question

let luckyNum=prompt(`so ${name} can you guess my lucky number?
hint ( its between 1-8) take a guess below . `);



  for (var i=1;i<=4;i++){
      var attempt= 4-i;
      if (luckyNum == 4){
          alert(`yay, ${name} you got it right it is 4 `);
          correctAnswers=correctAnswers+1;
          break;
      }else if (luckyNum < 4 ) {
         luckyNum= prompt(`no ${name} go higher attempts left ${attempt} `)
      }else if (luckyNum > 4 ) {
        luckyNum= prompt(`no ${name} go lower attempts left ${attempt}`)
    } else {
        luckyNum= prompt(`this is not a valid choice pls choose a number  between 
        1 and 8 attempts left ${attempt}`);
    } if (attempt==1 && luckyNum != 4 ){
        alert(`ohh your out of attempts the number was 4`);
    } 
      
  }

//7th question 
  let myFavMovie=['avengers','the god father', 'black panther'];

  let guess =prompt(`what is my favorite movie?`).toLowerCase();
   

  var result= myFavMovie.includes(guess);
  console.log(result);


for (var i =0;i<6;i++){
    var attempts=5-i
    var result= myFavMovie.includes(guess);
    if (result==true){
        alert(`you got it right`);
        correctAnswers=correctAnswers+1;
        break;
      }else if(attempts==0){
          alert(`sorry ,you have no more attempts the  right answers are
           ${myFavMovie}`);
      }
      else{
        guess =prompt(`try again ? you have ${attempts} attempts left`);
      }
}
 

   





alert(`so ${name} I hope you liked that quiz and found it entertaining
have a good day number of correct answers  is ${correctAnswers} `);